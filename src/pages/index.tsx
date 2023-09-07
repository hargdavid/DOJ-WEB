import ContentApi from "@/api/content/page";
import Hero from "@/components/Hero";
import Section from "@/components/Section";
import { StartPage } from "@/types/content/startPage";
import { useTranslation } from "next-i18next";
import { useEffect, useState } from "react";

const Home = () => {
  const { t } = useTranslation("common");
  const [content, setContent] = useState<StartPage>({
    title: "",
    subTitle: "",
  });

  useEffect(() => {
    (async () => {
      setContent(await ContentApi.getStartPage());
    })();
  }, []);

  return (
    <>
      <Hero
        imageUrl="/assets/img/example.jpeg"
        title={content.title}
        subTitle={content.subTitle}
      />
      <Section>
        <p>{t("home-text")}</p>
      </Section>
    </>
  );
};

export default Home;
