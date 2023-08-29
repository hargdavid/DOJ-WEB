import Hero from "@/components/Hero";
import TextSection from "@/components/TextSection";
import { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

type Props = {};

const Home = () => {
  const { t } = useTranslation("common");

  return (
    <>
      <Hero />
      <TextSection>
        <p>{t("home-text")}</p>
      </TextSection>
    </>
  );
};

export const getStaticProps: GetStaticProps<Props> = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? "sv", ["common"])),
  },
});

export default Home;
