type Props = {
  title: string;
};

const Title = ({ title }: Props) => {
  return <h1 className="text-5xl lg:text-6xl pb-4">{title}</h1>;
};

export default Title;
