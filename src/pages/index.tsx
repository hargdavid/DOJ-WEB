import Hero from "@/components/Hero";
import Section from "@/components/Section";
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

type Props = {};

const Home = (_props: InferGetStaticPropsType<typeof getStaticProps>) => {
  const { t } = useTranslation("common");

  return (
    <>
      <Hero
        imageUrl="/assets/img/example.jpeg"
        title={t("julia-david")}
        subTitle={t("date")}
      />
      <Section>
        <p>{t("home-text")}</p>
      </Section>
    </>
  );
};

export const getStaticProps: GetStaticProps<Props> = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? "sv", ["common"])),
  },
});

export default Home;
