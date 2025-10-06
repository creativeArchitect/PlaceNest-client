export type Role = "STUDENT" | "COORDINATOR" | "COMPANY";

export interface LoginFormType {
  email: string;
  password: string;
}

export interface RegisterFormType {
  name: string;
  email: string;
  phone: string;
  password: string;
  role: Role;
  branch?: string;
  year?: string;
  cgpa?: number;
  backlogs?: number;
  activeBacklogs?: boolean;
  resumeUrl?: string;
  linkedin?: string;
  companyDescription?: string;
  website?: string;
  foundedYear?: string;
  location?: string;
  industry?: string;
}
