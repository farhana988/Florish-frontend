/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import { serverFetch } from "@/lib/server-fetch";

//   CREATE ORDER

export async function createOrder(formData: FormData) {
  try {
    const payload = {
      addressId: formData.get("addressId"),
      paymentType: formData.get("paymentType"), // "COD" | "STRIPE"
    };

    const response = await serverFetch.post("/order/create-order", {
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    const result = await response.json();
    return result;
  } catch (error: any) {
    console.error(error);
    return {
      success: false,
      message:
        process.env.NODE_ENV === "development"
          ? error.message
          : "Something went wrong",
    };
  }
}

//   GET USER ORDERS

export async function getUserOrders() {
  try {
    const response = await serverFetch.get("/order");

    const result = await response.json();
    return result;
  } catch (error: any) {
    console.error(error);
    return {
      success: false,
      message:
        process.env.NODE_ENV === "development"
          ? error.message
          : "Something went wrong",
    };
  }
}

//   GET ORDER DETAILS

export async function getOrderDetails(orderId: string) {
  try {
    const response = await serverFetch.get(`/order/${orderId}`);

    const result = await response.json();
    return result;
  } catch (error: any) {
    console.error(error);
    return {
      success: false,
      message:
        process.env.NODE_ENV === "development"
          ? error.message
          : "Something went wrong",
    };
  }
}

//   CONFIRM PAYMENT

export async function confirmPayment(orderId: string) {
  try {
    const response = await serverFetch.post(
      `/order/order-confirm?orderId=${orderId}`
    );

    const result = await response.json();
    return result;
  } catch (error: any) {
    console.error(error);
    return {
      success: false,
      message:
        process.env.NODE_ENV === "development"
          ? error.message
          : "Something went wrong",
    };
  }
}

//   UPDATE ORDER STATUS

export async function updateOrderStatus(orderId: string, status: string) {
  try {
    const payload = { status };

    const response = await serverFetch.patch(
      `/order/update-order-status/${orderId}`,
      {
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      }
    );

    const result = await response.json();
    return result;
  } catch (error: any) {
    console.error(error);
    return {
      success: false,
      message:
        process.env.NODE_ENV === "development"
          ? error.message
          : "Something went wrong",
    };
  }
}

//   CANCEL ORDER

export async function cancelOrder(orderId: string) {
  try {
    const response = await serverFetch.patch(`/order/cancel-order/${orderId}`, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    const result = await response.json();
    return result;
  } catch (error: any) {
    console.error(error);
    return {
      success: false,
      message:
        process.env.NODE_ENV === "development"
          ? error.message
          : "Something went wrong",
    };
  }
}
