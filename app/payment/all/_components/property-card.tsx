import { TCart } from "@/types";
import { differenceInDays } from "date-fns";
import Image from "next/image";
import React from "react";

export default function PropertyCard({
  property,
  key,
}: {
  property: TCart;
  key: number;
}) {
  console.log(property);
  return (
    <div
      className="flex h-fit w-[30vw] flex-col gap-1 rounded-xl border-[1px] border-gray-300 p-4 shadow-sm"
      key={key}
    >
      <div className="flex items-center justify-start gap-2 border-b-[1px] border-gray-300 py-4">
        <Image
          src={property.images[0]}
          alt="Property Image"
          width={100}
          height={100}
          className="rounded"
        />
        <div className="flex flex-col items-start justify-start gap-1">
          <h3 className="font-semibold text-secondary dark:text-primary">
            {property.title} in {property.City}
          </h3>
          <p className="uppercase">{property.propertyType}</p>
        </div>
      </div>

      <div className="flex flex-col gap-1 border-b-[1px] border-gray-300 py-2">
        <p className="font-semibold">Property Details</p>
        <p className="text-lg text-secondary dark:text-primary">
          {property.title}
        </p>
        <p className="text-sm">{property.description}</p>
        <p>
          Property Type :{" "}
          <span className="uppercase">{property.propertyType}</span>
        </p>
        <p>Bedrooms : {property.bedRooms} </p>
        <p>Bathrooms : {property.bathRooms} </p>
        <p>Max Guests : {property.maxGuests} </p>
      </div>

      <div className="border-b-[1px] border-gray-300 py-2">
        <p className="font-semibold">Price Details</p>
        <p>Property Price : {property.price}</p>
        <p>
          Number of Days :{" "}
          {differenceInDays(property.endDate, property.startDate)}
        </p>
      </div>
      <div className="flex w-full justify-between py-2">
        {`Total(INR) : ${property.totalPrice}.00`}
      </div>
    </div>
  );
}
