"use client";
import React from "react";
import LogoutButton from "./LogoutButton";
import { UserAvatar } from "../base/UserAvatar";

export default function DashNav() {
  return (
    <nav className="py-2 px-6  flex justify-between items-center bg-slate-200 shadow-sm">

      <h1 className="text-xl  md:text-2xl font-extrabold">QuickChat</h1>
      <div className="">
      <div className="flex items-center space-x-2 md:space-x-6 text-gray-700">
        <LogoutButton />
        </div>
      </div>
    </nav>
  );
}