import { FormVal } from "./form";

export enum AttendingDays {
  FRISUN,
  SATSUN,
  SAT,
}

export type RegisterForm = {
  name: FormVal<string>;
  email: FormVal<string>;
  dietPreferences: FormVal<boolean>;
  attending: FormVal<AttendingDays>;
  typeOfDiet: FormVal<string>;
};

export type RegisterFormDto = {
  name: string;
  email: string;
  dietPreferences: boolean;
  attending: AttendingDays;
  typeOfDiet: string;
};
