import Link from "next/link";

export default async function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-12 bg-primary dark:bg-background">
      <div className="flex flex-col items-center justify-center gap-6">
        <h1 className="flex text-5xl dark:text-primary">
          {"Discover Your Perfect Stay with     "}
          <span className="mx-2 bg-background pt-1 text-primary dark:bg-foreground dark:text-background">
            {" UrbanStay "}
          </span>
        </h1>

        <p className="w-2/3 text-center text-xl text-background dark:text-foreground">
          {
            "Discover unique properties, from cozy apartments to stylish homes, and book your next getaway effortlessly with UrbanStay."
          }
        </p>
      </div>

      <Link
        href={"/explore"}
        className="rounded bg-background px-12 py-2 transition duration-300 hover:bg-foreground hover:text-background dark:bg-primary dark:text-background dark:hover:bg-secondary dark:hover:text-foreground"
      >
        Book your stay
      </Link>
    </div>
  );
}
