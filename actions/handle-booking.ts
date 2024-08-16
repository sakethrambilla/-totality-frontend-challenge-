"use server";
import prisma from "@/lib/db";
import { TBooking, TUser } from "@/types";
import { redirect } from "next/navigation";
import { NextResponse } from "next/server";
import { DateRange } from "react-day-picker";
import { v4 as uuidv4 } from "uuid";

export async function handleBooking(
  dates: DateRange,
  propertyId: string,
  email: string,
  total_price: number,
) {
  "use server";
  const user = (await prisma.user.findFirst({
    where: {
      email: email,
    },
  })) as TUser;
  const payload = {
    startDate: dates.from as Date,
    endDate: dates.to as Date,
    transactionId: uuidv4(),
    userId: user.id,
    amount: total_price,
    propertyId: propertyId,
  } as TBooking;

  try {
    const response = await prisma.booking.create({ data: payload });
    redirect("/profile/booking");
  } catch (error: any) {
    redirect("/profile/booking");
  }
}
