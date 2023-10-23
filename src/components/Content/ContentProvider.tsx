import {
  ContentBlock,
  ContentBlockType,
  TextBlockWithStyleOrLink,
  TextTypes,
} from "@/types/content/contentPage";
import Title from "./Title";
import Heading2 from "./Heading2";
import Heading3 from "./Heading3";
import Text from "./Text";
import Quote from "./Quote";
import Bullet from "./Bullet";
import CustomImage from "./Image";
import Link from "./Link";
import Span from "./Span";
import CustomTag from "./CustomTag";

type Props = {
  content: ContentBlock[];
};

const ContentProvider = ({ content }: Props) => {
  return (
    <>
      {content?.map((contentBlock, key) => {
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
            if (contentBlock.link) {
              return (
                <Link key={key} link={contentBlock.link}>
                  <Span text={contentBlock.text} type={contentBlock.marks} />
                </Link>
              );
            } else {
              return (
                <Text
                  key={key}
                  text={contentBlock.text}
                  type={contentBlock.marks}
                />
              );
            }
          }
          case TextTypes.Quote: {
            return <Quote key={key} text={contentBlock.text} />;
          }
          case TextTypes.Bullet: {
            return <Bullet key={key} text={contentBlock.text} />;
          }
          case ContentBlockType.Image: {
            return (
              <div key={key} className="w-full md:w-[60%]">
                <CustomImage url={contentBlock.url} alt={contentBlock.alt} />
              </div>
            );
          }
          case TextTypes.TextList: {
            const textBlockList = contentBlock as TextBlockWithStyleOrLink;
            return (
              <CustomTag key={key} type={textBlockList.style}>
                <>
                  {textBlockList.text.map((textBlock, key) =>
                    textBlock.link ? (
                      <Link key={key} link={textBlock.link}>
                        {textBlock.text}
                      </Link>
                    ) : (
                      <span key={key}>{textBlock.text}</span>
                    )
                  )}
                </>
              </CustomTag>
            );
          }
          default:
            return <></>;
        }
      })}
    </>
  );
};

export default ContentProvider;
