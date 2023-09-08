import {
  ContentBlockType,
  ContentPage,
  TextTypes,
} from "@/types/content/contentPage";
import Title from "./Title";
import Heading2 from "./Heading2";
import Heading3 from "./Heading3";
import Text from "./Text";
import Quote from "./Quote";
import Bullet from "./Bullet";
import CustomImage from "./Image";
import Section from "../Section";
import Hero from "../Hero";

type Props = {
  contentPage: ContentPage;
};

const ContentProvider = ({ contentPage }: Props) => {
  const { title, subtitle, content, heroImage } = contentPage;

  return (
    <>
      <Hero
        subTitle={subtitle}
        title={title}
        imageUrl={heroImage.url}
        alt={heroImage.alt}
      />
      <Section>
        {content.map((contentBlock, key) => {
          switch (contentBlock.type) {
            case TextTypes.H1: {
              return <Title key={key} title={contentBlock.text} />;
            }
            case TextTypes.H2: {
              return <Heading2 key={key} text={contentBlock.text} />;
            }
            case TextTypes.H3: {
              return <Heading3 key={key} text={contentBlock.text} />;
            }
            case TextTypes.Text: {
              return (
                <Text
                  key={key}
                  text={contentBlock.text}
                  type={contentBlock.marks}
                />
              );
            }
            case TextTypes.Quote: {
              return <Quote key={key} text={contentBlock.text} />;
            }
            case TextTypes.Bullet: {
              return <Bullet key={key} text={contentBlock.text} />;
            }
            case ContentBlockType.Image: {
              return (
                <CustomImage
                  key={key}
                  url={contentBlock.url}
                  alt={contentBlock.alt}
                />
              );
            }
            default:
              return <></>;
          }
        })}
      </Section>
    </>
  );
};

export default ContentProvider;
