import { useTranslation } from "next-i18next";
import TextInput from "../Input/TextInput";
import Button from "@/components/Button";
import { useRegisterFormState } from "@/hooks/RegisterProvider";
import { memo, useCallback, useMemo } from "react";
import { RegisterForm } from "@/types/registerForm";

type Props = {};

const Step1 = ({}: Props) => {
  const { t } = useTranslation();
  const { form, setValue, step } = useRegisterFormState();

  return (
    <>
      <TextInput
        placeholder={t("name")}
        value={form.name.value}
        onChange={(val: string) => setValue("name", val)}
        name="name"
      />
      <TextInput
        placeholder={t("email")}
        value={form.email.value}
        onChange={(val: string) => setValue("email", val)}
        name="email"
      />
      {/* TOOD cahnge */}
      <Button onClick={(e: React.MouseEvent) => step(e, 2)}>Nästa</Button>
    </>
  );
};

export default memo(Step1);
