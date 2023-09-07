import Link from "next/link";
import Image from "next/image";
import MobileMenu from "../MobileMenu";
import Links from "./Links";
import { NavigationItem } from "@/types/content/navigation";

type Props = {
  isDesktop: boolean;
  isTop: boolean;
  navigation: NavigationItem[];
};

const Header = ({ isDesktop, isTop, navigation }: Props) => {
  return (
    <header
      className={`items-start md:items-center py-6 px-8 fixed w-full z-10 flex justify-between ease-in-out duration-200 ${
        !isTop && "bg-lime"
      }`}
    >
      <Link href="/">
        <Image
          src="/assets/img/logo.png"
          alt="logo julia david"
          width={528}
          height={287}
          className="w-36 md:w-48"
        />
      </Link>
      {isDesktop ? (
        <nav className="flex justify-between items-center gap-4">
          <Links navigation={navigation} />
        </nav>
      ) : (
        <MobileMenu>
          <Links navigation={navigation} />
        </MobileMenu>
      )}
    </header>
  );
};

export default Header;
