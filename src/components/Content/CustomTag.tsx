import { TagTypes } from "@/types/content/contentPage";

type Props = { type?: TagTypes; children: React.ReactNode };

const CustomTag = ({ type = TagTypes.Text, children }: Props) => {
  const TagName = type as keyof JSX.IntrinsicElements;

  return <TagName>{children}</TagName>;
};

export default CustomTag;
