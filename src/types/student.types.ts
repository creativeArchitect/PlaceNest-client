export type Branch = ("CS" | "CY" | "IT" | "ME" | "ECE" | "EIC" | "EE" | "CE") | "";

export type Year = ("FIRST" | "SECOND" | "THIRD" | "FOURTH") | "";

export interface StudentProfile {
  name: string;
  email: string;
  phone: string;
  branch: Branch;
  year: Year;    
  cgpa: number;         
  activeBacklog: boolean;
  backlogs: number;
  resumeUrl: string;
  description?: string;
}
