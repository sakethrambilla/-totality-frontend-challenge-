import Link from "next/link";

export default async function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-12 bg-primary dark:bg-background">
      <div className="flex flex-col items-center justify-center gap-6">
        <h1 className="flex w-2/3 flex-col items-center justify-center gap-4 text-center text-xl dark:text-primary lg:w-full lg:flex-row lg:gap-0 lg:text-5xl">
          {"Discover Your Perfect Stay with     "}
          <span className="mx-2 bg-background pt-1 text-primary dark:bg-foreground dark:text-background">
            {" UrbanStay "}
          </span>
        </h1>

        <p className="w-4/5 text-center text-sm text-background dark:text-foreground lg:w-2/3 lg:text-xl">
          {
            "Discover unique properties, from cozy apartments to stylish homes, and book your next getaway effortlessly with UrbanStay."
          }
        </p>
      </div>

      <Link
        href={"/explore"}
        className="rounded bg-background px-8 py-2 transition duration-300 hover:bg-foreground hover:text-background dark:bg-primary dark:text-background dark:hover:bg-secondary dark:hover:text-foreground lg:px-12"
      >
        Book your stay
      </Link>
    </div>
  );
}
