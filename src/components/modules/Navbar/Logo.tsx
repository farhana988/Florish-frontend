import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/" className="flex items-center">
      <div className="relative w-14 h-14 lg:w-16 lg:h-16 xl:w-20 xl:h-20">
        <Image src="/logo.png" alt="logo" width={80} height={80} />
      </div>
      <span className="text-lg lg:text-2xl italic headline tracking-wide">
        Florish
      </span>
    </Link>
  );
};

export default Logo;
