"use client";

import { logoutUser } from "@/services/auth/logoutUser";

const LogoutButton = () => {
  const handleLogout = async () => {
    await logoutUser();
  };
  return (
    <button onClick={handleLogout} className="w-full h-full text-center">
      Logout
    </button>
  );
};

export default LogoutButton;
