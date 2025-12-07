export const dynamic = "force-dynamic";
import DashboardNavbar from "@/components/modules/dashboard/navbar/DashboardNavbar";
import DashboardSidebar from "@/components/modules/dashboard/sidebar/DashboardSidebar";

const CommonDashboardLayout = async ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <div className="flex h-screen overflow-hidden">
      <DashboardSidebar />
      <div className="flex flex-1 flex-col overflow-hidden">
        <DashboardNavbar />
        <main className="flex-1 overflow-y-auto bg-muted/10 p-5">
          {children}
        </main>
      </div>
    </div>
  );
};

export default CommonDashboardLayout;
