import { MarkTypes } from "@/types/content/contentPage";

type Props = {
  text: string;
  type: MarkTypes | undefined;
};

const Text = ({ text, type }: Props) => {
  const stylingClasses = `${type === MarkTypes.Bold ? "bold " : ""}${
    type === MarkTypes.Italic ? "italic " : ""
  } ${type === MarkTypes.Underline ? "underline " : ""}`;

  return <p className={`${stylingClasses} max-w-xl max-md:px-4`}>{text}</p>;
};

export default Text;
