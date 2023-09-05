import { useTranslation } from "next-i18next";
import Link from "next/link";
import LinkButton from "../LinkButton";

const Footer = () => {
  const { t } = useTranslation("common");

  return (
    <footer className="w-full px-8 py-8 bg-brown">
      <nav className="flex flex-col items-start gap-4 w-max">
        <Link href="/when-where">{t("when-where")}</Link>
        <Link href="/event-details">{t("event-details")}</Link>
        <LinkButton href="/register" title={t("rsvp")} />
      </nav>

      <p className="pt-6 font-thin text-xs">
        &#169; The Fog Development AB 2023
      </p>
    </footer>
  );
};

export default Footer;
