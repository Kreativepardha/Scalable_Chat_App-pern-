"use client";
import React from "react";
import LogoutButton from "./LogoutButton";
import { UserAvatar } from "../base/UserAvatar";
import Link from "next/link";
import { Button } from "../ui/button";
import { authOption, CustomSession } from "@/app/api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth";

export async function ProfileMenu() {
  const session: CustomSession | null = await getServerSession(authOption)
  const user = session?.user ?? null

  return (
    <div className="flex flex-col mt-10">
    <div className="">
          <div className="bg-slate-200 p-8 mb-4 rounded-md shadow-xl relative hover:bg-gray-200 hover:text-gray-600 cursor-pointer">
        <UserAvatar />
                            <h2 className="font-semibold text-sm">Welcome back !!!</h2>
                                <h1 className="font-bold text-xl">
                                {user?.name}
                                </h1>
                              <h2 className="font-semibold">
                                {user?.email}
                              </h2>
          </div>
    
    </div>
  </div >
    
  );
}