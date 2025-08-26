"use client";

import { usePathname } from "next/navigation";
import Footer from "@/components/modules/Footer/Footer";
import Navbar from "@/components/modules/Navbar/Navbar";
import Banner from "@/components/modules/home/banner/Banner";

const UserLayout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  return (
    <>
      <Navbar />
      {pathname === "/" && <Banner />}
      <div className="max-w-[1600px] mx-auto min-h-screen px-6">{children}</div>
      <Footer />
    </>
  );
};

export default UserLayout;
