import { useTranslation } from "next-i18next";
import TextInput from "../Input/TextInput";
import { useRegisterFormState } from "@/hooks/RegisterProvider";
import { memo, useEffect, useState } from "react";
import ButtonNavigation from "./ButtonNavigation";
import Heading3 from "@/components/Content/Heading3";

type Props = {};

const Step1 = ({}: Props) => {
  const { t } = useTranslation("common");
  const [buttonDisabled, setButtonDisabled] = useState<boolean>(true);
  const { form, setValue, step } = useRegisterFormState();
  const [emailError, setEmailError] = useState<boolean>(false);

  useEffect(() => {
    const emailRegexp = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    const emailVerified = emailRegexp.test(form.email.value);

    setEmailError(form.email.value.length !== 0 && !emailVerified);

    setButtonDisabled(
      form.name.value.length === 0 ||
        form.email.value.length === 0 ||
        !emailVerified
    );
  }, [form]);

  return (
    <>
      <Heading3 text={t("basic-info")} />
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
        error={emailError}
      />
      <ButtonNavigation
        buttonDisabled={buttonDisabled}
        step={step}
        currentStep={1}
      />
    </>
  );
};

export default memo(Step1);
