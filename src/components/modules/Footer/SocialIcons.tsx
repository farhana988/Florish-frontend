import { socialIcons } from "@/data/socialIconsData";

const SocialIcons = () => (
  <div className="flex gap-6">
    {socialIcons.map(({ href, label, icon }, index) => (
      <a
        key={index}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={label}
        className="transition text-lg lg:text-2xl"
      >
        {icon}
      </a>
    ))}
  </div>
);

export default SocialIcons;
