import Image from "next/image";
import LinkButton from "../LinkButton";
import Title from "../Title";

type Props = {
  imageUrl: string;
  title: string;
  subTitle?: string;
  buttonText?: string;
  buttonLink?: string;
};

const Hero = ({ imageUrl, title, subTitle, buttonText, buttonLink }: Props) => {
  return (
    <section className="w-full pb-[120%] md:pb-[40%] relative overflow-hidden">
      <div className="absolute w-full h-full">
        <Image
          alt="background"
          src={imageUrl}
          className="max-w-none h-full relative md:h-auto md:w-full"
          height={500}
          width={1000}
        />
        <div className="w-full object-fit bg-black bg-opacity-10 h-full absolute top-0" />
        <div className="top-[50%] absolute translate-y-[-50%] w-full px-8 text-center">
          {subTitle && <h2 className="text-2xl pb-4">{subTitle}</h2>}
          <Title title={title} />
          {buttonText && buttonLink && (
            <LinkButton title={buttonText} href={buttonLink} />
          )}
        </div>
      </div>
    </section>
  );
};

export default Hero;
