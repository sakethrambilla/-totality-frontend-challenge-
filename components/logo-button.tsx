"use client";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function LogoButton() {
  const { theme } = useTheme();
  return (
    <Link href={"/"}>
      <Image
        src={`/image/${theme === "light" ? "dark-logo" : "logo"}.svg`}
        alt="urban-stay logo"
        width={50}
        height={50}
        className=""
      />
    </Link>
  );
}
