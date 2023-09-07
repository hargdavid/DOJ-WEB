import { useTranslation } from "next-i18next";
import { NavigationItem } from "@/types/content/navigation";
import Links from "./Links";

type Props = {
  navigation: NavigationItem[];
};

const Footer = ({ navigation }: Props) => {
  return (
    <footer className="w-full px-8 py-8 bg-brown">
      <nav className="flex flex-col items-start gap-4 w-max">
        <Links navigation={navigation} />
      </nav>

      <p className="pt-6 font-thin text-xs">
        &#169; The Fog Development AB 2023
      </p>
    </footer>
  );
};

export default Footer;
