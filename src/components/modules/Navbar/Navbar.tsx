"use client";
import Logo from "./Logo";
import NavLinks from "./NavLinks";
import MobileMenu from "./MobileMenu";
import { useNavbar } from "@/hooks/useNavbar";
import NavActions from "./NavActions";
import { useTransparentNavbar } from "@/hooks/useTransparentNavbar";

const Navbar = ({ accessToken }: { accessToken: string | null }) => {
  const { scrolled, menuOpen, toggleMenu, closeMenu } = useNavbar();
  const { backgroundClass } = useTransparentNavbar(scrolled);
  return (
    <div
      className={`fixed top-0 left-0 right-0 z-50
        ${backgroundClass}`}
    >
      <div className="max-w-7xl mx-auto px-6 xl:pl-0 flex justify-between items-center text-white transition-colors duration-300 ">
        {/* Logo component */}
        <Logo />
        {/* Desktop navigation links*/}
        <div className="hidden lg:flex">
          <NavLinks />
        </div>

        {/* Right-side icons (login/cart/menu) */}
        <NavActions
          menuOpen={menuOpen}
          toggleMenu={toggleMenu}
          accessToken={accessToken}
        />

        {/* Mobile menu component */}
        <MobileMenu isOpen={menuOpen} closeMenu={closeMenu} />
      </div>
    </div>
  );
};

export default Navbar;
