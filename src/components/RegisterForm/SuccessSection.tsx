import Section from "../Section/Section";
import Heading2 from "../Content/Heading2";
import Button from "../Button";
import { useRegisterFormState } from "@/hooks/RegisterProvider";
import ConfettiExplosion from "react-confetti-explosion";

type Props = {};

const SuccessSection = ({}: Props) => {
  const { step } = useRegisterFormState();

  return (
    <Section>
      <div className="w-full flex items-center">
        <ConfettiExplosion />
      </div>
      <Heading2 text="Tack för din anmälan" />
      <Button onClick={(e: React.MouseEvent) => step(1)}>Anmäl fler</Button>
    </Section>
  );
};

export default SuccessSection;
