import { LOGIN_URL } from "@/lib/apiAuthRoutes";
import axios, { AxiosError } from "axios";
import { Account, AuthOptions, ISODateString, User } from "next-auth";
import { JWT } from "next-auth/jwt";
import GoogleProvider from "next-auth/providers/google";
import { redirect } from "next/navigation";

export interface CustomSession {
    user?: CustomUser;
    expires: ISODateString; 
}

export interface CustomUser {
    id?: string | null;
    name?: string | null;
    email?: string | null;
    image?: string | null;
    provider?: string | null;
    token?: string | null;
}



export const authOption: AuthOptions = {
    pages:{
        signIn:'/',
    },
    callbacks: {
        async signIn({
            user, account
        }: {
            user: CustomUser;
            account: Account
        }){
            try {
                const payload = {
                    email: user.email!,
                    name: user.name!,
                    oauth_id: account?.providerAccountId!,
                    image: user?.image,
                    provider: account?.provider
                };
                const { data } = await axios.post(LOGIN_URL, payload)
                user.id = data?.user?.id?.toString();
                user.token = data?.user?.token
                return true
            } catch (err) {
                if (err instanceof AxiosError) {
                    return redirect(`/auth/error?message=${err.message}`);
                  }
                  return redirect(
                    `/auth/error?message=Something went wrong.please try again!`
                  );
            }
        }
    },
        async jwt({ token, user }) {
            if(user){
                token.user = user;
            }
            return token
        }, 
        async session ({
            session,token,user,
        }: { session: CustomSession, token: JWT, user: User }) {
            session.user = token.user as CustomUser;
            return session;
        },
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
        })
    ]
}