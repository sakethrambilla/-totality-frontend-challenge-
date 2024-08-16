import { authOptions } from "@/lib/auth-options";
import prisma from "@/lib/db";
import { Trash2 } from "lucide-react";
import { getServerSession } from "next-auth";
import Image from "next/image";
import Link from "next/link";
import ListCard from "./_components/list-card";
import { TProperty } from "@/types";

export default async function page() {
  const data = await getServerSession(authOptions);
  const user = await prisma.user.findUnique({
    where: { email: data?.user?.email as string },
  });

  const listings = (await prisma.property.findMany({
    where: { userId: user?.id },
  })) as TProperty[];

  return (
    <div className="flex min-h-screen flex-col items-start justify-start px-10 py-24">
      <div className="flex w-full items-center justify-end">
        <Link
          href={"/profile/listings/add-place"}
          className="rounded-lg bg-primary px-4 py-2 text-primary-foreground transition duration-300 hover:bg-secondary hover:text-secondary-foreground"
        >
          Add New Place
        </Link>
      </div>

      <div className="flex w-full flex-col gap-4">
        {listings.length ? (
          listings.map((listing, index) => (
            <ListCard data={listing} key={index} />
          ))
        ) : (
          <div className="w-full text-center text-4xl font-semibold text-secondary dark:text-primary">
            No property
          </div>
        )}
      </div>
    </div>
  );
}
