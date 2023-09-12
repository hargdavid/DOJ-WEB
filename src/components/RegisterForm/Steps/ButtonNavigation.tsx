import Button from "@/components/Button";
import { useTranslation } from "next-i18next";

type Props = {
  step: (step: number) => void;
  currentStep: number;
  buttonDisabled?: boolean;
  submit?: () => void;
};

const ButtonNavigation = ({
  step,
  currentStep,
  buttonDisabled,
  submit,
}: Props) => {
  const { t } = useTranslation("common");
  const onClick = (e: React.MouseEvent) => {
    e.preventDefault();
    submit ? submit() : step(currentStep + 1);
  };

  return (
    <div className="flex justify-between gap-3">
      {currentStep > 1 && (
        <Button
          outlined
          onClick={(e: React.MouseEvent) => {
            e.preventDefault();
            step(currentStep - 1);
          }}
        >
          {t("back")}
        </Button>
      )}
      <Button onClick={onClick} disabled={buttonDisabled}>
        {currentStep === 3 ? t("send") : t("next")}
      </Button>
    </div>
  );
};

export default ButtonNavigation;
