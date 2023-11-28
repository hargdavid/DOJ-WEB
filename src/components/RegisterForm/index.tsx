import Step1 from "./Steps/Step1";
import Step2 from "./Steps/Step2";
import Step3 from "./Steps/Step3";
import { useRegisterFormState } from "@/hooks/RegisterProvider";
import SuccessSection from "./SuccessSection";
import ProgressBar from "./ProgressBar";
import { SuccessContent } from "@/types/content/contentPage";
import ImageList from "../Content/ImageList";
import ContentProvider from "../Content/ContentProvider";
import Section from "../Section/Section";
import Loader from "../Loader/Loader";

type Props = { success?: SuccessContent };

const RegisterForm = ({ success }: Props) => {
  const { loading, currentStep } = useRegisterFormState();

  return (
    <>
      <section className="py-8 px-8 gap-6 flex flex-col max-w-2xl m-auto relative">
        <form className="flex gap-6 flex-col max-w-2xl m-auto w-full">
          {currentStep === 1 && <Step1 />}
          {currentStep === 2 && <Step2 />}
          {currentStep === 3 && <Step3 />}
          {currentStep === 4 && <SuccessSection />}
        </form>
        <ProgressBar currentStep={currentStep} noOfSteps={4} />
        {loading && <Loader />}
      </section>
      {typeof success?.content !== "undefined" && (
        <Section>
          <ContentProvider content={success.content ?? []} />
        </Section>
      )}
      {currentStep === 4 && (
        <section className="py-6 max-w-6xl m-auto">
          {success?.images && <ImageList images={success.images} />}
        </section>
      )}
    </>
  );
};

export default RegisterForm;
