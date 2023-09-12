import Step1 from "./Steps/Step1";
import Step2 from "./Steps/Step2";
import Step3 from "./Steps/Step3";
import { useRegisterFormState } from "@/hooks/RegisterProvider";
import SuccessSection from "../SuccessSection";
import ProgressBar from "./ProgressBar";

type Props = {};

const RegisterForm = ({}: Props) => {
  const { loading, currentStep } = useRegisterFormState();

  return (
    <div className="py-8 px-8 gap-6 flex flex-col max-w-2xl m-auto">
      <form className="flex gap-6 flex-col max-w-2xl m-auto w-full">
        {currentStep === 1 && <Step1 />}
        {currentStep === 2 && <Step2 />}
        {currentStep === 3 && <Step3 />}
        {currentStep === 4 && <SuccessSection />}
      </form>
      <ProgressBar currentStep={currentStep} noOfSteps={4} />

      {loading && <>...Laddar</>}
    </div>
  );
};

export default RegisterForm;
