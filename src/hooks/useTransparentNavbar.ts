import { usePathname } from "next/navigation";

const transparentRoutes = ["/", "/shop", "/about", "/plant-care", "/contact"];

export const useTransparentNavbar = (
  scrolled: boolean
): { backgroundClass: string; isTransparentRoute: boolean } => {
  const pathname = usePathname();
  const isTransparentRoute = transparentRoutes.includes(pathname);

  const backgroundClass = isTransparentRoute
    ? scrolled
      ? "bg-dGreen backdrop-blur-md"
      : "bg-none"
    : "bg-dGreen";

  return { backgroundClass, isTransparentRoute };
};
