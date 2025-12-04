import { NavSection } from "@/types/dashboard.interface";
import { getDefaultDashboardRoute, UserRole } from "./auth-utils";

export const getCommonNavItems = (role: UserRole): NavSection[] => {
  const defaultDashboard = getDefaultDashboardRoute(role);

  return [
    {
      items: [
        {
          title: "Dashboard",
          href: defaultDashboard,
          icon: "LayoutDashboard",
          roles: ["USER", "SUPER_ADMIN", "ADMIN"],
        },
        {
          title: "My Profile",
          href: `/my-profile`,
          icon: "User",
          roles: ["USER", "SUPER_ADMIN", "ADMIN"],
        },
      ],
    },
    {
      title: "Settings",
      items: [
        {
          title: "Change Password",
          href: "/change-password",
          icon: "Settings",
          roles: ["USER", "SUPER_ADMIN", "ADMIN"],
        },
      ],
    },
  ];
};

export const superAdminNavItems: NavSection[] = [
  {
    title: "Admin Management",
    items: [
      {
        title: "Admins",
        href: "/super-admin/dashboard/admins",
        icon: "ShieldCheck",
        roles: ["SUPER_ADMIN"],
      },
      {
        title: "Add New Admin",
        href: "/super-admin/dashboard/add-admin",
        icon: "UserPlus",
        roles: ["SUPER_ADMIN"],
      },
    ],
  },
];

export const userNavItems: NavSection[] = [
  {
    title: "My Orders",
    items: [
      {
        title: "Order History",
        href: "/dashboard/orders",
        icon: "ShoppingBag",
        roles: ["USER"],
      },
      {
        title: "Wishlist",
        href: "/dashboard/wishlist",
        icon: "Heart",
        roles: ["USER"],
      },
    ],
  },
  {
    title: "Plant Care",
    items: [
      {
        title: "My Care Guides",
        href: "/dashboard/care-guides",
        icon: "Leaf",
        roles: ["USER"],
      },
    ],
  },
];

export const adminNavItems: NavSection[] = [
  {
    title: "Product Management",
    items: [
      {
        title: "All Products",
        href: "/admin/dashboard/products",
        icon: "TreePine",
        roles: ["ADMIN"],
      },
      {
        title: "Add Product",
        href: "/admin/dashboard/add-product",
        icon: "PlusSquare",
        roles: ["ADMIN"],
      },
      {
        title: "Categories",
        href: "/admin/dashboard/categories",
        icon: "Tags",
        roles: ["ADMIN"],
      },
    ],
  },
  {
    title: "Order Management",
    items: [
      {
        title: "Orders",
        href: "/admin/dashboard/orders",
        icon: "Package",
        roles: ["ADMIN"],
      },
      {
        title: "Shipping",
        href: "/admin/dashboard/shipping",
        icon: "Truck",
        roles: ["ADMIN"],
      },
    ],
  },
];

export const getNavItemsByRole = (role: UserRole): NavSection[] => {
  const commonNavItems = getCommonNavItems(role);

  switch (role) {
    case "ADMIN":
      return [...commonNavItems, ...adminNavItems];
    case "SUPER_ADMIN":
      return [...commonNavItems, ...adminNavItems, ...superAdminNavItems];
    case "USER":
      return [...commonNavItems, ...userNavItems];
    default:
      return [];
  }
};
