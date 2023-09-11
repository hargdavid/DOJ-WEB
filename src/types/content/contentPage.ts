import { LinkButton, LinkButtonDto } from "./linkButton";

export type ContentPage = {
  content: ContentBlock[];
  path: string;
  subtitle: string;
  title: string;
  heroImage: Image;
  images?: ImageWithLink[];
  button?: LinkButton;
};

export type ContentPageDTO = {
  content: ContentBlockDTO[];
  path: string;
  subtitle: string;
  title: string;
  heroImage: ImageDto;
  images?: ImageWithLinkDto[];
  button?: LinkButtonDto;
} & Document;

export type ContentBlock = TextBlock | Image;

export type ContentBlockDTO = TextBlockDto | ImageDto;

export enum TextTypes {
  H1 = "H1",
  H2 = "H2",
  H3 = "H3",
  Text = "Text",
  Quote = "Quote",
  Bullet = "Bullet",
}

export enum MarkTypes {
  Normal = "normal",
  Bold = "bold",
  Italic = "italic",
  Underline = "underline",
}

export type TextBlock = {
  type: TextTypes;
  text: string;
  marks: MarkTypes | undefined;
  link?: Link;
};

export type Link = {
  href: string;
  aTarget: boolean;
};

export enum ContentBlockType {
  Image = "image",
  Block = "block",
  Images = "images",
}

export type TextBlockDto = {
  markDefs: LinkDto[];
  style: string;
  _key: string;
  _type: ContentBlockType;
  listItem?: string;
  children: {
    marks: string[];
    text: string;
    _key: string;
    _type: string;
  }[];
};

export type Image = {
  alt: string;
  url: string;
  type: ContentBlockType.Image;
};

export type ImageDto = {
  alt: string;
  asset: {
    _type: string;
    _ref: string;
  };
  _key: string;
  _type: ContentBlockType;
};

export type ImageWithLink = Image & {
  link?: Link;
};

export type ImageWithLinkDto = {
  image: ImageDto;
  link: LinkDto;
};

export enum MarkType {
  Link = "link",
  Reference = "internalLink",
  LinkWithImage = "imageWithLink",
}

export type LinkDto = {
  _key: string;
  _type: MarkType;
  blank?: boolean;
  href?: string;
  reference?: Reference;
};

export type Reference = { current: string; _type: string };
