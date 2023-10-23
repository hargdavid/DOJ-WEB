import Image from "next/image";
import LinkButton from "./LinkButton";
import Title from "./Content/Title";
import { Hero } from "@/types/content/contentPage";
import Video from "./Content/Video";
import { useGlobalState } from "@/hooks/GlobalProvider";

type Props = {
  hero: Hero;
};

const Hero = ({ hero }: Props) => {
  const { heroImage, mobileImage, title, subtitle, button, video } = hero;

  const { isDesktop } = useGlobalState();

  const url = !isDesktop && mobileImage?.url ? mobileImage?.url : heroImage.url;
  const alt = !isDesktop && mobileImage?.alt ? mobileImage?.alt : heroImage.alt;

  return (
    <section className="w-full pb-[120%] md:pb-[40%] relative overflow-hidden">
      <div className="absolute w-full h-full">
        <Image
          alt={alt}
          src={url}
          className="max-w-none absolute h-full w-auto md:h-auto md:w-full md:top-0 right-1/2 translate-x-1/2"
          height={500}
          width={1000}
        />
        {video && <Video video={video} />}
        <div className="w-full object-fit bg-black bg-opacity-10 h-full absolute top-0" />
        <div className="top-[50%] absolute translate-y-[-50%] w-full px-8 text-center flex flex-col gap-2 items-center">
          <Title title={title} className="text-white" />
          {subtitle && <h2 className="text-2xl pb-4 text-white">{subtitle}</h2>}
          {button && <LinkButton title={button.title} href={button.link} />}
        </div>
      </div>
    </section>
  );
};

export default Hero;
