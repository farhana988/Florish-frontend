"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */

import { useActionState, useEffect } from "react";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import InputFieldError from "@/components/shared/InputFieldError";
import OutlineBtn from "@/components/buttons/OutlineBtn";
import LoaderCircle from "@/components/shared/LoaderCircle";
import { showErrorToast, showSuccessToast } from "@/utils/toast";
import { updateAddress } from "@/services/auth/addressActions";
import { useAddresses } from "@/hooks/useAddress";

const UpdateAddressForm = () => {
  const { addresses, refresh } = useAddresses();
  const firstAddress = addresses?.[0];
  const id = firstAddress?.id;

  // Action handler
  const [state, formAction, isPending] = useActionState(
    (prev: any, formData: FormData) => updateAddress(id, prev, formData),
    null
  );

  // Handle toast messages
  useEffect(() => {
    if (!state) return;

    if (state.success === false && state.message)
      showErrorToast("Error", state.message);

    if (state.success === true && state.message)
      showSuccessToast("Success", state.message);
    refresh();
  }, [refresh, state]);

  return (
    <form action={formAction} className="space-y-4 border p-5 rounded-lg">
      <FieldGroup>
        <div className="grid grid-cols-1 gap-4">
          {/* Street */}
          <Field>
            <FieldLabel htmlFor="street">Street</FieldLabel>
            <Input
              id="street"
              name="street"
              type="text"
              defaultValue={firstAddress?.street}
              placeholder="Enter street"
            />
            <InputFieldError field="street" state={state} />
          </Field>

          {/* City */}
          <Field>
            <FieldLabel htmlFor="city">City</FieldLabel>
            <Input
              id="city"
              name="city"
              type="text"
              defaultValue={firstAddress?.city}
              placeholder="Enter city"
            />
            <InputFieldError field="city" state={state} />
          </Field>

          {/* Country */}
          <Field>
            <FieldLabel htmlFor="country">Country</FieldLabel>
            <Input
              id="country"
              name="country"
              type="text"
              defaultValue={firstAddress?.country}
              placeholder="Enter country"
            />
            <InputFieldError field="country" state={state} />
          </Field>
        </div>

        {/* Submit Button */}
        <FieldGroup className="mt-4">
          <Field>
            <OutlineBtn
              disabled={isPending}
              text={isPending ? <LoaderCircle /> : "Update Address"}
              className="w-full bg-black/95"
              variant="default"
              type="submit"
            />
          </Field>
        </FieldGroup>
      </FieldGroup>
    </form>
  );
};

export default UpdateAddressForm;
