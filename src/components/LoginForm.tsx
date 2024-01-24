import { useEffect, useState } from "react";
import Button from "./Button";
import TextInput from "./RegisterForm/Input/TextInput";
import Section from "./Section/Section";
import { useGlobalState } from "@/hooks/GlobalProvider";
import { useRouter } from "next/router";

type Props = {};

export type LoginFormType = {
  name: string;
  password: string;
};

const LoginForm = ({}: Props) => {
  const [loginForm, setLoginForm] = useState<LoginFormType>({
    name: "",
    password: "",
  });
  const { login } = useGlobalState();
  const [canSave, setCanSave] = useState<boolean>(false);
  const router = useRouter();

  const onChange = (val: string, name: keyof LoginFormType) => {
    setLoginForm({
      ...loginForm,
      [name]: val,
    });
  };

  const onLogin = async (e: React.MouseEvent) => {
    e.preventDefault();
    try {
      await login(loginForm);
      router.push("/admin", undefined, { shallow: true });
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    setCanSave(loginForm.name.length !== 0 && loginForm.password.length !== 0);
  }, [loginForm]);

  return (
    <>
      <div className="pt-44"></div>
      <Section>
        <form className="flex flex-col gap-6 p-6">
          <TextInput
            placeholder="Namn"
            value={loginForm.name}
            onChange={(val: string) => onChange(val, "name")}
            name="name"
          />
          <TextInput
            placeholder="Lösenord"
            value={loginForm.password}
            onChange={(val: string) => onChange(val, "password")}
            name="password"
            type="password"
          />
          <Button onClick={onLogin} disabled={!canSave}>
            Logga in
          </Button>
        </form>
      </Section>
    </>
  );
};

export default LoginForm;
