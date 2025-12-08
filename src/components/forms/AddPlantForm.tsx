"use client";

import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { createPlant } from "@/services/admin/plants";
import { useActionState, useEffect } from "react";
import InputFieldError from "../shared/InputFieldError";
import SelectField from "../shared/SelectField";
import OutlineBtn from "../buttons/OutlineBtn";
import LoaderCircle from "../shared/LoaderCircle";
import { showErrorToast, showSuccessToast } from "@/utils/toast";

const AddPlantForm = () => {
  const [state, formAction, isPending] = useActionState(createPlant, null);
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
    <form action={formAction} className="space-y-4 max-w-5xl mx-auto">
      <FieldGroup>
        <div className="grid grid-cols-1 gap-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {/* Name */}
            <Field>
              <FieldLabel htmlFor="name">Name</FieldLabel>
              <Input
                id="name"
                name="name"
                type="text"
                placeholder="Enter plant name"
              />
              <InputFieldError field="name" state={state} />
            </Field>

            {/* Category */}
            <Field>
              <FieldLabel htmlFor="category">Category</FieldLabel>
              <SelectField
                name="category"
                placeholder="Select category"
                options={[
                  { label: "Indoor", value: "Indoor" },
                  { label: "Outdoor", value: "Outdoor" },
                  { label: "Flowering", value: "Flowering" },
                  { label: "Succulent", value: "Succulent" },
                  { label: "Herb", value: "Herb" },
                ]}
              />
              <InputFieldError field="category" state={state} />
            </Field>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {/* Price */}
            <Field>
              <FieldLabel htmlFor="price">Price</FieldLabel>
              <Input
                id="price"
                name="price"
                type="number"
                placeholder="Enter price"
              />
              <InputFieldError field="price" state={state} />
            </Field>
            {/* Rating */}
            <Field>
              <FieldLabel htmlFor="rating">Rating</FieldLabel>
              <Input
                id="rating"
                name="rating"
                type="number"
                placeholder="0 - 5"
              />
              <InputFieldError field="rating" state={state} />
            </Field>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {/* Image */}
            <Field>
              <FieldLabel htmlFor="image">Image URL</FieldLabel>
              <Input
                id="image"
                name="image"
                type="text"
                placeholder="Enter image URL"
              />
              <InputFieldError field="image" state={state} />
            </Field>
            {/* Badge */}
            <Field>
              <FieldLabel htmlFor="badge">Badge</FieldLabel>
              <Input
                id="badge"
                name="badge"
                type="text"
                placeholder="Optional badge"
              />
              <InputFieldError field="badge" state={state} />
            </Field>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {/* Quantity */}
            <Field>
              <FieldLabel htmlFor="quantity">Quantity</FieldLabel>
              <Input
                id="quantity"
                name="quantity"
                type="number"
                placeholder="Stock quantity"
              />
              <InputFieldError field="quantity" state={state} />
            </Field>
          </div>
          {/* Description */}
          <Field>
            <FieldLabel htmlFor="description">Description</FieldLabel>
            <Textarea
              id="description"
              name="description"
              placeholder="Describe the plant..."
            />
            <InputFieldError field="description" state={state} />
          </Field>
        </div>
        <FieldGroup className="mt-4">
          <Field>
            <OutlineBtn
              disabled={isPending}
              text={isPending ? <LoaderCircle /> : "Create Plant"}
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

export default AddPlantForm;
