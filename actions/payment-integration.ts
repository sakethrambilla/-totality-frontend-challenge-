"use server";
import { Cashfree } from "cashfree-pg";

Cashfree.XClientId = process.env.CASHFREE_ID;
Cashfree.XClientSecret = process.env.CASHFREE_SECRET;
Cashfree.XEnvironment = Cashfree.Environment.PRODUCTION;

export async function createOrder() {
  var request = {
    order_amount: 1,
    order_currency: "INR",
    order_id: "order_34692745",
    customer_details: {
      customer_id: "walterwNrcMi",
      customer_phone: "9999999999",
    },
    order_meta: {
      return_url:
        "https://www.cashfree.com/devstudio/preview/pg/web/checkout?order_id={order_id}",
    },
  };

  try {
    const response = await Cashfree.PGCreateOrder("2024-08-01", request);
    console.log(response.data);
  } catch (error: any) {
    console.log(error.response.data);
  }
}
