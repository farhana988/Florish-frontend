import Link from "next/link";
import { ShoppingBasket, Menu, X, CircleUserRound } from "lucide-react";

interface NavActionsProps {
  menuOpen: boolean;
  toggleMenu: () => void;
}

const NavActions = ({ menuOpen, toggleMenu }: NavActionsProps) => {
  return (
    <div className="flex items-center gap-4 md:gap-6">
      <Link href="/cart" aria-label="Shopping cart">
        <ShoppingBasket />
      </Link>
      <Link href="/login" aria-label="Login">
        <CircleUserRound />
      </Link>

      <button
        onClick={toggleMenu}
        aria-label="Toggle mobile menu"
        className="lg:hidden"
      >
        {menuOpen ? <X /> : <Menu />}
      </button>
    </div>
  );
};

export default NavActions;
