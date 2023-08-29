import { useTranslation } from "next-i18next";
import Link from "next/link";
import LinkButton from "../LinkButton";

const Footer = () => {
  const { t } = useTranslation("common");

  return (
    <footer className="w-full px-8 py-8">
      <nav className="flex flex-col items-center gap-4 w-max">
        <Link href="/when-where">{t("when-where")}</Link>
        <Link href="/event-details">{t("event-details")}</Link>
        <LinkButton href="/rsvp" title={t("rsvp")} />
      </nav>
    </footer>
  );
};

export default Footer;
