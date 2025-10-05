
export type JobType = "Internship" | "PartTime" | "FullTime" | "Contract"

export type Role = "STUDENT" | "COORDINATOR" | "COMPANY"

export type JobStatus = "ACTIVE" | "CLOSED" | "DRAFT"

export type Application = {
    id?: string;
    jobTitle: string;
    candidateName: string;
    email: string;
    date: string;
    status: string;
}

export interface Job {
    id?: string
    type: JobType
    title: string
    description: string
    location: string
    role: Role
    package: string
    cgpaCutOff: Float32Array
    deadline: string
    status: JobStatus
    companyId: string
    applications?: string[]
}













