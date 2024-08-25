import LoginModal from "@/components/auth/LoginModal";
import { getServerSession } from "next-auth";
import Image from "next/image";
import { authOption, CustomSession } from "./api/auth/[...nextauth]/options";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import LogoutModal from "@/components/auth/LogoutModal";
import LogoutButton from "@/components/auth/LogoutButton";

export default async function Home() {

  const session: CustomSession | null = await getServerSession(authOption)
  const user = session?.user ?? null


  return (
   <div className="bg-slate-200 flex justify-center items-center h-screen">
    {
      !user ? (
        <div className="flex flex-col gap-2 ">
          Login to proceed
          <LoginModal />
            </div>
      ) : (
        <div className="flex flex-col bg">
          <div className="">
                <div className="bg-slate-200 p-8 mb-4 rounded-md shadow-xl relative hover:bg-gray-200 hover:text-gray-600 cursor-pointer">
                  <div className="w-6 top-2 left-2 absolute">
                  {user.image && (
                                 <Image src={user.image} alt="User profile picture" width={50} height={100} className="rounded-full shadow-lg" />
                                          )}
                                  </div>
                                  <h2 className="font-semibold text-sm">Welcome back !!!</h2>
                                      <h1 className="font-bold text-xl">
                                      {user.name}
                                      </h1>
                                    <h2 className="font-semibold">
                                      {user.email}
                                    </h2>
                </div>
            <div className="text-center flex justify-around ">
                  <Link href='/dashboard'>
                    <Button className="hover:bg-white hover:text-black">
                      Dashboard
                    </Button>
                  </Link>      
                  <LogoutButton />
              </div>
          </div>
        </div >
      )}

   </div>
  );
}
