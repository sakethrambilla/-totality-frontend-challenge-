import dynamic from "next/dynamic";
import Link from "next/link";
import User from "./user";
import LogoButton from "./logo-button";
import Cart from "./cart";

const ThemeSwitch = dynamic(() => import("./theme-switch"), { ssr: false });

export default function Navbar() {
  return (
    <div className="t absolute top-0 flex w-full flex-row items-center justify-between px-8 py-4 dark:text-foreground">
      <div className="flex items-center justify-center gap-4">
        <LogoButton />

        <Link
          href={"/explore"}
          className="underline-offset-4 transition-all duration-500 hover:underline"
        >
          Explore Properties
        </Link>
      </div>
      <div className="flex items-center gap-6">
        <User />
        <Cart />
        <ThemeSwitch />
      </div>
    </div>
  );
}
