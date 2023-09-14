import Image from "next/image";
import LinkButton from "../LinkButton";
import Title from "../Content/Title";
import { Hero } from "@/types/content/contentPage";

type Props = {
  hero: Hero;
};

const Hero = ({ hero }: Props) => {
  const {
    heroImage: { alt, url },
    title,
    subtitle,
    button,
  } = hero;
  return (
    <section className="w-full pb-[120%] md:pb-[40%] relative overflow-hidden">
      <div className="absolute w-full h-full">
        <Image
          alt={alt}
          src={url}
          className="max-w-none h-full relative md:h-auto md:w-full"
          height={500}
          width={1000}
        />
        <div className="w-full object-fit bg-black bg-opacity-10 h-full absolute top-0" />
        <div className="top-[50%] absolute translate-y-[-50%] w-full px-8 text-center flex flex-col gap-2 items-center">
          <Title title={title} />
          {subtitle && <h2 className="text-2xl pb-4">{subtitle}</h2>}
          {button && <LinkButton title={button.title} href={button.link} />}
        </div>
      </div>
    </section>
  );
};

export default Hero;
