import Section from "../Section";
import Heading2 from "../Content/Heading2";
import Button from "../Button";
import { useRegisterFormState } from "@/hooks/RegisterProvider";

type Props = {};

const SuccessSection = ({}: Props) => {
  const { step } = useRegisterFormState();

  return (
    <Section>
      <Heading2 text="Tack för din anmälan" />
      <Button onClick={(e: React.MouseEvent) => step(1)}>Anmäl fler</Button>
    </Section>
  );
};

export default SuccessSection;
