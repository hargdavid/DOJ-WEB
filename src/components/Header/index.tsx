import Link from "next/link";
import { useTranslation } from "next-i18next";
import LinkButton from "../LinkButton";
import Image from "next/image";
import { useGlobalState } from "@/hooks/GlobalProvider";
import MobileMenu from "../MobileMenu";

const Header = () => {
  const { t } = useTranslation("common");
  const { isDesktop, isTop } = useGlobalState();

  const Links = () => {
    return (
      <>
        <Link href="/content/when-where">{t("when-where")}</Link>
        <Link href="/content/event-details">{t("event-details")}</Link>
        <LinkButton href="/register" title={t("rsvp")} />
      </>
    );
  };

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
          <Links />
        </nav>
      ) : (
        <MobileMenu>
          <Links />
        </MobileMenu>
      )}
    </header>
  );
};

export default Header;
