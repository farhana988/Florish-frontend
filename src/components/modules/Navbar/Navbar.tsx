import { Handbag, LucideUser, Menu, X } from "lucide-react";
import Link from "next/link";
import Logo from "./Logo";
import NavLinks from "./NavLinks";
import MobileMenu from "./MobileMenu";
import { useNavbar } from "@/hooks/useNavbar";

const Navbar = () => {
  const { scrolled, menuOpen, toggleMenu, closeMenu } = useNavbar();

  return (
    <div
      className={`fixed top-0 left-0 right-0 z-50 max-w-[1600px] mx-auto px-6 
        flex justify-between items-center text-white transition-colors duration-300 
        ${scrolled ? "bg-black/90 backdrop-blur-md" : "bg-none"}`}
    >
      {/* Logo component */}
      <Logo />
      {/* Desktop navigation links*/}
      <div className="hidden lg:flex">
        <NavLinks />
      </div>

      <div className="flex items-center gap-4 md:gap-6">
        {/* login */}
        <Link href="/">
          <LucideUser />
        </Link>
        {/* Cart link */}
        <Link href="/cart">
          <Handbag />
        </Link>

        {/* Mobile menu toggle button */}
        <button
          className=":hidden"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X /> : <Menu />}
        </button>
      </div>
      {/* Mobile menu component */}
      <MobileMenu isOpen={menuOpen} closeMenu={closeMenu} />
    </div>
  );
};

export default Navbar;
