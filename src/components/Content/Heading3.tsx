type Props = {
  text: string;
  id?: string;
};

const Heading3 = ({ text, id }: Props) => {
  return (
    <h3 className="text-xl lg:text-2xl bold" id={id}>
      {text}
    </h3>
  );
};

export default Heading3;
