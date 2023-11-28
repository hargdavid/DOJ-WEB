type Props = {};

const Loader = ({}: Props) => {
  return (
    <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
      <div className="loader" />
    </div>
  );
};

export default Loader;
