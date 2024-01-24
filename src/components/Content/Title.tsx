type Props = {
  title: string;
  className?: string;
};

const Title = ({ title, className = "" }: Props) => {
  return (
    <h1 className={`text-5xl lg:text-6xl pb-4 max-md:px-4 ${className}`}>
      {title}
    </h1>
  );
};

export default Title;
