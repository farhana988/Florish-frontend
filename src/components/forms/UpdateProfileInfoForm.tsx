/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { updateUserInfo } from "@/services/auth/userActions";
import { useState } from "react";
import { Field, FieldGroup, FieldLabel } from "../ui/field";
import { Input } from "../ui/input";
import OutlineBtn from "../buttons/OutlineBtn";
import LoaderCircle from "../shared/LoaderCircle";
import { showErrorToast, showSuccessToast } from "@/utils/toast";

interface Props {
  userId: string;
  currentName: string;
  onUpdated?: (data: any) => void;
}

const UpdateProfileInfoForm = ({ userId, currentName, onUpdated }: Props) => {
  const [name, setName] = useState(currentName);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    if (!name) return;

    try {
      setLoading(true);

      const result = await updateUserInfo(userId, { name });

      if (result.success) {
        showSuccessToast("Profile updated successfully!");
        onUpdated?.(result.data);
      } else {
        showErrorToast("Error updating profile", result.message);
      }
    } catch (error: any) {
      showErrorToast(
        "Unexpected Error",
        error?.message || "Something went wrong"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <FieldGroup>
        <Field>
          <FieldLabel htmlFor="image">Name</FieldLabel>
          <Input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter new name"
            required
          />
        </Field>
        <OutlineBtn
          onClick={handleSubmit}
          disabled={loading || !name}
          text={loading ? <LoaderCircle /> : "Update Name"}
          className="w-full bg-black/95"
          variant="default"
          type="submit"
        />
      </FieldGroup>
    </div>
  );
};

export default UpdateProfileInfoForm;
