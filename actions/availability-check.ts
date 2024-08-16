"use server";
import prisma from "@/lib/db";
import dayjs, { eachDayOfInterval } from "date-fns";

export async function AvailabilityCheck(str: string) {
  const data = await prisma.booking.findMany({ where: { propertyId: str } });
  var allDates: any = [];
  data.map((booking, index) => {
    const bookingDates = eachDayOfInterval({
      start: booking.startDate,
      end: booking.endDate,
    });
    allDates.push(...bookingDates);
  });

  // const allDates = await eachDayOfInterval({
  //   start: data?.startDate as Date,
  //   end: data?.endDate as Date,
  // });

  return allDates;
}
