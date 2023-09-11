import Image from "next/image";
import LinkButton from "../LinkButton";
import Title from "../Content/Title";
import { LinkButton as LinkButtonType } from "@/types/content/linkButton";

type Props = {
  imageUrl: string;
  title: string;
  alt: string;
  subTitle?: string;
  button?: LinkButtonType;
};

const Hero = ({ imageUrl, title, subTitle, button, alt }: Props) => {
  return (
    <section className="w-full pb-[120%] md:pb-[40%] relative overflow-hidden">
      <div className="absolute w-full h-full">
        <Image
          alt={alt}
          src={imageUrl}
          className="max-w-none h-full relative md:h-auto md:w-full"
          height={500}
          width={1000}
        />
        <div className="w-full object-fit bg-black bg-opacity-10 h-full absolute top-0" />
        <div className="top-[50%] absolute translate-y-[-50%] w-full px-8 text-center flex flex-col gap-2 items-center">
          <Title title={title} />
          {subTitle && <h2 className="text-2xl pb-4">{subTitle}</h2>}
          {button && <LinkButton title={button.title} href={button.link} />}
        </div>
      </div>
    </section>
  );
};

export default Hero;
