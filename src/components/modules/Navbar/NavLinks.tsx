import Link from "next/link";
import { usePathname } from "next/navigation";

type NavLinksProps = {
  onClick?: () => void;
  className?: string;
};

const links = [
  { id: 1, href: "/shop", label: "Shop" },
  { id: 2, href: "/about", label: "About" },
  { id: 3, href: "/plant-care", label: "Plant Care" },
  { id: 4, href: "/contact", label: "Contact" },
];

const NavLinks = ({ onClick, className = "" }: NavLinksProps) => {
  const pathname = usePathname();

  return (
    <nav
      className={`flex flex-col items-center lg:flex-row gap-4 lg:gap-5 ${className}`}
    >
      {links.map((link) => {
        const isActive = pathname === link.href;

        return (
          <Link
            key={link.id}
            href={link.href}
            onClick={onClick}
            className={`
              relative group text-xs lg:text-sm xl:text-base transition-transform
              ${
                isActive
                  ? "-translate-y-1.5 headline text-sm lg:text-base xl:text-lg"
                  : "hover:-translate-y-1 text-xs lg:text-sm xl:text-base"
              }
            `}
          >
            {link.label}

            {/* Dot for active or hover */}
            <span
              className={`
                absolute left-1/2 -bottom-2 h-[6px] w-[6px] -translate-x-1/2 rounded-full bg-white
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
