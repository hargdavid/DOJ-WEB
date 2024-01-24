import { useTranslation } from "next-i18next";
import { useRegisterFormState } from "@/hooks/RegisterProvider";
import RadioButton from "../Input/RadioButton";
import { AttendingDays } from "@/types/registerForm";
import ButtonNavigation from "./ButtonNavigation";
import Heading3 from "@/components/Content/Heading3";
import { useEffect, useRef } from "react";

type Props = {};

const Step3 = ({}: Props) => {
  const { t } = useTranslation("common");
  const { form, setValue, step, onSave } = useRegisterFormState();
  const myRef = useRef<HTMLSpanElement>(null);

  const executeScroll = () => {
    myRef?.current?.scrollTo({
      behavior: "smooth",
      top: myRef.current?.getBoundingClientRect().top + 100,
    });
  };

  useEffect(() => {
    executeScroll();
  }, []);

  return (
    <>
      <span ref={myRef} />
      <Heading3 text={t("staying-for")} id="step-3" />
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
