import { MarkTypes } from "@/types/content/contentPage";

type Props = {
  text: string;
  type: MarkTypes | undefined;
};

const Text = ({ text }: Props) => {
  return <p>{text}</p>;
};

export default Text;
