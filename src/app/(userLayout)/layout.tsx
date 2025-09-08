"use client";

import { usePathname } from "next/navigation";
import Footer from "@/components/modules/Footer/Footer";
import Navbar from "@/components/modules/Navbar/Navbar";
import Banner from "@/components/modules/home/banner/Banner";
import bannerConfig from "@/components/modules/home/banner/bannerConfig";

const UserLayout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const bannerData = bannerConfig[pathname];
  return (
    <>
      <Navbar />
      {bannerData && <Banner {...bannerData} />}
      <div
        className={`max-w-7xl mx-auto min-h-screen space-y-16 lg:space-y-20
         ${isHome ? "px-0" : "px-6 mt-20"} `}
      >
        {children}
      </div>
      <Footer />
    </>
  );
};

export default UserLayout;
