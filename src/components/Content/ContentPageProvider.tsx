import { ContentPage } from "@/types/content/contentPage";
import Hero from "../Hero";
import ImageList from "./ImageList";
import ContentProvider from "./ContentProvider";
import Section from "../Section/Section";

type Props = { contentPage: ContentPage };

const ContentPageProvider = ({ contentPage }: Props) => {
  const { hero, content } = contentPage;

  return (
    <>
      <Hero hero={hero} />
      <Section>
        <ContentProvider content={content} />
        {contentPage.images && <ImageList images={contentPage.images} />}
      </Section>
    </>
  );
};

export default ContentPageProvider;
