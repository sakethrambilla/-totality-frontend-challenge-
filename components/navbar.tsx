import dynamic from "next/dynamic";
import Link from "next/link";
import User from "./user";
import LogoButton from "./logo-button";
import Cart from "./cart";

const ThemeSwitch = dynamic(() => import("./theme-switch"), { ssr: false });

export default function Navbar() {
  return (
    <div className="t absolute top-0 z-10 flex w-full flex-row items-center justify-between px-4 py-4 dark:text-foreground lg:px-8">
      <div className="flex items-center justify-center gap-2 lg:gap-4">
        <LogoButton />

        <Link
          href={"/explore"}
          className="text-sm underline-offset-4 transition-all duration-500 hover:underline lg:text-lg"
        >
          Explore
        </Link>
      </div>
      <div className="flex items-center gap-2 lg:gap-6">
        <User />
        <Cart />
        <ThemeSwitch />
      </div>
    </div>
  );
}
