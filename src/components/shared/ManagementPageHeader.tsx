import Link from "next/link";
import { ManagementPageHeaderProps } from "@/types/management-table";
import { Button } from "../ui/button";
import { Plus } from "lucide-react";

const ManagementPageHeader = ({
  title,
  description,
  action,
  children,
}: ManagementPageHeaderProps) => {
  return (
    <div className="flex gap-6 flex-col md:flex-row md:items-center justify-between mb-8">
      <div>
        <h1 className="text-xl xl:text-3xl font-bold">{title}</h1>
        {description && (
          <p className="text-xs xl:text-base text-muted-foreground mt-1">
            {description}
          </p>
        )}
      </div>

      {action && action.href && (
        <Link href={action.href}>
          <Button size={"sm"}>
            <Plus />
            {action.label}
          </Button>
        </Link>
      )}

      {children}
    </div>
  );
};

export default ManagementPageHeader;
