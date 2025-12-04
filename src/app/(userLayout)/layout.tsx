import Footer from "@/components/modules/Footer/Footer";
import Navbar from "@/components/modules/Navbar/Navbar";
import BannerClient from "@/components/modules/home/banner/BannerClient";
import { getCookie } from "@/services/auth/tokenHandlers";

const UserLayout = async ({ children }: { children: React.ReactNode }) => {
  const accessToken = await getCookie("accessToken");

  return (
    <>
      <Navbar accessToken={accessToken} />
      <BannerClient />
      <div
        className={`max-w-7xl mx-auto min-h-screen space-y-16 lg:space-y-20 px-6 mt-20 `}
      >
        {children}
      </div>
      <Footer />
    </>
  );
};

export default UserLayout;
