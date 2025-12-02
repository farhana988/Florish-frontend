import Footer from "@/components/modules/Footer/Footer";
import Navbar from "@/components/modules/Navbar/Navbar";
import BannerClient from "@/components/modules/home/banner/BannerClient";

const UserLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
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
