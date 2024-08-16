"use client";
import { differenceInDays, format } from "date-fns";
import { usePaymentStore } from "@/store/payment-store";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { handleBooking } from "@/actions/handle-booking";
import { useSession } from "next-auth/react";

export default function Page() {
  const { data } = useSession();
  const payment = usePaymentStore((state) => state.payment);
  const dates = payment.dates;
  const property = payment.property_data;
  const numberOfDays = differenceInDays(dates.to as Date, dates.from as Date);
  const totalPrice = payment.total_price;

  return (
    <div className="flex min-h-screen w-full flex-col items-start justify-start gap-24 px-4 py-24 lg:flex-row lg:px-24">
      <div className="flex w-full flex-col gap-4 lg:w-1/2 lg:gap-2">
        <h2 className="border-b-[1px] border-gray-300 py-4 text-3xl font-semibold lg:text-4xl">
          Confirm and Pay
        </h2>
        <div className="flex flex-col gap-2 border-b-[1px] border-gray-300 py-4 lg:gap-6">
          <h3 className="text-2xl font-semibold lg:text-3xl">Your Trip</h3>
          <div className="grid w-full grid-cols-2 grid-rows-2">
            <p className="font-semibold">From</p>
            <p className="font-semibold">Till</p>
            <p>{format(dates.from as Date, "dd MMM yyyy")}</p>
            <p>{format(dates.to as Date, "dd MMM yyyy")}</p>
          </div>
          <div className="grid w-full grid-cols-2 grid-rows-2">
            <p className="font-semibold">CheckIn</p>
            <p className="font-semibold">CheckOut</p>
            <p>12:00 PM</p>
            <p>11:00 AM</p>
          </div>
        </div>
        <div className="flex flex-col gap-2 border-b-[1px] border-gray-300 py-8 lg:gap-6">
          <h3 className="text-2xl font-semibold lg:text-3xl">Pay with</h3>
          <div className="flex items-center justify-center gap-2">
            <Input className="w-full" placeholder="XXXX XXXX XXXX XXXX" />
            <Image
              src={"/image/payment-icons.png"}
              alt="Property Image"
              width={100}
              height={100}
              className="h-full rounded"
            />
          </div>
          <div className="flex w-full items-center justify-center gap-4 divide-x-[1px]">
            <Input placeholder="MM/YY" />
            <Input placeholder="CVV" />
          </div>
        </div>
        <div className="flex flex-col gap-2 border-b-[1px] border-gray-300 py-6 lg:gap-6">
          <h3 className="text-2xl font-semibold lg:text-3xl">
            Required for your trip
          </h3>
          <div className="flex w-full items-start justify-between">
            <div className="flex flex-col items-start justify-center">
              <p className="font-semibold">Phone Number</p>
              <p>Add and confirm your phone number to get trip updates</p>
            </div>
            <Button size={"sm"} variant={"ghost"}>
              {" "}
              Add
            </Button>
          </div>
        </div>
        <div className="flex flex-col gap-2 border-b-[1px] border-gray-300 py-4 lg:gap-6">
          <h3 className="text-2xl font-semibold lg:text-3xl">
            Cancelation Policy
          </h3>
          <p>
            This reservation is non-refundable.{" "}
            <span className="font-sembold underline">Learn more</span>
          </p>
        </div>
        <div className="flex flex-col gap-2 border-b-[1px] border-gray-300 py-4 lg:gap-6">
          <h3 className="text-3xl font-semibold">Ground Rules</h3>
          <p>
            We ask every guest to remember a few simple things about what makes
            a great guest.
          </p>
          <ul className="list-disc px-6">
            <li>Follow the house rules</li>
            <li>Treat your Host’s home like your own</li>
          </ul>
        </div>

        <Button
          className="w-fit"
          size={"lg"}
          onClick={() =>
            handleBooking(
              dates,
              property.id,
              data?.user?.email as string,
              totalPrice,
            )
          }
        >
          Confirm and Pay
        </Button>
      </div>
      <div className="flex h-fit flex-col gap-1 rounded-xl border-[1px] border-gray-300 p-4 shadow-sm">
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
          <p>{property.description}</p>
          <p>
            Property Type :{" "}
            <span className="uppercase">{property.propertyType}</span>
          </p>
          <p>Bedrooms : {property.bedRooms} </p>
          <p>Bathrooms : {property.bathRooms} </p>
          <p>Max Guests : {property.maxGuests} </p>
        </div>
        <div className="flex flex-col gap-1 border-b-[1px] border-gray-300 py-2">
          <p className="font-semibold">Address </p>
          <p className="">Flat Number : {property.flatNumber}</p>
          <p>Street : {property.streetAddress}</p>
          <p>City :{property.City}</p>
          <p>District : {property.District} </p>
          <p>State : {property.State} </p>
          <p>Pincode : {property.pinCode} </p>
        </div>
        <div className="border-b-[1px] border-gray-300 py-2">
          <p className="font-semibold">Price Details</p>
          <p>Property Price : {property.price}</p>
          <p>Number of Days : {numberOfDays}</p>
        </div>
        <div className="flex w-full justify-between py-2">
          <p>{`Total(INR) :${property.price}*${numberOfDays}  `}</p>
          <p>₹ {totalPrice}.00</p>
        </div>
      </div>
    </div>
  );
}
