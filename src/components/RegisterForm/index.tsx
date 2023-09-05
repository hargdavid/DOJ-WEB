import { useEffect, useState } from "react";
import Button from "../Button";
import { useTranslation } from "next-i18next";
import TextInput from "./Input/TextInput";
import CheckBox from "./Input/Checkbox";
import RadioButton from "./Input/RadioButton";
import { isEmpty } from "@/helpers/isEmpty";
import { AttendingDays, RegisterForm } from "@/types/registerForm";
import { RegisterApi } from "@/api/form/register";

type Props = { setSuccess: (success: boolean) => void };

const defaultFormValue: RegisterForm = {
  name: { required: true, value: "" },
  dietPreferences: { required: false, value: false },
  attending: { required: true, value: AttendingDays.FRISUN },
};

const RegisterForm = ({ setSuccess }: Props) => {
  const { t } = useTranslation("common");
  const [registerForm, setRegisterForm] =
    useState<RegisterForm>(defaultFormValue);
  const [canSave, setCanSave] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const onSave = async (e: React.MouseEvent) => {
    e.preventDefault();

    setLoading(true);
    try {
      //await RegisterApi.postRegister(registerForm);

      setSuccess(true);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    let canSave = true;

    Object.values(registerForm).some((formValue) => {
      if (formValue.required && isEmpty(formValue.value)) {
        console.log("hit", formValue);
        canSave = false;
      }
    });

    setCanSave(canSave);
  }, [registerForm]);

  return (
    <>
      <form className="py-8 px-8 flex gap-6 flex-col max-w-2xl m-auto">
        <TextInput
          placeholder={t("name")}
          value={registerForm.name.value}
          onChange={(val: string) =>
            setRegisterForm({
              ...registerForm,
              name: { ...registerForm.name, value: val },
            })
          }
        />
        <CheckBox
          placeholder={t("diet-preferences")}
          value={registerForm.dietPreferences.value}
          name={"dietPreferences"}
          onChange={(val: boolean) =>
            setRegisterForm({
              ...registerForm,
              dietPreferences: { ...registerForm.dietPreferences, value: val },
            })
          }
        />
        <RadioButton
          id="attending"
          label={t("fri-sun")}
          value={registerForm.attending}
          onChange={() =>
            setRegisterForm({
              ...registerForm,
              attending: {
                ...registerForm.attending,
                value: AttendingDays.FRISUN,
              },
            })
          }
          defaultChecked
        />
        <RadioButton
          id="attending"
          label={t("sat-sun")}
          value={registerForm.attending}
          onChange={() =>
            setRegisterForm({
              ...registerForm,
              attending: {
                ...registerForm.attending,
                value: AttendingDays.SATSUN,
              },
            })
          }
        />
        <RadioButton
          id="attending"
          label={t("sat")}
          value={registerForm.attending}
          onChange={() =>
            setRegisterForm({
              ...registerForm,
              attending: {
                ...registerForm.attending,
                value: AttendingDays.SAT,
              },
            })
          }
        />

        <Button
          title={t("send")}
          onClick={(e: React.MouseEvent) => onSave(e)}
          disabled={!canSave}
        />
      </form>
      {loading && <>...Laddar</>}
    </>
  );
};

export default RegisterForm;
