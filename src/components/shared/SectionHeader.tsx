"use client";
import useIsHome from "@/hooks/useIsHome";
import { usePathname } from "next/navigation";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  className?: string;
}

const SectionHeader = ({ title, subtitle, className }: SectionHeaderProps) => {
  const isHome = useIsHome();
  const pathname = usePathname();

  // List of dashboard routes
  const dashboardRoutes = [
    "/dashboard",
    "/admin/dashboard",
    "/super-admin/dashboard",
  ];

  const isDashboard = dashboardRoutes.some((route) =>
    pathname.startsWith(route)
  );

  // Determine margin classes
  let marginClass = "";
  if (isDashboard) {
    marginClass = "mb-12";
  } else {
    marginClass = isHome ? "my-16" : "mt-20 xl:mt-32";
  }

  return (
    <div className={`text-center ${marginClass} ${className}`}>
      <h2 className="text-3xl lg:text-[42px] sm:text-3xl font-medium">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-2 xl:text-lg text-gray-500 max-w-9/12 mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;
