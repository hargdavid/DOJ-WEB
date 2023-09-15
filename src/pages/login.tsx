import LoginForm from "@/components/LoginForm";
import { useState } from "react";

type Props = {};

const Login = ({}: Props) => {
  const [test, setTest] = useState<boolean>(false);

  return <LoginForm />;
};

export default Login;
