import { FooterLink } from "@/data/footerData";
import Link from "next/link";

interface FooterSectionProps {
  title: string;
  links: FooterLink[];
}

const FooterSection = ({ title, links }: FooterSectionProps) => {
  return (
    <div className="md:mt-4">
      <h4 className="font-semibold mb-4">{title}</h4>
      <ul className="space-y-2 text-xs opacity-80">
        {links.map(({ name, href }, idx) => (
          <li key={idx}>
            <Link
              href={href}
              className="hover:underline hover:underline-offset-8"
            >
              {name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterSection;
