"use client";
import { useCartStore } from "@/store/cart-store";
import { TCart } from "@/types";
import { format } from "date-fns";
import { Trash2 } from "lucide-react";
import Image from "next/image";
import React from "react";

export default function CartPropertyCard({
  key,
  item,
}: {
  key: number;
  item: TCart;
}) {
  const removeCartProperty = useCartStore((state) => state.removeCartProperty);

  return (
    <div
      key={key}
      className="flex w-full flex-col items-start justify-center gap-4 rounded-2xl px-4 py-4 shadow-lg lg:flex-row lg:items-center lg:justify-between lg:gap-0 lg:px-8"
    >
      <div className="flex flex-col items-start justify-center gap-4 lg:flex-row lg:items-center lg:gap-12">
        <div className="flex flex-row gap-4">
          <Image
            src={item.images[0]}
            alt="Property image"
            width={100}
            height={100}
            className="rounded-xl object-cover"
          />
          <div className="flex flex-col items-start justify-start gap-1">
            <h3 className="text-lg text-secondary dark:text-primary">
              {item.title} in {item.City}
            </h3>
            <p className="text-sm">{item.description.substring(0, 60)}...</p>
          </div>
        </div>
        <div className="flex flex-col items-center justify-start gap-1">
          <p>{item.bedRooms} BedRooms</p>
          <p>{item.bathRooms} BathRooms</p>
        </div>
        <div className="flex flex-col items-start justify-start gap-1">
          <p>
            {" "}
            <span className="font-semibold">Start Date</span> :{" "}
            {format(item.startDate, "dd MMM yyyy")}{" "}
          </p>
          <p>
            <span className="font-semibold">End Date</span> :{" "}
            {format(item.endDate, "dd MMM yyyy")}
          </p>
        </div>
        <div className="flex flex-col items-start justify-start gap-1">
          <p>Max Guests: {item.maxGuests}</p>
          <p>Property Price : ₹ {item.price} </p>
        </div>
      </div>
      <div className="flex w-full items-center justify-between gap-8 lg:w-fit lg:justify-start">
        <p className="text-xl font-semibold text-secondary dark:text-primary lg:text-2xl">
          Total Price : ₹ {item.totalPrice}{" "}
        </p>

        <Trash2
          className="cursor-pointer text-destructive"
          onClick={() => {
            removeCartProperty(item.id);
          }}
        />
      </div>
    </div>
  );
}
