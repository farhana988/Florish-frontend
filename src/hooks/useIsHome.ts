"use client";
import { usePathname } from "next/navigation";

const useIsHome = () => {
  const pathname = usePathname();

  return pathname === "/";
};

export default useIsHome;
