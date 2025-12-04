"use client";

import { useEffect, useState } from "react";

export const useNavbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const scrollThreshold = 100;
    const handleScroll = () => {
      setScrolled(window.scrollY > scrollThreshold);
    };
    handleScroll();
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
