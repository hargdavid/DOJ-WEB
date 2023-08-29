import Link from "next/link";
import { useTranslation } from "next-i18next";
import LinkButton from "../LinkButton";
import Image from "next/image";

const Header = () => {
  const { t } = useTranslation("common");

  return (
    <header className="py-10 px-8 fixed w-full z-10 flex justify-between">
      <Link href="/">
        <Image
          src="/assets/img/logo.png"
          alt="logo julia david"
          width={528}
          height={287}
          className="w-48"
        />
      </Link>
      <nav className="flex justify-between items-center gap-4">
        <Link href="/when-where">{t("when-where")}</Link>
        <Link href="/event-details">{t("event-details")}</Link>
        <LinkButton href="/rsvp" title={t("rsvp")} />
      </nav>
    </header>
  );
};

export default Header;
