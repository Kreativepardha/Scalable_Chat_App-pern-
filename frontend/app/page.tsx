import LoginModal from "@/components/auth/LoginModal";
import { getServerSession } from "next-auth";
import Image from "next/image";
import { authOption, CustomSession } from "./api/auth/[...nextauth]/options";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import LogoutModal from "@/components/auth/LogoutModal";
import LogoutButton from "@/components/auth/LogoutButton";
import { UserAvatar } from "@/components/base/UserAvatar";
import { ProfileMenu } from "@/components/auth/ProfileMenu";

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
      ) : (<div className="flex flex-col">
        <ProfileMenu />
        <div className="text-center flex justify-around ">
            <Link href='/dashboard'>
              <Button className="hover:bg-white hover:text-black">
                Dashboard
              </Button>
            </Link>      
            <LogoutButton />
        </div>
      </div>
      )}

   </div>
  );
}
