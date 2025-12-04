"use client";
import LoginSuccessToast from "./LoginSuccessToast";
import LogoutSuccessToast from "./LogoutSuccessToast";

const AuthToasts = () => {
  return (
    <>
      <LoginSuccessToast />
      <LogoutSuccessToast />
    </>
  );
};

export default AuthToasts;
