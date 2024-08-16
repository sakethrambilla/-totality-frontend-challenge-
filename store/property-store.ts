import { TProperty } from "@/types";
import { TPropertyStore } from "@/types/store";
import { create } from "zustand";
import { persist } from "zustand/middleware";

export const initialValue: TProperty = {
  id: "",
  userId: "",
  title: "",
  titleSlug: "",
  description: "",
  price: 0,
  propertyType: "house",
  longitude: 0,
  latitude: 0,
  flatNumber: "",
  streetAddress: "",
  District: "",
  City: "",
  State: "",
  pinCode: 0,
  maxGuests: 0,
  bedRooms: 0,
  bathRooms: 0,
  wifi: false,
  tv: false,
  washingMachine: false,
  parking: false,
  airConditioning: false,
  images: [],
};
export const usePropertyStore = create<TPropertyStore>()(
  persist(
    (set) => ({
      property: initialValue,

      setProperty: (key, value) =>
        set((state) => ({
          property: {
            ...state.property,
            [key]: value,
          },
        })),

      resetProperty: () => set({ property: initialValue }),
    }),
    {
      name: "property-store",
    },
  ),
);
