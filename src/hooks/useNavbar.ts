import { useEffect, useState } from "react";

export const useNavbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const width = window.innerWidth;
      let scrollThreshold;

      if (width < 640) {
        // Small screen
        scrollThreshold = 100;
      } else if (width >= 640 && width < 1024) {
        // Medium screen
        scrollThreshold = 300;
      } else {
        // Large screen
        scrollThreshold = 400;
      }

      setScrolled(window.scrollY > scrollThreshold);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const closeMenu = () => setMenuOpen(false);

  return {
    scrolled,
    menuOpen,
    toggleMenu,
    closeMenu,
  };
};
