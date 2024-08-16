import { getCartItems } from "@/actions/cart";
import { TBooking, TCart, TUser } from "@/types";
import { TCartStore } from "@/types/store";
import { addDays } from "date-fns";
import { create } from "zustand";
import { persist } from "zustand/middleware";

const initalCartProperty: TCart = {
  id: "",
  startDate: new Date(),
  endDate: addDays(new Date(), 10),
  title: "",
  description: "",
  propertyType: "house",
  price: 0,
  totalPrice: 0,
  images: [],
  bedRooms: 0,
  bathRooms: 0,
  City: "",
  maxGuests: 0,
};

const initalCart = [initalCartProperty];

export const useCartStore = create<TCartStore>()(
  persist(
    (set) => ({
      cart: [],

      addCartProperty: (property) =>
        set((state) => ({
          cart: [...state.cart, property],
        })),

      removeCartProperty: (propertyId) => {
        set((state) => ({
          cart: state.cart.filter((property) => property.id != propertyId),
        }));
      },
      resetCart: () => {
        set((state) => ({
          cart: [],
        }));
      },
    }),
    {
      name: "cart-store",
    },
  ),
);
