import { useTranslation } from "next-i18next";
import CheckBox from "../Input/Checkbox";
import { useRegisterFormState } from "@/hooks/RegisterProvider";
import Button from "@/components/Button";
import TextInput from "../Input/TextInput";

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
      <Button outlined onClick={(e: React.MouseEvent) => step(e, 1)}>
        Bakåt
      </Button>
      <Button onClick={(e: React.MouseEvent) => step(e, 3)}>Nästa</Button>
    </>
  );
};

export default Step2;
