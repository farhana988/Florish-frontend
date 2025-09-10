import { usePathname } from "next/navigation";

const transparentRoutes = ["/", "/shop", "/about", "/contact"];

export const useTransparentNavbar = (
  scrolled: boolean
): { backgroundClass: string; isTransparentRoute: boolean } => {
  const pathname = usePathname();
  const isTransparentRoute = transparentRoutes.includes(pathname);

  const backgroundClass = isTransparentRoute
    ? scrolled
      ? "bg-black/90 backdrop-blur-md"
      : "bg-none"
    : "bg-black";

  return { backgroundClass, isTransparentRoute };
};
