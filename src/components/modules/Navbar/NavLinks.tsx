import Link from "next/link";

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

const NavLinks = ({ onClick, className = "" }: NavLinksProps) => (
  <nav className={`flex flex-col lg:flex-row gap-4 lg:gap-5 ${className}`}>
    {links.map((link) => (
      <Link
        key={link.id}
        href={link.href}
        onClick={onClick}
        className=" transition hover:-translate-y-1 text-xs lg:text-sm xl:text-base"
      >
        {link.label}
      </Link>
    ))}
  </nav>
);

export default NavLinks;
