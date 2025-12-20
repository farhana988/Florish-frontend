import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

type NavLinksProps = {
  onClick?: () => void;
  className?: string;
};

const links = [
  { id: 1, href: "/about", label: "About" },
  { id: 2, href: "/plant-care", label: "Plant Care" },
  { id: 3, href: "/contact", label: "Contact" },
];

const NavLinks = ({ onClick, className = "" }: NavLinksProps) => {
  const pathname = usePathname();
  const [openMega, setOpenMega] = useState(false);

  const isShopActive = pathname.startsWith("/shop");

  return (
    <nav
      className={`flex flex-col items-center lg:flex-row gap-4 lg:gap-5 ${className}`}
    >
      <div
        className="relative group"
        onMouseEnter={() => setOpenMega(true)}
        onMouseLeave={() => setOpenMega(false)}
      >
        <button
          type="button"
          onClick={() => setOpenMega(!openMega)}
          className={`
            relative group transition-transform
            text-xs lg:text-sm xl:text-base
            ${
              isShopActive
                ? "-translate-y-1.5 headline text-sm lg:text-base xl:text-lg"
                : "hover:-translate-y-1"
            }
          `}
        >
          Shop
          {/* DOT */}
          <span
            className={`
              absolute left-1/2 -bottom-2 h-1.5 w-1.5
              -translate-x-1/2 rounded-full bg-white
              transition-all duration-300
              ${
                isShopActive
                  ? "opacity-100 scale-100"
                  : "opacity-0 scale-0 group-hover:opacity-100 group-hover:scale-100"
              }
            `}
          />
        </button>

        {/* MEGA MENU */}
        {openMega && (
          <div
            className="
              absolute top-full left-1/2 -translate-x-1/2 
              w-screen max-w-sm
              bg-black/90 backdrop-blur-md
              grid grid-cols-1 gap-4
              p-6 text-sm z-50
            "
          >
            <Link href="/shop" onClick={onClick}>
              Indoor Plants
            </Link>
            <Link href="/shop" onClick={onClick}>
              Outdoor Plants
            </Link>
            <Link href="/shop" onClick={onClick}>
              Pots
            </Link>
          </div>
        )}
      </div>

      {/* OTHER LINKS */}
      {links.map((link) => {
        const isActive = pathname === link.href;

        return (
          <Link
            key={link.id}
            href={link.href}
            onClick={onClick}
            className={`
              relative group transition-transform
              text-xs lg:text-sm xl:text-base
              ${
                isActive
                  ? "-translate-y-1.5 headline text-sm lg:text-base xl:text-lg"
                  : "hover:-translate-y-1"
              }
            `}
          >
            {link.label}

            {/* DOT */}
            <span
              className={`
                absolute left-1/2 -bottom-2 h-1.5 w-1.5
                -translate-x-1/2 rounded-full bg-white
                transition-all duration-300
                ${
                  isActive
                    ? "opacity-100 scale-100"
                    : "opacity-0 scale-0 group-hover:opacity-100 group-hover:scale-100"
                }
              `}
            />
          </Link>
        );
      })}
    </nav>
  );
};

export default NavLinks;
