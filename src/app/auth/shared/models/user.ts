export interface User {
    id: string;
    name: string;
    email: string;
    phone: string;
    password: string;
    role: string;
}

export interface IUser {
    email: string;
    password: string;
}