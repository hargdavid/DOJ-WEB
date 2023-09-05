import { FormVal } from "./form";

export enum AttendingDays {
  FRISUN,
  SATSUN,
  SAT,
}

export type RegisterForm = {
  name: FormVal<string>;
  dietPreferences: FormVal<boolean>;
  attending: FormVal<AttendingDays>;
};

export type RegisterFormDto = {
  name: string;
  dietPreferences: boolean;
  attending: AttendingDays;
};
