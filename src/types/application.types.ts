import type { JobType } from "./job.types";

type ApplicationStatus = "PENDING" | "REJECTED" | "SHORTLISTED" | "SELECTED";

export interface Application {
  id?: string;
  status: ApplicationStatus;
  remarks?: string;

  jobId: string;
  job: {
    id: string;
    title: string;
    type: JobType;
    position: string;
    deadline: string;
    salary: string;
    location: string;
    description?: string;
    company: {
        id: string;
        name: string;
        industry: string;
        website: string;
    };
  };

  studentId: string;
  student?: {
    id: string;
    name: string;
    email: string;
  }

  createdAt: string; // ISO date string
  updatedAt: string; // ISO date string
}
