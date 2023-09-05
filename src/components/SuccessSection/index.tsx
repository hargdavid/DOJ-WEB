import List from "../List";
import TextAndImage from "../TextAndImage";
import Section from "../Section";
import Image from "next/image";

type Props = {};

const SuccessSection = ({}: Props) => {
  return (
    <Section>
      <TextAndImage
        imageUrl="/assets/img/example.jpeg"
        alt="example"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        side="left"
      />
      <List
        elements={[
          <p key="1">Test</p>,
          <p key="2">Test</p>,
          <p key="3">Test</p>,
          <p key="4">Test</p>,
        ]}
      />
      <List
        elements={[
          <Image
            key="1"
            src="/assets/img/example.jpeg"
            alt="test"
            width={200}
            height={200}
            className="w-full"
          />,
          <Image
            key="2"
            src="/assets/img/example.jpeg"
            alt="test"
            width={200}
            height={200}
            className="w-full"
          />,
          <Image
            key="3"
            src="/assets/img/example.jpeg"
            alt="test"
            width={200}
            height={200}
            className="w-full"
          />,
        ]}
      />
    </Section>
  );
};

export default SuccessSection;
