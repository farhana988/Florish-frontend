import NavLinks from "./NavLinks";

type MobileMenuProps = {
  isOpen: boolean;
  closeMenu: () => void;
};

const MobileMenu = ({ isOpen, closeMenu }: MobileMenuProps) => {
  if (!isOpen) return null;

  return (
    <div
      className="absolute top-full right-0 bg-black/90 backdrop-blur-md 
    lg:hidden px-6 py-4 text-center w-2/3 md:w-1/2 "
    >
      <NavLinks onClick={closeMenu} />
    </div>
  );
};

export default MobileMenu;
