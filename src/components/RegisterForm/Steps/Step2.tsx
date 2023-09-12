import { useTranslation } from "next-i18next";
import CheckBox from "../Input/Checkbox";
import { useRegisterFormState } from "@/hooks/RegisterProvider";
import TextInput from "../Input/TextInput";
import ButtonNavigation from "./ButtonNavigation";

type Props = {};

const Step2 = ({}: Props) => {
  const { t } = useTranslation("common");
  const { form, setValue, step } = useRegisterFormState();

  return (
    <>
      <CheckBox
        placeholder={t("diet-preferences")}
        value={form.dietPreferences.value}
        onChange={(val: boolean) => setValue("dietPreferences", val)}
        name={"dietPreferences"}
      />

      {form.dietPreferences.value && (
        <TextInput
          placeholder={t("email")}
          value={form.typeOfDiet.value}
          onChange={(val: string) => setValue("typeOfDiet", val)}
          name="typeOfDiet"
        />
      )}
      <ButtonNavigation step={step} currentStep={2} />
    </>
  );
};

export default Step2;
