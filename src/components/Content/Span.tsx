import { MarkTypes } from "@/types/content/contentPage";

type Props = {
  text: string;
  type: MarkTypes | undefined;
};

const Span = ({ text, type }: Props) => {
  return (
    <span
      className={`${type === MarkTypes.Bold ? "bold" : ""} ${
        type === MarkTypes.Italic ? "italic" : ""
      } ${type === MarkTypes.Underline ? "underline" : ""}`}
    >
      {text}
    </span>
  );
};

export default Span;
