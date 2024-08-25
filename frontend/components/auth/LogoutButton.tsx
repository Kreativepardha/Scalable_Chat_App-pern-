"use client"; // Ensure this is a client component

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import LogoutModal from "@/components/auth/LogoutModal";

export default function LogoutButton() {
  const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setIsLogoutModalOpen(true)}>Logout</Button>
      <LogoutModal open={isLogoutModalOpen} setOpen={setIsLogoutModalOpen} />
    </>
  );
}
