/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import OutlineBtn from "@/components/buttons/OutlineBtn";
import LoaderCircle from "@/components/shared/LoaderCircle";
import InputFieldError from "@/components/shared/InputFieldError";

import { showErrorToast, showSuccessToast } from "@/utils/toast";
import { useActionState, useEffect } from "react";
import { addCoupon } from "@/services/user/coupon";
import ManagementPageHeader from "../shared/ManagementPageHeader";

const AddCouponForm = ({ refresh }: { refresh?: () => void }) => {
  const [state, formAction, isPending] = useActionState(addCoupon, null);

  useEffect(() => {
    if (!state) return;

    if (!state.success && state.message) {
      showErrorToast("Error", state.message);
    }

    if (state.success && state.message) {
      showSuccessToast("Success", state.message);
      if (typeof refresh === "function") refresh();
    }
  }, [state]);

  return (
    <>
      <ManagementPageHeader
        title="Add New Coupon"
        description="Fill in the details below to create a new discount coupon for your store."
      />

      <form action={formAction}>
        <FieldGroup>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {/* Coupon Code */}
            <Field>
              <FieldLabel htmlFor="code">Coupon Code</FieldLabel>
              <Input
                id="code"
                name="code"
                type="text"
                placeholder="Enter coupon code"
              />
              <InputFieldError field="code" state={state} />
            </Field>

            {/* Discount Type */}
            <Field>
              <FieldLabel htmlFor="discountType">Discount Type</FieldLabel>
              <Select name="discountType" defaultValue="PERCENTAGE">
                <SelectTrigger>
                  <SelectValue placeholder="Select discount type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="PERCENTAGE">Percentage</SelectItem>
                  {/* <SelectItem value="FIXED">Fixed Amount</SelectItem> */}
                </SelectContent>
              </Select>
              <InputFieldError field="discountType" state={state} />
            </Field>

            {/* Discount Value */}
            <Field>
              <FieldLabel htmlFor="discountValue">Discount Value</FieldLabel>
              <Input
                id="discountValue"
                name="discountValue"
                type="number"
                placeholder="Enter discount value"
              />
              <InputFieldError field="discountValue" state={state} />
            </Field>

            {/* Min Order Value */}
            <Field>
              <FieldLabel htmlFor="minOrderValue">
                Minimum Order Value
              </FieldLabel>
              <Input
                id="minOrderValue"
                name="minOrderValue"
                type="number"
                placeholder="Min order value"
              />
              <InputFieldError field="minOrderValue" state={state} />
            </Field>

            {/* Max Discount */}
            <Field>
              <FieldLabel htmlFor="maxDiscount">Maximum Discount</FieldLabel>
              <Input
                id="maxDiscount"
                name="maxDiscount"
                type="number"
                placeholder="Max discount amount"
              />
              <InputFieldError field="maxDiscount" state={state} />
            </Field>

            {/* Expiry Date */}
            <Field>
              <FieldLabel htmlFor="expiryDate">Expiry Date</FieldLabel>
              <Input
                id="expiryDate"
                name="expiryDate"
                type="date"
                min={new Date().toISOString().split("T")[0]}
              />
              <InputFieldError field="expiryDate" state={state} />
            </Field>
          </div>

          {/* Submit Button */}
          <FieldGroup className="mt-4">
            <Field>
              <OutlineBtn
                disabled={isPending}
                text={isPending ? <LoaderCircle /> : "Add Coupon"}
                className="w-full bg-black/95"
                variant="default"
                type="submit"
              />
            </Field>
          </FieldGroup>
        </FieldGroup>
      </form>
    </>
  );
};

export default AddCouponForm;
