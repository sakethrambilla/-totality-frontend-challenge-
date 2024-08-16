"use client";
import { Button } from "@/components/ui/button";
import { TProperty } from "@/types";
import { Dot } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

export default function PropertyCard({ data }: { data: TProperty }) {
  const { push } = useRouter();

  return (
    <div className="flex h-96 w-[90%] flex-col items-start justify-start gap-1 rounded-lg p-2 lg:w-64">
      <Image
        src={data.images[0]}
        alt="Property Image"
        width={100}
        height={100}
        className="h-60 w-full rounded-xl object-cover"
        unoptimized
      />
      <div className="flex flex-col gap-0">
        <p className="">
          {data.title} in {data.City}
        </p>
        <p className="text-xs">
          {data.description.substring(0, 40)}
          {"..."}
        </p>
        <p className="flex items-center text-xs">
          {data.District} <Dot />
          <span className=""> {data.bedRooms} Bedrooms</span>
        </p>
      </div>
      <div className="flex w-full items-center justify-between gap-2">
        <p className="flex h-full items-center gap-2">
          <span className="font-bold">₹{data.price} </span>night
        </p>
        <Button size={"sm"} onClick={() => push(`/property/${data.titleSlug}`)}>
          Book Now
        </Button>
      </div>
    </div>
  );
}
