import {
  Mail,
  Phone,
  MapPin,
  Instagram,
  Facebook,
  Twitter,
  Youtube,
} from "lucide-react";

export const contactDetails = [
  {
    icon: <Mail size={20} />,
    text: "support@florish.com",
    link: "mailto:support@florish.com",
  },
  {
    icon: <Phone size={20} />,
    text: "(123) 456-7890",
    link: "tel:+11234567890",
  },
  {
    icon: <MapPin size={20} />,
    text: "123 Greenhouse Ave, Plant City, FL 12345",
    link: "https://www.google.com/maps?q=123+Greenhouse+Ave,+Plant+City,+FL+12345",
  },
];

export const socialLinks = [
  {
    icon: <Instagram size={20} />,
    link: "https://www.instagram.com/florish",
  },
  {
    icon: <Facebook size={20} />,
    link: "https://www.facebook.com/florish",
  },
  {
    icon: <Twitter size={20} />,
    link: "https://www.twitter.com/florish",
  },
  {
    icon: <Youtube size={20} />,
    link: "https://www.youtube.com/c/florish",
  },
];
