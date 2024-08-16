"use client";
import { differenceInDays, format } from "date-fns";
import { usePaymentStore } from "@/store/payment-store";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { handleBooking } from "@/actions/handle-booking";
import { useSession } from "next-auth/react";
import { useCartStore } from "@/store/cart-store";
import PropertyCard from "./_components/property-card";
import { useToast } from "@/components/ui/use-toast";
import { useRouter } from "next/navigation";

export default function Page() {
  const { replace } = useRouter();
  const { toast } = useToast();
  const cart = useCartStore((state) => state.cart);
  const resetCart = useCartStore((state) => state.resetCart);
  let totalCartPrice = 0;
  cart.forEach((i) => (totalCartPrice += i.totalPrice));

  function handleConfirm() {
    toast({
      title: "Booking Succesfull ✅",
    });
    resetCart();
    replace("/explore");
  }
  return (
    <div className="flex min-h-screen w-full flex-col items-start justify-start gap-24 p-24">
      <div className="flex flex-wrap gap-8">
        {cart.map((property, index) => (
          <PropertyCard property={property} key={index} />
        ))}
      </div>
      <div className="flex w-fit flex-col gap-2">
        <h2 className="border-b-[1px] border-gray-300 py-4 text-4xl font-semibold">
          Confirm and Pay
        </h2>
        <div className="flex flex-col gap-6 border-b-[1px] border-gray-300 py-4">
          <div className="flex w-full items-end justify-between gap-12">
            <h3 className="text-3xl font-semibold">Your Trip</h3>
            <p className="text-2xl">Price: {totalCartPrice}</p>
          </div>

          <div className="grid w-full grid-cols-2 grid-rows-2">
            <p className="font-semibold">CheckIn</p>
            <p className="font-semibold">CheckOut</p>
            <p>12:00 PM</p>
            <p>11:00 AM</p>
          </div>
        </div>
        <div className="flex flex-col gap-6 border-b-[1px] border-gray-300 py-8">
          <h3 className="text-3xl font-semibold">Pay with</h3>
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
        <div className="flex flex-col gap-6 border-b-[1px] border-gray-300 py-6">
          <h3 className="text-3xl font-semibold">Required for your trip</h3>
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
        <div className="flex flex-col gap-6 border-b-[1px] border-gray-300 py-4">
          <h3 className="text-3xl font-semibold">Cancelation Policy</h3>
          <p>
            This reservation is non-refundable.{" "}
            <span className="font-sembold underline">Learn more</span>
          </p>
        </div>
        <div className="flex flex-col gap-6 border-b-[1px] border-gray-300 py-4">
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

        <Button className="w-fit" size={"lg"} onClick={handleConfirm}>
          Confirm and Pay
        </Button>
      </div>
    </div>
  );
}
