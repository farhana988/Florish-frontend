import Link from "next/link";
import { ShoppingBasket, Menu, X, CircleUserRound } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import OutlineBtn from "@/components/buttons/OutlineBtn";
import LogoutButton from "@/components/buttons/LogoutButton";
import { useCart } from "@/hooks/useCart";

interface NavActionsProps {
  menuOpen: boolean;
  toggleMenu: () => void;
  accessToken: string | null;
}

const NavActions = ({ menuOpen, toggleMenu, accessToken }: NavActionsProps) => {
  const { cartItems } = useCart();
  const count = cartItems.length;
  return (
    <div className="flex items-center gap-4 md:gap-6">
      <div className="relative flex items-center">
        <Link href="/cart" aria-label="Shopping cart">
          <ShoppingBasket className="w-7 h-7" />
        </Link>

        {count > 0 && (
          <span
            className="absolute -top-1 -right-2 bg-white text-white text-xs 
          font-bold rounded-full w-3 h-3 flex items-center justify-center animate-pulse"
          ></span>
        )}
      </div>
      {accessToken ? (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button>
              <CircleUserRound className="h-6 w-6" />
            </button>
          </DropdownMenuTrigger>

          <DropdownMenuContent
            align="end"
            sideOffset={0}
            alignOffset={0}
            className="mt-3 lg:mt-4 rounded-none p-4 bg-dGreen
           text-white border-none w-40"
          >
            <DropdownMenuItem asChild>
              <Link href="/dashboard">Dashboard</Link>
            </DropdownMenuItem>
            <DropdownMenuItem className="data-highlighted:bg-red-900 data-highlighted:text-white">
              <LogoutButton />
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      ) : (
        <OutlineBtn text="Login" href="/login" />
      )}
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
