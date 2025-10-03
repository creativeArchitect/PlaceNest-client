import { createRoot } from "react-dom/client";
import "./global.css";
import App from "./App.tsx";
import { Toaster } from "sonner";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext.tsx";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Toaster position="top-right" />
    <AuthProvider>
      <App />
    </AuthProvider>
  </BrowserRouter>
);
