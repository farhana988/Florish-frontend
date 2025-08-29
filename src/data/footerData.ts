export interface FooterLink {
  name: string;
  href: string;
}

export interface FooterSectionData {
  title: string;
  links: FooterLink[];
}

export const footerData = [
  {
    title: "Company",
    links: [
      { name: "About Us", href: "/about" },
      { name: "Our Story", href: "/our-story" },
      { name: "Careers", href: "/careers" },
      { name: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Shop",
    links: [
      { name: "All Bouquets", href: "/shop/bouquets" },
      { name: "Weddings & Events", href: "/shop/weddings-events" },
      { name: "Subscriptions", href: "/shop/subscriptions" },
      { name: "Custom Orders", href: "/shop/custom-orders" },
    ],
  },
  {
    title: "Support",
    links: [
      { name: "Shipping & Delivery", href: "/support/shipping" },
      { name: "Returns & Refunds", href: "/support/returns" },
      { name: "FAQ", href: "/support/faq" },
      { name: "Floral Care Tips", href: "/support/floral-care" },
    ],
  },
];

export const bottomLinks = [
  { name: "Privacy Policy", href: "/privacy" },
  { name: "Terms & Conditions", href: "/terms" },
];
