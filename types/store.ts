import { TBooking, TCart, TPayment, TProperty, TUser } from ".";

export type TPropertyStore = {
  property: TProperty;
  setProperty: (
    key: keyof TProperty,
    value: TProperty[keyof TProperty],
  ) => void;
  resetProperty: () => void;
};

export type TPaymentStore = {
  payment: TPayment;
  setPayment: (key: keyof TPayment, value: TPayment[keyof TPayment]) => void;
  resetPayment: () => void;
};

export type TCartStore = {
  cart: TCart[];
  addCartProperty: (property: TCart) => void;
  removeCartProperty: (propertyId: string) => void;
  resetCart: () => void;
};
