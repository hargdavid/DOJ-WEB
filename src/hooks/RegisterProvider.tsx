import { isEmpty } from "@/helpers/isEmpty";
import { AttendingDays, RegisterForm } from "@/types/registerForm";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

type RegisterFormState = {
  form: RegisterForm;
  setValue: (name: keyof RegisterForm, value: any) => void;
  canSave: boolean;
  loading: boolean;
  currentStep: number;
  setCurrentStep: (no: number) => void;
  step: (e: React.MouseEvent, no: number) => void;
};

const defaultForm: RegisterForm = {
  name: { required: true, value: "" },
  dietPreferences: { required: false, value: false },
  typeOfDiet: { required: false, value: "" },
  attending: { required: true, value: AttendingDays.FRISUN },
  email: { required: true, value: "" },
};

const defaultFormState: RegisterFormState = {
  form: defaultForm,
  setValue: () => {},
  canSave: false,
  loading: false,
  currentStep: 1,
  setCurrentStep: () => {},
  step: () => {},
};

const RegisterFormContext = createContext<RegisterFormState>(defaultFormState);

export const RegisterFormProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [registerForm, setRegisterForm] = useState<RegisterForm>(defaultForm);
  const [canSave, setCanSave] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [currentStep, setCurrentStep] = useState<number>(1);
  const { form } = useMemo(() => ({ form: registerForm }), [registerForm]);

  const step = (e: React.MouseEvent, no: number) => {
    e.preventDefault();
    setCurrentStep(no);
  };

  const setValue = useCallback(
    (name: keyof RegisterForm, value: any) => {
      setRegisterForm({
        ...registerForm,
        [name]: {
          ...registerForm[name],
          value,
        },
      });
    },
    [registerForm, setRegisterForm]
  );

  const onSave = async (e: React.MouseEvent) => {
    e.preventDefault();

    setLoading(true);
    try {
      //await RegisterApi.postRegister(registerForm);
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
        canSave = false;
      }
    });

    setCanSave(canSave);
  }, [registerForm]);

  return (
    <RegisterFormContext.Provider
      value={{
        form,
        setValue,
        loading,
        canSave,
        currentStep,
        setCurrentStep,
        step,
      }}
    >
      {children}
    </RegisterFormContext.Provider>
  );
};

export const useRegisterFormState = () => {
  const {
    form,
    setValue,
    loading,
    canSave,
    currentStep,
    setCurrentStep,
    step,
  } = useContext(RegisterFormContext);

  return {
    form,
    setValue,
    loading,
    canSave,
    currentStep,
    setCurrentStep,
    step,
  };
};
