"use client";

import { showSuccessToast } from "@/utils/toast";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";

const LoginSuccessToast = () => {
  const searchParams = useSearchParams();
  const router = useRouter();

  useEffect(() => {
    if (searchParams.get("loggedIn") === "true") {
      showSuccessToast(
        "You have been logged in successfully.",
        "Welcome back! We're happy to have you."
      );

      const newUrl = new URL(window.location.href);
      newUrl.searchParams.delete("loggedIn");
      router.replace(newUrl.toString());
    }
  }, [searchParams, router]);
  return null;
};

export default LoginSuccessToast;
