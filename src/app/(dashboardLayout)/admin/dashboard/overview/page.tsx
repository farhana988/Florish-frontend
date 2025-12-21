import ManagementPageHeader from "@/components/shared/ManagementPageHeader";
import RevenueBarChart from "@/components/shared/RevenueBarChart";
import { getOverviewData } from "@/services/admin/overview";
import StatCard from "@/components/cards/StatCard";
import { getStats } from "@/lib/getStats";

const OverviewPage = async () => {
  const { users, plants, orders, coupons, totalRevenue, chartData } =
    await getOverviewData();
  const stats = getStats({
    usersCount: users?.data?.length ?? 0,
    plantsCount: plants?.data?.length ?? 0,
    ordersCount: orders?.data?.length ?? 0,
    couponsCount: coupons?.data?.length ?? 0,
    totalRevenue,
  });
  return (
    <div className="space-y-8">
      <ManagementPageHeader
        title="Dashboard Overview"
        description="Monitor key metrics and platform performance at a glance"
      />

      {/* Overview Cards */}
      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
        {stats.map((stat) => (
          <StatCard key={stat.title} {...stat} />
        ))}
      </div>

      {/* Charts Section */}
      <ManagementPageHeader
        title="Monthly Revenue Overview"
        description="Track revenue trends and sales performance over the past months"
      />

      <RevenueBarChart data={chartData} />
    </div>
  );
};

export default OverviewPage;
