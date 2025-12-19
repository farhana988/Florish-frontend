/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { updateUserInfo } from "@/services/auth/userActions";
import { useState } from "react";

import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";
import OutlineBtn from "../buttons/OutlineBtn";
import LoaderCircle from "../shared/LoaderCircle";
import { Input } from "../ui/input";
import { showErrorToast, showSuccessToast } from "@/utils/toast";

interface Props {
  userId: string;
  onUpdated?: (data: any) => void;
}
const ProfilePicModal = ({ userId, onUpdated }: Props) => {
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    if (!file) return;

    try {
      setLoading(true);

      const formData = new FormData();
      formData.append("file", file);

      const result = await updateUserInfo(userId, formData);

      if (result.success) {
        showSuccessToast("Profile photo updated successfully!");
        onUpdated?.(result.data);
      } else {
        showErrorToast("Failed to update photo", result.message);
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
    <DialogContent className="max-w-sm">
      <DialogHeader>
        <DialogTitle>Edit Profile Photo</DialogTitle>
        <DialogDescription>Upload a new profile picture.</DialogDescription>
      </DialogHeader>

      {/* You can place upload input here */}
      <div className="space-y-3">
        <Input
          type="file"
          onChange={(e) => setFile(e.target.files?.[0] || null)}
        />
        <OutlineBtn
          onClick={handleSubmit}
          disabled={loading || !file}
          text={loading ? <LoaderCircle /> : "Update Photo"}
          className="bg-black"
          variant="default"
          type="submit"
        />
      </div>
    </DialogContent>
  );
};

export default ProfilePicModal;
