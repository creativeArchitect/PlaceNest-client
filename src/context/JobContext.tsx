import { createContext, useContext, type ReactNode } from "react";
import { toast } from "sonner";
import axios from "axios";

type JobContextType = {
  getAllJobs: () => void;
  getJob: (jobId: string) => void;
};

const JobContext = createContext<JobContextType | null>(null);

export const JobProvider = ({ children }: { children: ReactNode }) => {
  const token = localStorage.getItem("token");

  const getAllJobs = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_BASE_API_URL}/job/`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      return response.data.data;
    } catch (err) {
      if (axios.isAxiosError(err) && err.response) {
        toast.error(err.response.data?.message || "Error in fetching jobs");
      } else {
        toast.error("Error in fetching jobs");
      }
    }
  };

  const getJob = async (jobId: string) => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_BASE_API_URL}/job/${jobId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      return response.data.data;
    } catch (err) {
      if (axios.isAxiosError(err) && err.response) {
        toast.error(err.response.data?.message || "Error in fetching job");
      } else {
        toast.error("Error in fetching job");
      }
    }
  };

  return (
    <JobContext.Provider value={{ getAllJobs, getJob }}>
      {children}
    </JobContext.Provider>
  );
};

export const useJob = () => {
  const ctx = useContext(JobContext);
  if (!ctx) throw new Error("useJob must be used inside JobProvider");
  return ctx;
};
