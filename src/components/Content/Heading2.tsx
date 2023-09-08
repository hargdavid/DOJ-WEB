type Props = {
  text: string;
};

const Heading2 = ({ text }: Props) => {
  return <h2 className="text-3xl lg:text-4xl">{text}</h2>;
};

export default Heading2;
