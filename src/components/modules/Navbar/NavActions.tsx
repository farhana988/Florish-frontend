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

interface NavActionsProps {
  menuOpen: boolean;
  toggleMenu: () => void;
  accessToken: string | null;
}

const NavActions = ({ menuOpen, toggleMenu, accessToken }: NavActionsProps) => {
  return (
    <div className="flex items-center gap-4 md:gap-6">
      <Link href="/cart" aria-label="Shopping cart">
        <ShoppingBasket />
      </Link>
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
