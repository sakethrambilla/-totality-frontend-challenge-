import { formatDate } from "date-fns";
import React from "react";

export default function BookingCard({
  booking,
  key,
}: {
  booking: any;
  key: number;
}) {
  return (
    <div
      key={booking.id}
      className="flex w-full flex-col items-start justify-between gap-8 rounded-xl px-4 py-8 shadow-lg lg:flex-row lg:items-center"
    >
      <div className="flex flex-col items-start gap-4 lg:flex-row lg:items-center">
        <h3 className="text-lg font-semibold text-secondary dark:text-primary">
          {booking.property.title} in {booking.property.City}
        </h3>

        <div className="flex gap-1">
          <span className="font-semibold">From : </span>
          {formatDate(booking.startDate, "dd MMM yyyy")}
        </div>
        <div className="flex gap-1">
          <span className="font-semibold">Till : </span>
          {formatDate(booking.endDate, "dd MMM yyyy")}
        </div>

        <div className="flex gap-1">
          <span className="font-semibold">Bedrooms : </span>
          {booking.property.bedRooms}
        </div>
        <div className="flex gap-1">
          <span className="font-semibold">MaxGuests : </span>
          {booking.property.maxGuests}
        </div>
      </div>
      <div className="text-lg font-semibold">
        Total Price: ₹{booking.amount}.00
      </div>
    </div>
  );
}
