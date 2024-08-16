import { DateTime } from "next-auth/providers/kakao";
import { DateRange } from "react-day-picker";

export type TUser = {
  id: string;
  name: string | null | undefined;
  email: string;
  image: string;
  emailVerified: DateTime | null | undefined;
  phoneNumber: number | null | undefined;
  emergencyNumber: number | null | undefined;
  governmentId: string | null | undefined;
};

export type TProperty = {
  id: string;
  userId: string;
  title: string;
  titleSlug: string;
  description: string;
  price: number;
  propertyType: "house" | "flat" | "farm-house";
  longitude: number;
  latitude: number;
  flatNumber?: string;
  streetAddress: string;
  District: string;
  City: string;
  State: string;
  pinCode: number;
  maxGuests: number;
  bedRooms: number;
  bathRooms: number;
  wifi: boolean;
  tv: boolean;
  washingMachine: boolean;
  parking: boolean;
  airConditioning: boolean;
  images: string[];
};

export type TSearchParams = {
  district?: string;
  bedRoom?: string;
  bathRoom?: string;
  min?: string;
  max?: string;
  wifi?: boolean;
  tv?: boolean;
  washingMachine?: boolean;
  parking?: boolean;
  airConditioning?: boolean;
};

export type TPayment = {
  userId: string;
  dates: DateRange;
  property_data: TProperty;
  total_price: number;
};

export type TBooking = {
  id: string;
  startDate: Date;
  endDate: Date;
  transactionId: string;
  userId: string;
  amount: number;
  propertyId: string;
  createdAt: Date;
  inCart: boolean;
};

export type TCart = {
  id: string;
  startDate: Date;
  endDate: Date;
  price: number;
  totalPrice: number;
  title: string;
  propertyType: string;
  description: string;
  images: string[];
  bathRooms: number;
  bedRooms: number;
  City: string;
  maxGuests: number;
};
