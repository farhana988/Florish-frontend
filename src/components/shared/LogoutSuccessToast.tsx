"use client";

import { showSuccessToast } from "@/utils/toast";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";

const LogoutSuccessToast = () => {
  const searchParams = useSearchParams();
  const router = useRouter();

  useEffect(() => {
    if (searchParams.get("loggedOut") === "true") {
      showSuccessToast(
        "You have been logged out successfully.",
        "Thank you for using our service. See you next time!"
      );

      const newUrl = new URL(window.location.href);
      newUrl.searchParams.delete("loggedOut");
      router.replace(newUrl.toString());
    }
  }, [searchParams, router]);
  return null;
};

export default LogoutSuccessToast;
