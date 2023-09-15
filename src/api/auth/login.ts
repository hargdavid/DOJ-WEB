import { LoginFormType } from "@/components/LoginForm";
import { RegisterForm, RegisterFormDto } from "@/types/registerForm";
import axios from "axios";

/* Move to globalsate */
const backendUrl =
  process.env.NEXT_PUBLIC_BACKEND_URL ?? "https://localhost:4003";

export class LoginApi {
  public static postLogin = async (form: LoginFormType) => {
    try {
      await axios.post(`${backendUrl}/auth/login`, form);
    } catch (error) {
      throw error;
    }
  };
}
