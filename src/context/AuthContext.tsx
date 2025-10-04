import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import type {
  LoginFormType,
  RegisterFormType,
  Role,
} from "../types/auth.types";
import axios from "axios";
import { toast } from "sonner";
import { jwtDecode } from "jwt-decode";

interface UserType {
  name: string;
  email: string;
  phone: string;
  role: Role;
}

type AuthContextTypes = {
  user: UserType | null;
  isAuthenticated: boolean;
  login: (loginDetails: LoginFormType) => void;
  register: (registerDetails: RegisterFormType) => void;
  logout: () => void;
};

type JwtDecode = { exp: number };

const AuthContext = createContext<AuthContextTypes | null>(null);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [token, setToken] = useState<string>();
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const savedToken = localStorage.getItem("token");
    if (savedToken) {
      const decoded = jwtDecode<JwtDecode>(savedToken);
      const isExpired = decoded.exp * 1000 < Date.now();

      if (isExpired) {
        setIsAuthenticated(false);
        localStorage.removeItem("token");
        localStorage.removeItem("auth");
      } else {
        setIsAuthenticated(true);
        setToken(savedToken);
        const savedAuth = localStorage.getItem("auth");
        if (savedAuth) setUser(JSON.parse(savedAuth));
      }
    }
  }, []);

  const login = async (loginFormData: LoginFormType) => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BASE_API_URL}/login`,
        loginFormData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.data.success) {
        setUser(response.data.data);
        setToken(response.data.token);
        toast.success(response.data.message);
      }
    } catch (err) {
      if (axios.isAxiosError(err) && err.response) {
        toast.error(err.response.data?.message || "Registration failed");
      } else {
        toast.error("Error in user login");
      }
    }
  };

  const register = async (registerFormData: RegisterFormType) => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BASE_API_URL}/register`,
        registerFormData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.data.success) {
        setUser(response.data.data);
        setToken(response.data.token);
        setIsAuthenticated(true);

        localStorage.setItem("token", token as string);
        localStorage.setItem(
          "auth",
          JSON.stringify({
            id: response.data.data?.id,
            name: response.data.data?.name,
            email: response.data.data?.email,
            phone: response.data.data?.lbk,
            role: response.data.data?.role
          })
        );
        toast.success(response.data.message);
      }
    } catch (err) {
      if (axios.isAxiosError(err) && err.response) {
        toast.error(err.response.data?.message || "Registration failed");
      } else {
        toast.error("Error in user register");
      }
    }
  };

  const logout = async () => {
    try {
      setIsAuthenticated(false);
      setToken("");
      setUser(null);
      localStorage.removeItem("auth");
      localStorage.removeItem("token");
    } catch (err) {
      if (axios.isAxiosError(err) && err.response) {
        toast.error(err.response.data?.message || "logout failed");
      } else {
        toast.error("Error in user logout");
      }
    }
  };

  return (
    <AuthContext.Provider
      value={{
        login,
        register,
        logout,
        isAuthenticated,
        user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used inside AuthProvider");
  return ctx;
};
