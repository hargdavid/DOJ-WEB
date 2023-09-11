import { useTranslation } from "next-i18next";
import CheckBox from "../Input/Checkbox";
import { useRegisterFormState } from "@/hooks/RegisterProvider";
import Button from "@/components/Button";
import RadioButton from "../Input/RadioButton";
import { AttendingDays } from "@/types/registerForm";

type Props = {};

const Step3 = ({}: Props) => {
  const { t } = useTranslation("common");
  const { form, setValue, step } = useRegisterFormState();

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

      <Button outlined onClick={(e: React.MouseEvent) => step(e, 2)}>
        Bakåt
      </Button>
      <Button onClick={(e: React.MouseEvent) => step(e, 3)}>Skicka</Button>
    </>
  );
};

export default Step3;
