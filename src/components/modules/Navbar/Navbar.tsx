import Logo from "./Logo";
import NavLinks from "./NavLinks";
import MobileMenu from "./MobileMenu";
import { useNavbar } from "@/hooks/useNavbar";
import NavActions from "./NavActions";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const { scrolled, menuOpen, toggleMenu, closeMenu } = useNavbar();
  const pathname = usePathname();
  const transparentRoutes = ["/", "/shop", "/about", "/contact"];
  const isTransparentRoute = transparentRoutes.includes(pathname);
  const backgroundClass = isTransparentRoute
    ? scrolled
      ? "bg-black/90 backdrop-blur-md"
      : "bg-none"
    : "bg-black";

  return (
    <div
      className={`fixed top-0 left-0 right-0 z-50 max-w-[1600px] mx-auto px-6 
        flex justify-between items-center text-white transition-colors duration-300 
        ${backgroundClass}`}
    >
      {/* Logo component */}
      <Logo />
      {/* Desktop navigation links*/}
      <div className="hidden lg:flex">
        <NavLinks />
      </div>

      {/* Right-side icons (login/cart/menu) */}
      <NavActions menuOpen={menuOpen} toggleMenu={toggleMenu} />

      {/* Mobile menu component */}
      <MobileMenu isOpen={menuOpen} closeMenu={closeMenu} />
    </div>
  );
};

export default Navbar;
