
export type JobType = "Internship" | "PartTime" | "FullTime" | "Contract"

export type Role = "STUDENT" | "COORDINATOR" | "COMPANY"

export type JobStatus = "ACTIVE" | "CLOSED" | "DRAFT"

export interface Job {
    id?: string
    type: JobType
    title: string
    description: string
    location: string
    role: Role
    package: string
    cgpaCutOff: Float32Array
    deadline: Date
    status: JobStatus
    companyId: string
}













