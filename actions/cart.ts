"use server";
import prisma from "@/lib/db";
import { TBooking, TUser } from "@/types";
import { redirect } from "next/navigation";
import { DateRange } from "react-day-picker";
import { v4 as uuidv4 } from "uuid";

export async function getCartItems(userId: string) {
  const data = await prisma.booking.findMany({
    where: { userId: userId, inCart: true },
    include: {
      property: {
        select: {
          title: true,
          description: true,
          images: true,
          bedRooms: true,
          bathRooms: true,
          price: true,
        },
      },
    },
  });

  return data;
}

export async function removeCartItem(itemId: string, id: string) {
  const response = await prisma.booking.deleteMany({
    where: { userId: id, propertyId: itemId },
  });
}

export async function handleCart(
  dates: DateRange,
  propertyId: string,
  email: string,
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
    inCart: true,
    propertyId: propertyId,
  } as TBooking;

  try {
    const response = await prisma.booking.create({ data: payload });

    redirect("/profile/cart");
  } catch (error: any) {
    console.log(error);
    redirect("/profile/cart");
  }
}
