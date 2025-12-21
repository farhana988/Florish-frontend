/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import { serverFetch } from "@/lib/server-fetch";
import { zodValidator } from "@/lib/zodValidator";
import { createCouponZodSchema } from "@/validation/coupon.validation";

interface ICoupon {
  code: string;
  discountType: "PERCENTAGE" | "FIXED";
  discountValue: number;
  minOrderValue?: number;
  maxDiscount?: number;
  expiryDate: string;
  isActive: boolean;
}

export async function addCoupon(_prevState: any, formData: FormData) {
  try {
    const payload: ICoupon = {
      code: formData.get("code") as string,
      discountType: formData.get("discountType") as "PERCENTAGE" | "FIXED",
      discountValue: Number(formData.get("discountValue")),
      minOrderValue: formData.get("minOrderValue")
        ? Number(formData.get("minOrderValue"))
        : undefined,
      maxDiscount: formData.get("maxDiscount")
        ? Number(formData.get("maxDiscount"))
        : undefined,

      expiryDate: new Date(formData.get("expiryDate") as string).toISOString(),
      isActive: true,
    };
    const validationResult = zodValidator(payload, createCouponZodSchema);
    if (!validationResult.success) return validationResult;

    const validatedData = validationResult.data;

    const response = await serverFetch.post("/coupon/create-coupon", {
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(validatedData),
    });

    const result = await response.json();
    console.log("result", result);
    return result;
  } catch (error: any) {
    console.error(error);
    return {
      success: false,
      message:
        process.env.NODE_ENV === "development"
          ? error.message
          : "Failed to create coupon",
      data: null,
    };
  }
}

export async function getAllCoupons() {
  try {
    const response = await serverFetch.get("/coupon/all-coupons");

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
      data: [],
    };
  }
}
