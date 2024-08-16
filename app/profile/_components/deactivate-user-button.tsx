"use client";
import { useRouter } from "next/navigation";
import React from "react";

export default function DeactivateUserButton() {
  const { replace } = useRouter();
  function handleDeactivateAccount() {
    // Operations to delete all existing listings, bookings and user data

    replace("/");
  }
  return (
    <p
      className="cursor-pointer text-destructive dark:text-red-400"
      onClick={handleDeactivateAccount}
    >
      Deactivate your account
    </p>
  );
}
