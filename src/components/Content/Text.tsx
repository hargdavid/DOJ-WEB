import { MarkTypes } from "@/types/content/contentPage";

type Props = {
  text: string;
  type: MarkTypes | undefined;
};

const Text = ({ text, type }: Props) => {
  return (
    <p
      className={`${type === MarkTypes.Bold && "bold"} ${
        type === MarkTypes.Italic && "italic"
      } ${type === MarkTypes.Underline && "underline"}`}
    >
      {text}
    </p>
  );
};

export default Text;
