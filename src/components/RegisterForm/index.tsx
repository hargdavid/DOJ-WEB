import { useTranslation } from "next-i18next";
import { AttendingDays } from "@/types/registerForm";
import Step1 from "./Steps/Step1";
import Step2 from "./Steps/Step2";
import Step3 from "./Steps/Step3";
import { useRegisterFormState } from "@/hooks/RegisterProvider";
import { useMemo } from "react";

type Props = { setSuccess: (success: boolean) => void };

/* const defaultFormValue: RegisterForm = {
  name: { required: true, value: "" },
  dietPreferences: { required: false, value: false },
  attending: { required: true, value: AttendingDays.FRISUN },
  email: { required: true, value: "" },
}; */

const RegisterForm = ({ setSuccess }: Props) => {
  const { t } = useTranslation("common");
  const { form, loading, canSave, currentStep, setValue } =
    useRegisterFormState();

  const CurrentStep = useMemo(
    () =>
      function CurrentStep() {
        switch (currentStep) {
          case 1: {
            return <Step1 />;
          }
          case 2: {
            return <Step2 />;
          }
          case 3: {
            return <Step3 />;
          }
        }
      },
    []
  );

  return (
    <>
      <form className="py-8 px-8 flex gap-6 flex-col max-w-2xl m-auto">
        {currentStep === 1 && <Step1 />}
        {currentStep === 2 && <Step2 />}
        {currentStep === 3 && <Step3 />}

        {/* <Button
          onClick={(e: React.MouseEvent) => onSave(e)}
          disabled={!canSave}
        >
          {t("send")}
        </Button> */}
      </form>
      {/*     {loading && <>...Laddar</>} */}
    </>
  );
};

export default RegisterForm;
