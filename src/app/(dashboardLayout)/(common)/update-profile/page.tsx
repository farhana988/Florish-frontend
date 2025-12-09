"use client";
import OutlineBtn from "@/components/buttons/OutlineBtn";
import InputFieldError from "@/components/shared/InputFieldError";
import LoaderCircle from "@/components/shared/LoaderCircle";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { updateUserInfo } from "@/services/auth/userActions";
import { showErrorToast, showSuccessToast } from "@/utils/toast";
import { useState, useEffect } from "react";
import { useActionState } from "react";

interface UpdateUserFormProps {
  userId: string;
}

const UpdateUserForm = ({ userId }: UpdateUserFormProps) => {
  const [state, formAction, isPending] = useActionState(updateUserInfo, null);
  const [previewImage, setPreviewImage] = useState<string | null>(null);

  useEffect(() => {
    if (state) {
      if (!state.success && state.message) {
        showErrorToast("Error", state.message);
      } else if (state.success) {
        showSuccessToast("Success", state.message || "User info updated!");
      }
    }
  }, [state]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setPreviewImage(URL.createObjectURL(file));
    }
  };

  return (
    <form
      action={(formData: FormData) => {
        // include userId in the FormData for the server action
        formData.append("id", userId);
        return formAction(formData); // only pass FormData
      }}
    >
      <FieldGroup>
        {/* Name */}
        <Field>
          <FieldLabel htmlFor="name">Name</FieldLabel>
          <Input id="name" name="name" type="text" placeholder="Your Name" />
          <InputFieldError field="name" state={state} />
        </Field>

        {/* Profile Photo */}
        <Field>
          <FieldLabel htmlFor="file">Profile Photo</FieldLabel>
          <Input
            id="file"
            name="file"
            type="file"
            accept="image/*"
            onChange={handleFileChange}
          />
          {previewImage && (
            <img
              src={previewImage}
              alt="Preview"
              className="mt-2 w-24 h-24 object-cover rounded-full"
            />
          )}
          <InputFieldError field="file" state={state} />
        </Field>

        {/* Submit */}
        <FieldGroup className="mt-4">
          <Field>
            <OutlineBtn
              disabled={isPending}
              text={isPending ? <LoaderCircle /> : "Update Info"}
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

export default UpdateUserForm;
