type Props = {};

const SkeletonFiller = ({}: Props) => {
  return (
    <>
      <section className="w-full pb-[120%] md:pb-[40%] relative overflow-hidden bg-orange" />
      <section className="w-full h-[400px] bg-white" />
    </>
  );
};

export default SkeletonFiller;
