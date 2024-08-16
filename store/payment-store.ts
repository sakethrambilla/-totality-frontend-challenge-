import { TPayment, TProperty } from "@/types";
import { addDays } from "date-fns";
import { create } from "zustand";
import { persist } from "zustand/middleware";
import { initialValue } from "./property-store";
import { TPaymentStore } from "@/types/store";

const initalPayment: TPayment = {
  userId: "",
  dates: {
    from: new Date(2024, 7, 16),
    to: addDays(new Date(2024, 7, 16), 10),
  },
  property_data: initialValue,
  total_price: 0,
};
export const usePaymentStore = create<TPaymentStore>()(
  persist(
    (set) => ({
      payment: initalPayment,

      setPayment: (key, value) =>
        set((state) => ({
          payment: {
            ...state.payment,
            [key]: value,
          },
        })),

      resetPayment: () => set({ payment: initalPayment }),
    }),
    {
      name: "payment-store",
    },
  ),
);
