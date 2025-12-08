"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useActionState, useEffect, useState } from "react";
import { toast } from "sonner";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { getPlantById, updatePlant } from "@/services/admin/plants";
import PageLoading from "../shared/PageLoading";
import InputFieldError from "../shared/InputFieldError";
import SelectField from "../shared/SelectField";
import OutlineBtn from "../buttons/OutlineBtn";
import LoaderCircle from "../shared/LoaderCircle";

const categoryOptions = [
  { label: "Indoor", value: "Indoor" },
  { label: "Outdoor", value: "Outdoor" },
  { label: "Flowering", value: "Flowering" },
  { label: "Succulent", value: "Succulent" },
  { label: "Herb", value: "Herb" },
];

const UpdatePlantForm = ({ id }: { id: string }) => {
  const [plant, setPlant] = useState<any>(null);
  const [state, formAction, isPending] = useActionState(
    (prev: any, formData: FormData) => updatePlant(id, prev, formData),
    null
  );

  // Fetch plant on mount
  useEffect(() => {
    async function fetchPlant() {
      const res = await getPlantById(id);
      if (res.success) setPlant(res.data);
      else toast.error(res.message || "Failed to fetch plant");
    }
    fetchPlant();
  }, [id]);

  // Show toast messages
  useEffect(() => {
    if (!state) return;

    if (state.success === false && state.message) toast.error(state.message);
    if (state.success === true && state.message) toast.success(state.message);
  }, [state]);

  if (!plant) return <PageLoading />;
  return (
    <form action={formAction} className="space-y-4 max-w-5xl mx-auto">
      <FieldGroup>
        <div className="grid grid-cols-1 gap-4">
          {/* Name */}
          <Field>
            <FieldLabel htmlFor="name">Name</FieldLabel>
            <Input
              id="name"
              name="name"
              type="text"
              defaultValue={plant.name}
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
              options={categoryOptions}
              defaultValue={plant.category}
            />
            <InputFieldError field="category" state={state} />
          </Field>

          {/* Price */}
          <Field>
            <FieldLabel htmlFor="price">Price</FieldLabel>
            <Input
              id="price"
              name="price"
              type="number"
              defaultValue={plant.price}
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
              defaultValue={plant.rating}
              placeholder="0 - 5"
            />
            <InputFieldError field="rating" state={state} />
          </Field>

          {/* Image */}
          <Field>
            <FieldLabel htmlFor="image">Image URL</FieldLabel>
            <Input
              id="image"
              name="image"
              type="text"
              defaultValue={plant.image}
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
              defaultValue={plant.badge}
              placeholder="Optional badge"
            />
            <InputFieldError field="badge" state={state} />
          </Field>

          {/* Quantity */}
          <Field>
            <FieldLabel htmlFor="quantity">Quantity</FieldLabel>
            <Input
              id="quantity"
              name="quantity"
              type="number"
              defaultValue={plant.quantity}
              placeholder="Stock quantity"
            />
            <InputFieldError field="quantity" state={state} />
          </Field>

          {/* Description */}
          <Field>
            <FieldLabel htmlFor="description">Description</FieldLabel>
            <Textarea
              id="description"
              name="description"
              defaultValue={plant.description}
              placeholder="Describe the plant..."
            />
            <InputFieldError field="description" state={state} />
          </Field>
        </div>

        <FieldGroup className="mt-4">
          <Field>
            <OutlineBtn
              disabled={isPending}
              text={isPending ? <LoaderCircle /> : "Update Plant"}
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

export default UpdatePlantForm;
