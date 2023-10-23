import { useTranslation } from "next-i18next";
import { NavigationItem, Social } from "@/types/content/navigation";
import Links from "./Links";
import SocialMedia from "./SocialMedia";

type Props = {
  navigation: NavigationItem[];
  social?: Social;
};

const Footer = ({ navigation, social }: Props) => {
  return (
    <footer className="w-full px-8 py-8 bg-brown">
      <div className="flex justify-between gap-6">
        <nav className="flex flex-col items-start gap-4 w-max">
          <Links navigation={navigation} isFooter />
        </nav>

        {social && <SocialMedia social={social} />}
      </div>

      <p className="pt-6 font-thin text-xs">
        &#169; The Fog Development AB 2023
      </p>
    </footer>
  );
};

export default Footer;
