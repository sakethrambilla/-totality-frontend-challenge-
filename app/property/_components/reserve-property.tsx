"use client";
import { DatePickerWithRange } from "@/components/date-picker";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { useCartStore } from "@/store/cart-store";
import { usePaymentStore } from "@/store/payment-store";
import { TCart, TProperty } from "@/types";
import { addDays, differenceInDays } from "date-fns";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { DateRange } from "react-day-picker";

export default function ReserveProperty({
  propertyData,
  dates,
}: {
  propertyData: TProperty;
  dates: Date[];
}) {
  const { toast } = useToast();
  const { replace } = useRouter();
  const { status, data } = useSession();
  const cart = useCartStore((state) => state.cart);

  const setPayment = usePaymentStore((state) => state.setPayment);
  const addCartProperty = useCartStore((state) => state.addCartProperty);
  const [date, setDate] = React.useState<DateRange>({
    from: new Date(2024, 7, 16),
    to: addDays(new Date(2024, 7, 16), 10),
  });
  const days = differenceInDays(date.to as Date, date.from as Date);

  function containsProperty(obj: TCart, cart: TCart[]) {
    var i;
    for (i = 0; i < cart.length; i++) {
      if (obj.id == cart[i].id) {
        return true;
      }
    }
    return false;
  }

  useEffect(() => {
    setPayment("dates", date);
    setPayment("total_price", propertyData.price * days);
  }, [date, propertyData, days, setPayment]);

  function handleBookNow() {
    if (status == "unauthenticated") {
      toast({
        title: "❌ Error: Not Signned In",
        description: "Please Sign In to book the property. 😊",
      });
    } else {
      setPayment("property_data", propertyData);
      replace("/payment");
    }
  }

  function handleAddToCart() {
    const cartProperty: TCart = {
      id: propertyData.id,
      startDate: date.from as Date,
      endDate: date.to as Date,
      price: propertyData.price,
      totalPrice: propertyData.price * days,
      title: propertyData.title,
      description: propertyData.description,
      propertyType: propertyData.propertyType,
      images: propertyData.images,
      bedRooms: propertyData.bedRooms,
      bathRooms: propertyData.bathRooms,
      City: propertyData.City,
      maxGuests: propertyData.maxGuests,
    };

    if (status == "unauthenticated") {
      toast({
        title: "❌ Error: Not Signned In",
        description: "Please Sign In to add to Cart the property. 😊",
      });
    } else {
      setPayment("property_data", propertyData);
      if (containsProperty(cartProperty, cart)) {
        toast({
          title: "❌ Property already in the cart.",
          description: "Property Already exits in your cart. 😊",
        });
      } else {
        toast({
          title: "✔️ Property added to cart.",
        });
        addCartProperty(cartProperty);
      }
      // handleCart(date, propertyData.id, data?.user?.email as string);
      // addProperty()

      // replace("/cart");
    }
  }
  return (
    <div className="flex flex-col items-start justify-start gap-4 rounded-2xl p-6 shadow-lg">
      <p className="text-xs">*Note: Please SignIn before booking</p>
      <p className="flex gap-2 font-bold">
        ${propertyData?.price} <span className="font-normal">night</span>{" "}
      </p>
      <DatePickerWithRange
        date={date}
        setDate={setDate}
        unavailableDates={dates}
      />
      <Button
        className="w-full"
        variant={"secondary"}
        onClick={() => handleAddToCart()}
      >
        Add to Cart
      </Button>
      <Button className="w-full" onClick={() => handleBookNow()}>
        Book Now
      </Button>
      <p className="w-full text-center">{"You won't be charged yet"}</p>
      <div className="flex w-full items-center justify-between">
        <p>{`${propertyData.price} x ${days} nights`}</p>
        <p>$ {propertyData.price * days}</p>
      </div>
    </div>
  );
}
