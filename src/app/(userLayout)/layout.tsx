import Footer from "@/components/modules/Footer/Footer";
import Navbar from "@/components/modules/Navbar/Navbar";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      <div className="max-w-[1600px] mx-auto min-h-screen px-6">{children}</div>
      <Footer />
    </>
  );
};

export default DashboardLayout;
