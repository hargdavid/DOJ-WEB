import { useTranslation } from "next-i18next";
import CheckBox from "../Input/Checkbox";
import { useRegisterFormState } from "@/hooks/RegisterProvider";
import TextInput from "../Input/TextInput";
import ButtonNavigation from "./ButtonNavigation";
import Heading3 from "@/components/Content/Heading3";
import { useEffect, useState } from "react";

type Props = {};

const Step2 = ({}: Props) => {
  const { t } = useTranslation("common");
  const { form, setValue, step } = useRegisterFormState();
  const [buttonDisabled, setButtonDisabled] = useState<boolean>(true);

  useEffect(() => {
    setButtonDisabled(
      form.dietPreferences.value && form.typeOfDiet.value.length === 0
    );
  }, [form]);

  return (
    <>
      <Heading3 text={t("diet-preferences?")} />
      <CheckBox
        placeholder={t("diet-preferences")}
        value={form.dietPreferences.value}
        onChange={(val: boolean) => setValue("dietPreferences", val)}
        name={"dietPreferences"}
      />

      {form.dietPreferences.value && (
        <TextInput
          placeholder={t("diet-preferences")}
          value={form.typeOfDiet.value}
          onChange={(val: string) => setValue("typeOfDiet", val)}
          name="typeOfDiet"
        />
      )}
      <ButtonNavigation
        buttonDisabled={buttonDisabled}
        step={step}
        currentStep={2}
      />
    </>
  );
};

export default Step2;
