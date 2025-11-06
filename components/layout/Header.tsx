import { Container, TextLogo, ThemeSwitch } from "@/components";
import Image from "next/image";
import Link from "next/link";
import { assets } from "@/constants";

const LeftHeader = () => {
  return (
    <Link href="#home" className="relative">
      <Image
        alt="User avatar"
        src={assets.images.avatar}
        className="w-12 h-12 rounded-full object-cover object-[50%_20%]"
      />
      <TextLogo className="absolute top-1/2 left-25 -translate-x-1/2 -translate-y-1/2" />
    </Link>
  );
};

const Header = () => {
  return (
    <Container
      as="header"
      id="header"
      className="sticky top-0 z-50 backdrop-blur-md"
    >
      <div className="flex h-16 items-center justify-between">
        <LeftHeader />

        <ThemeSwitch />
      </div>
    </Container>
  );
};

export default Header;
