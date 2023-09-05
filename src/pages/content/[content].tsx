import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useState } from "react";

type Props = {};

const ContentPage = (
  _props: InferGetStaticPropsType<typeof getStaticProps>
) => {
  const [content, setContent] = useState<boolean>(false); //TODO change this

  return <section>THis is a contentpage</section>;
};

export const getStaticPaths: GetStaticPaths = async () => {
  return { paths: [], fallback: false };
};

export const getStaticProps: GetStaticProps<Props> = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? "sv", ["common"])),
  },
});

export default ContentPage;
