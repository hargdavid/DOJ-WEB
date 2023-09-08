import {
  ContentBlock,
  ContentBlockDTO,
  ContentBlockType,
  ContentPage,
  ContentPageDTO,
  Image,
  ImageDto,
  MarkTypes,
  TextBlock,
  TextBlockDto,
  TextTypes,
} from "@/types/content/contentPage";
import { imageAssetToPath } from "../imageAssetToPath";
import { mapImageBlock } from "./mapImageBlock";

export const mapContentPage = (contentPageDTO: ContentPageDTO): ContentPage => {
  return {
    content: contentPageDTO.content.map(mapContentBlock),
    path: contentPageDTO.path,
    subtitle: contentPageDTO.subtitle,
    title: contentPageDTO.title,
    heroImage: mapImageBlock(contentPageDTO.heroImage),
  };
};

const mapTextBlock = (textBlockDto: TextBlockDto): TextBlock => {
  if (textBlockDto.listItem) {
    return {
      type: TextTypes.Bullet,
      text: textBlockDto.children[0].text,
      marks: mapTextMarks(textBlockDto.children[0].marks[0]),
    };
  } else {
    return {
      type: mapTextBlockStyle(textBlockDto.style),
      text: textBlockDto.children[0].text,
      marks: mapTextMarks(textBlockDto.children[0].marks[0]),
    };
  }
};

const mapContentBlock = (contentBlockDTO: ContentBlockDTO): ContentBlock => {
  switch (contentBlockDTO._type) {
    case ContentBlockType.Block: {
      return mapTextBlock(contentBlockDTO as TextBlockDto);
    }
    case ContentBlockType.Image: {
      return mapImageBlock(contentBlockDTO as ImageDto);
    }
  }
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
