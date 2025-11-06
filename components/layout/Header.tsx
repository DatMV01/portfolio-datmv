import Link from "next/link";
import { ThemeButton, ThemeSwitch } from "@/components";
import Image from "next/image";

const Header = () => {
  return (
    <header className="flex justify-between items-center px-6 py-4 border-b">
      <Link href="/" className="text-lg font-semibold">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={100}
          height={20}
          priority
        />
      </Link>
      <nav className="flex items-center gap-6">
        <Link href="/about" className="hover:underline">
          About
        </Link>
        <Link href="/dashboard" className="hover:underline">
          Dashboard
        </Link>
        <ThemeSwitch />
        <ThemeButton />
      </nav>
    </header>
  );
};

export default Header;
