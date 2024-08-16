"use client";
import { removeCartItem } from "@/actions/cart";
import { Button } from "@/components/ui/button";
import prisma from "@/lib/db";
import { useCartStore } from "@/store/cart-store";
import { TBooking } from "@/types";
import { format } from "date-fns";
import { Trash, Trash2 } from "lucide-react";
import { getServerSession } from "next-auth";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import CartPropertyCard from "./_components/cart-property-card";

export default function Page() {
  const cart = useCartStore((state) => state.cart);
  const { replace } = useRouter();
  let totalCartPrice = 0;
  cart.forEach((i) => (totalCartPrice += i.totalPrice));
  return (
    <div className="flex flex-col items-start justify-start gap-6 p-24">
      <h3 className="text-3xl font-semibold">Rental Cart</h3>

      {cart.map((item, index) => (
        <CartPropertyCard item={item} key={index} />
      ))}

      <div className="flex w-full flex-col items-end justify-center gap-4 text-2xl">
        <div className="items-cetner flex gap-4">
          <span className="font-semibold">{`Sub-total (${cart.length} Properties)  : `}</span>
          {totalCartPrice}.00
        </div>

        <Button className="w-40" onClick={() => replace("/payment/all")}>
          CheckOut
        </Button>
      </div>
    </div>
  );
}
