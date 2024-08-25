import { authOption, CustomSession } from "@/app/api/auth/[...nextauth]/options"
import { getServerSession } from "next-auth"
import Image from "next/image"



export const UserAvatar = async () => {

    const session: CustomSession | null = await getServerSession(authOption)
    const user = session?.user ?? null

    return (
        <div className="flex gap-2">

        <div className="w-6 top-2 right-2 ">
        {user?.image && (
            <Image src={user.image} alt="User profile picture" width={50} height={100} className="rounded-full shadow-lg" />
        )}
                        </div>
            <h1>{user?.name}</h1>
        </div>
    )
}