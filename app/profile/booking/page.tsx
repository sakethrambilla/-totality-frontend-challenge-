import { authOptions } from "@/lib/auth-options";
import prisma from "@/lib/db";
import { formatDate } from "date-fns";
import { getServerSession } from "next-auth";
import React from "react";
import BookingCard from "./_components/booking-card";

export default async function page() {
  const data = await getServerSession(authOptions);
  const user = await prisma.user.findUnique({
    where: { email: data?.user?.email as string },
  });
  const myBookings = await prisma.booking.findMany({
    where: { userId: user?.id },
    orderBy: {
      startDate: "asc",
    },
    include: {
      property: {
        select: {
          title: true,
          City: true,
          bedRooms: true,
          maxGuests: true,
        },
      },
    },
  });

  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-start gap-8 px-4 py-24 lg:px-24">
      <p className="text-4xl font-bold text-secondary dark:text-primary">
        My Bookings
      </p>
      <div className="flex w-full flex-col gap-4">
        {myBookings.map((booking, index) => {
          return <BookingCard booking={booking} key={index} />;
        })}
      </div>
    </div>
  );
}
