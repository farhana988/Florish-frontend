import Link from "next/link";
import { usePathname } from "next/navigation";

type NavLinksProps = {
  onClick?: () => void;
  className?: string;
};

const links = [
  { id: 1, href: "/", label: "Home" },
  { id: 2, href: "/shop", label: "Shop" },
  { id: 3, href: "/about", label: "About" },
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
              ${isActive ? "-translate-y-1 headline " : "hover:-translate-y-1"}
            `}
          >
            {link.label}
            <span
              className={`
                absolute left-0 -bottom-1 h-[2px] w-0 bg-white
                transition-all duration-500 group-hover:w-full
              `}
            />
          </Link>
        );
      })}
    </nav>
  );
};

export default NavLinks;
