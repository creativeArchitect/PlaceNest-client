

export type Role = "STUDENT" | "COORDINATOR" | "COMPANY"

export interface LoginFormType {
    email: string
    password: string
}

export interface RegisterFormType {
    name: string
    email: string
    phone: string
    password: string
    role: Role
}




