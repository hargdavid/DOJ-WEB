type Props = { currentStep: number; noOfSteps: number };

const ProgressBar = ({ currentStep, noOfSteps }: Props) => {
  const percentage = (currentStep / noOfSteps) * 100;
  const progressWidth = `w-[${percentage}%]`.toString();

  return (
    <div className="block w-full h-4 border-black border-solid border-2 rounded-3xl relative">
      <span className="block w-full h-full bg-white rounded-3xl absolute" />
      <span
        className={`ease-in-out block h-full bg-green rounded-3xl absolute duration-200 ${progressWidth}`}
      />
    </div>
  );
};

export default ProgressBar;
