import { useTranslation } from "next-i18next";
import { useRegisterFormState } from "@/hooks/RegisterProvider";
import RadioButton from "../Input/RadioButton";
import { AttendingDays } from "@/types/registerForm";
import ButtonNavigation from "./ButtonNavigation";

type Props = {};

const Step3 = ({}: Props) => {
  const { t } = useTranslation("common");
  const { form, setValue, step, onSave } = useRegisterFormState();

  return (
    <>
      <RadioButton
        id="attending"
        label={t("fri-sun")}
        value={form.attending.value}
        onChange={() => setValue("attending", AttendingDays.FRISUN)}
        defaultChecked
      />
      <RadioButton
        id="attending"
        label={t("sat-sun")}
        value={form.attending.value}
        onChange={() => setValue("attending", AttendingDays.SATSUN)}
      />
      <RadioButton
        id="attending"
        label={t("sat")}
        value={form.attending.value}
        onChange={() => setValue("attending", AttendingDays.SAT)}
      />
      <ButtonNavigation submit={onSave} step={step} currentStep={3} />
    </>
  );
};

export default Step3;
