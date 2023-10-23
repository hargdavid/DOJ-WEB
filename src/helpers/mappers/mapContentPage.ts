import {
  ContentBlock,
  ContentBlockDTO,
  ContentBlockType,
  ContentPage,
  ContentPageDTO,
  Hero,
  HeroDTO,
  ImageDto,
  ImageWithLink,
  ImageWithLinkDto,
  Link,
  LinkDto,
  MarkType,
  MarkTypes,
  TagTypes,
  TextBlock,
  TextBlockDto,
  TextBlockWithStyleOrLink,
  TextTypes,
} from "@/types/content/contentPage";
import { mapImageBlock, mapVideoBlock } from "./mapImageBlock";
import { LinkButton, LinkButtonDto } from "@/types/content/linkButton";

export const mapContentPage = (contentPageDTO: ContentPageDTO): ContentPage => {
  return {
    content: mapContentBlock(contentPageDTO.content),
    path: contentPageDTO.path,
    images: contentPageDTO.images
      ? contentPageDTO.images.map(mapImageWithLinkBlock)
      : undefined,
    hero: mapHero(contentPageDTO.hero),
  };
};

export const mapHero = (heroDto: HeroDTO): Hero => ({
  subtitle: heroDto?.subtitle ?? "",
  title: heroDto?.title ?? "",
  heroImage: mapImageBlock(heroDto?.heroImage),
  button: heroDto?.button ? mapLinkButton(heroDto?.button) : undefined,
  video: heroDto?.video ? mapVideoBlock(heroDto?.video) : undefined,
  mobileImage: heroDto?.mobileImage
    ? mapImageBlock(heroDto?.mobileImage)
    : undefined,
});

const mapTextBlock = (textBlockDto: TextBlockDto): TextBlock => {
  if (textBlockDto.listItem) {
    return {
      type: TextTypes.Bullet,
      text: textBlockDto.children[0].text,
      marks: mapTextMarks(textBlockDto.children[0].marks[0]),
      link:
        textBlockDto.markDefs.length > 0
          ? mapToLink(textBlockDto.markDefs[0])
          : undefined,
    };
  } else {
    return {
      type: mapTextBlockStyle(textBlockDto.style),
      text: textBlockDto.children[0].text,
      marks: mapTextMarks(textBlockDto.children[0].marks[0]),
      link:
        textBlockDto.markDefs.length > 0
          ? mapToLink(textBlockDto.markDefs[0])
          : undefined,
    };
  }
};

export const mapContentBlock = (
  contentBlockDTOs: ContentBlockDTO[]
): ContentBlock[] => {
  const contentBlocks: ContentBlock[] = [];

  if (contentBlockDTOs?.length > 0) {
    contentBlockDTOs?.forEach((contentBlockDTO) => {
      switch (contentBlockDTO._type) {
        case ContentBlockType.Block: {
          const contentBlockText = contentBlockDTO as TextBlockDto;
          if (contentBlockText.markDefs.length > 0) {
            contentBlocks.push({
              type: TextTypes.TextList,
              text: mapTextList(contentBlockDTO as TextBlockDto),
              style: TagTypes.Text,
            } as TextBlockWithStyleOrLink);
          } else {
            contentBlocks.push(mapTextBlock(contentBlockDTO as TextBlockDto));
          }
          return;
        }
        case ContentBlockType.Image:
        case ContentBlockType.Video:
        case ContentBlockType.Images: {
          return contentBlocks.push(mapImageBlock(contentBlockDTO as ImageDto));
        }
      }
    });
  }

  return contentBlocks;
};

const mapTextBlockStyle = (style: string): TextTypes => {
  switch (style) {
    case "h1": {
      return TextTypes.H1;
    }
    case "h2": {
      return TextTypes.H2;
    }
    case "h3": {
      return TextTypes.H3;
    }
    case "blockquote": {
      return TextTypes.Quote;
    }
    case "normal":
    default:
      return TextTypes.Text;
  }
};

const mapTextMarks = (marks: string): MarkTypes => {
  switch (marks) {
    case "strong": {
      return MarkTypes.Bold;
    }
    case "em": {
      return MarkTypes.Italic;
    }
    case "underline": {
      return MarkTypes.Underline;
    }
    case "normal":
    default:
      return MarkTypes.Normal;
  }
};

const mapToLink = (linkDto: LinkDto): Link => {
  switch (linkDto._type) {
    case MarkType.Link: {
      return {
        href: linkDto.href ?? "",
        aTarget: linkDto.blank ?? false,
      };
    }
    case MarkType.LinkWithImage: {
      return {
        href: linkDto?.reference?.current ?? "",
        aTarget: linkDto.blank ?? false,
      };
    }
    default: {
      return {
        href: linkDto.reference?.current ?? "",
        aTarget: false,
      };
    }
  }
};

export const mapImageWithLinkBlock = (
  imageWithLinkDto: ImageWithLinkDto
): ImageWithLink => {
  const image = mapImageBlock(imageWithLinkDto.image as ImageDto);
  return {
    ...image,
    link:
      typeof imageWithLinkDto.link === "undefined"
        ? undefined
        : mapToLink({
            ...imageWithLinkDto.link,
            _type: MarkType.LinkWithImage,
          }),
    title: imageWithLinkDto?.title ?? undefined,
    description: imageWithLinkDto?.description ?? undefined,
  };
};

export const mapLinkButton = (linkButton: LinkButtonDto): LinkButton => ({
  link: linkButton.link,
  title: linkButton.title,
  isButton: linkButton.isButton,
});

const mapTextList = (textBlock: TextBlockDto): TextBlock[] => {
  return textBlock.children.map((textChild) => {
    if (textChild.marks.length > 0) {
      const linkEl = textBlock.markDefs.find(
        (markDef) => markDef._key === textChild.marks[0]
      );
      if (linkEl) {
        return {
          type: TextTypes.Text,
          text: textChild.text,
          marks: mapTextMarks(textChild.marks[0]),
          link: mapToLink(linkEl),
        };
      }
    }

    return {
      type: TextTypes.Text,
      text: textChild.text,
      marks: mapTextMarks(textChild.marks[0]),
    };
  });
};
