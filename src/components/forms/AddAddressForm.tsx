"use client";

import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { useActionState, useEffect } from "react";
import InputFieldError from "@/components/shared/InputFieldError";
import OutlineBtn from "@/components/buttons/OutlineBtn";
import LoaderCircle from "@/components/shared/LoaderCircle";
import { showErrorToast, showSuccessToast } from "@/utils/toast";
import { createAddress } from "@/services/auth/addressActions";

const AddAddressForm = () => {
  const [state, formAction, isPending] = useActionState(createAddress, null);

  useEffect(() => {
    if (!state) return;

    if (state.success === false && state.message) {
      showErrorToast("Error", state.message);
    }

    if (state.success === true && state.message) {
      showSuccessToast("Success", state.message);
    }
  }, [state]);

  return (
    <>
      <h2 className="text-lg font-semibold">Address</h2>
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
                placeholder="Enter street address"
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
                text={isPending ? <LoaderCircle /> : "Add Address"}
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

export default AddAddressForm;
