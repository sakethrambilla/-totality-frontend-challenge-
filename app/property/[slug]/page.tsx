"use server";

import prisma from "@/lib/db";
import Image from "next/image";
import ReserveProperty from "../_components/reserve-property";
import { TProperty } from "@/types";
import { AirVent, SquareParking, Tv, WashingMachine, Wifi } from "lucide-react";
import { AvailabilityCheck } from "@/actions/availability-check";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth-options";
import { redirect } from "next/navigation";

export default async function page({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const session = await getServerSession(authOptions);
  const data = await prisma.property.findFirst({
    where: { titleSlug: slug },
  });
  const unavailableDates = await AvailabilityCheck(data?.id as string);

  return (
    <div className="min-w-screen flex h-full min-h-screen flex-col items-start justify-start gap-8 px-4 py-24 lg:p-24">
      <h1 className="w-full text-left text-2xl text-primary transition duration-300 hover:text-secondary lg:text-4xl">
        {data?.title}
      </h1>

      <div className="grid h-full w-full grid-cols-1 items-start justify-start gap-8 overflow-hidden rounded-2xl lg:grid-cols-2 lg:grid-rows-1 lg:gap-1">
        <Image
          src={data?.images[0] as string}
          alt="Cover Image"
          width={100}
          height={100}
          className="w-full rounded-xl object-cover lg:h-[600px] lg:rounded-none"
          unoptimized
        />
        <div className="grid h-full w-full grid-cols-1 flex-wrap gap-8 lg:grid-cols-2 lg:grid-rows-2 lg:gap-2">
          <Image
            src={data?.images[1] as string}
            alt="Cover Image"
            width={100}
            height={100}
            className="h-full w-full rounded-xl object-cover lg:rounded-none"
            unoptimized
          />
          <Image
            src={data?.images[1] as string}
            alt="Cover Image"
            width={100}
            height={100}
            className="h-full w-full rounded-xl object-cover lg:rounded-none"
            unoptimized
          />
          <Image
            src={data?.images[1] as string}
            alt="Cover Image"
            width={100}
            height={100}
            className="h-full w-full rounded-xl object-cover lg:rounded-none"
            unoptimized
          />
          <Image
            src={data?.images[1] as string}
            alt="Cover Image"
            width={100}
            height={100}
            className="h-full w-full object-cover"
            unoptimized
          />
        </div>
      </div>
      <div className="flex w-full flex-col items-center justify-start gap-12 lg:flex-row lg:items-start lg:justify-between lg:gap-4">
        <div className="flex flex-col items-start justify-start gap-4">
          <p className="text-lg">{data?.description}</p>
          <div className="flex items-start justify-center gap-4 divide-x-2 text-sm">
            <div className="">{data?.maxGuests} Guest</div>
            <div className="px-2">{data?.bedRooms} Bedrooms</div>
            <div className="px-2">{data?.bathRooms} Bathrooms</div>
          </div>

          {/* Amenities */}
          <div className="flex flex-col gap-2">
            <h3>What this place offers</h3>
            <div className="grid grid-cols-2 gap-4">
              {data?.wifi && (
                <p className="flex items-center gap-2">
                  <Wifi /> Wifi
                </p>
              )}
              {data?.tv && (
                <p className="flex items-center gap-2">
                  <Tv /> TV
                </p>
              )}
              {data?.washingMachine && (
                <p className="flex items-center gap-2">
                  <WashingMachine /> Washing Machine
                </p>
              )}
              {data?.airConditioning && (
                <p className="flex items-center gap-2">
                  <AirVent /> Air Conditioning
                </p>
              )}
              {data?.parking && (
                <p className="flex items-center gap-2">
                  <SquareParking /> Parking
                </p>
              )}
            </div>
          </div>
        </div>
        <ReserveProperty
          propertyData={data as TProperty}
          dates={unavailableDates}
        />
      </div>
    </div>
  );
}
