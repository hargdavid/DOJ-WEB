import Link from "next/link";
import Image from "next/image";
import MobileMenu from "../MobileMenu/MobileMenu";
import Links from "./Links";
import { NavigationItem } from "@/types/content/navigation";
import { Image as ImageType } from "@/types/content/contentPage";

type Props = {
  isDesktop: boolean;
  isTop: boolean;
  navigation: NavigationItem[];
  logo?: ImageType;
};

const Header = ({ isDesktop, isTop, navigation, logo }: Props) => {
  return (
    <header
      className={`items-start md:items-center py-6 px-8 fixed w-full z-10 flex justify-between ease-in-out duration-200 ${
        !isTop && "bg-lime"
      }`}
    >
      <Link href="/">
        {logo && (
          <Image
            src={logo?.url}
            alt={logo?.alt}
            width={528}
            height={287}
            className="w-36 md:w-48"
          />
        )}
      </Link>
      {isDesktop ? (
        <nav className="flex justify-between items-center gap-4">
          <Links navigation={navigation} isTop={isTop} />
        </nav>
      ) : (
        <MobileMenu isTop={isTop}>
          <Links navigation={navigation} isTop={false} />
        </MobileMenu>
      )}
    </header>
  );
};

export default Header;
