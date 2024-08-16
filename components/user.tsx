"use client";
import { authOptions } from "@/lib/auth-options";
import { getServerSession } from "next-auth";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Menu } from "lucide-react";
import Image from "next/image";
import { signOut, useSession } from "next-auth/react";
import { redirect, useRouter } from "next/navigation";

import { useEffect } from "react";

export default function User() {
  const { data, status } = useSession();

  const { push } = useRouter();
  function handleLogout() {
    signOut({ callbackUrl: "/" });
  }

  if (status !== "authenticated") {
    return (
      <Link
        href={"/sign-in"}
        className="transition duration-300 hover:underline hover:underline-offset-4"
      >
        SignIn
      </Link>
    );
  } else {
    return (
      <DropdownMenu>
        <DropdownMenuTrigger className="">
          <div className="flex items-center gap-2 rounded-full border px-4 py-2 ring-background dark:border-primary">
            <Menu />
            <Image
              src={data.user?.image as string}
              alt="User profile"
              width={30}
              height={30}
              className="rounded-full"
            />
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="dark:border-primary">
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator className="dark:bg-primary" />

          <DropdownMenuItem
            className="cursor-pointer"
            onClick={() => push("/profile")}
          >
            My Profile
          </DropdownMenuItem>
          <DropdownMenuItem
            className="cursor-pointer"
            onClick={() => push("/profile/booking")}
          >
            My Bookings
          </DropdownMenuItem>
          <DropdownMenuItem
            className="cursor-pointer"
            onClick={() => push("/profile/listings")}
          >
            My Listings
          </DropdownMenuItem>
          <DropdownMenuItem
            className="cursor-pointer"
            onClick={() => signOut({ callbackUrl: "/" })}
          >
            LogOut
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    );
  }
}
