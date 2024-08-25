import { env } from "process";



export const BASE_URL = process.env.NEXT_PUBLIC_BACKEND_URL;
export const LOGIN_URL= process.env.NEXT_PUBLIC_BACKEND_URL + '/auth/login';