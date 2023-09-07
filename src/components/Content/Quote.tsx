type Props = {
  text: string;
};

const Quote = ({ text }: Props) => {
  return <q>{text}</q>;
};

export default Quote;
