"use client";
import React from "react";
import { Button } from "./ui/button";
import { FcGoogle } from "react-icons/fc";
import { signIn } from "next-auth/react";

export default function SignInWithGoogle() {
  return (
    <Button
      onClick={() =>
        signIn("google", { callbackUrl: `${window.location.origin}/explore` })
      }
      className="flex w-full gap-4 hover:bg-foreground hover:text-background"
    >
      Login with Google <FcGoogle size={20} />
    </Button>
  );
}
