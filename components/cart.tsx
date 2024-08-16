"use client";

import { useCartStore } from "@/store/cart-store";
import { ShoppingBag } from "lucide-react";
import { useRouter } from "next/navigation";

export default function Cart() {
  const cart = useCartStore((state) => state.cart);
  const { replace } = useRouter();
  return (
    <div className="flex cursor-pointer gap-1" onClick={() => replace("/cart")}>
      <ShoppingBag /> {cart.length}
    </div>
  );
}
