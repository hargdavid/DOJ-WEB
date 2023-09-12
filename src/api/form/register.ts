import { RegisterForm, RegisterFormDto } from "@/types/registerForm";
import axios from "axios";

/* Move to globalsate */
const backendUrl =
  process.env.NEXT_PUBLIC_BACKEND_URL ?? "https://localhost:4003";

export class RegisterApi {
  public static postRegister = async (form: RegisterForm) => {
    try {
      const formDto = this.mapFormToDto(form);
      await axios.post(`${backendUrl}/register`, formDto);
    } catch (error) {
      throw error;
    }
  };

  public static getRegistered = async (): Promise<RegisterFormDto[]> => {
    try {
      const response = await axios.get(`${backendUrl}/register`);
      return response.data;
    } catch (error) {
      throw error;
    }
  };

  private static mapFormToDto = (form: RegisterForm): RegisterFormDto => ({
    name: form.name.value.trim(),
    email: form.email.value.trim(),
    attending: form.attending.value,
    dietPreferences: form.dietPreferences.value,
    typeOfDiet: form.typeOfDiet.value,
  });
}
