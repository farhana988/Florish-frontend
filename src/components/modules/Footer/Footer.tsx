import { bottomLinks, footerData } from "@/data/footerData";
import Logo from "../Navbar/Logo";
import FooterSection from "./FooterSection";
import Link from "next/link";
import SocialIcons from "./SocialIcons";

const Footer = () => {
  return (
    <footer className="max-w-7xl mx-auto px-6 py-12">
      <div className="flex flex-wrap justify-between gap-10">
        {/* Logo & description */}
        <div className="space-y-4 max-w-xs lg:max-w-sm">
          <Logo />
          <p className="text-xs leading-relaxed opacity-80">
            At Bloom & Bliss, we deliver fresh, hand-picked flowers for every
            occasion. From everyday bouquets to stunning arrangements for
            weddings and events — bringing joy, one bloom at a time.
          </p>
          <SocialIcons />
        </div>

        {/* Dynamic footer sections */}
        {footerData.map((section, idx) => (
          <FooterSection
            key={idx}
            title={section.title}
            links={section.links}
          />
        ))}
      </div>

      {/* Bottom section */}
      <div className="border-t border-gray-300 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center text-xs">
        <div className="space-x-4 opacity-80">
          {bottomLinks.map((link, idx) => (
            <Link
              key={idx}
              href={link.href}
              className="hover:underline hover:underline-offset-4"
            >
              {link.name}
            </Link>
          ))}
        </div>
        <p className="mt-4 md:mt-0">
          &copy; {new Date().getFullYear()} Florish. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
