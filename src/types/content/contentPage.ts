export type ContentPage = {
  content: ContentBlock[];
  path: string;
  subtitle: string;
  title: string;
  heroImage: Image;
};

export type ContentPageDTO = {
  content: ContentBlockDTO[];
  path: string;
  subtitle: string;
  title: string;
  heroImage: ImageDto;
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
};

export enum ContentBlockType {
  Image = "image",
  Block = "block",
}

export type TextBlockDto = {
  markDefs: string[];
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
