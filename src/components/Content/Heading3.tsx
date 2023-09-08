type Props = {
  text: string;
};

const Heading3 = ({ text }: Props) => {
  return <h3 className="text-xl lg:text-2xl bold">{text}</h3>;
};

export default Heading3;
