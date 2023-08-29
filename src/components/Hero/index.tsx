import { useTranslation } from "next-i18next";
import Image from "next/image";

type Props = {
  imageUrl: string;
};

const Hero = ({ imageUrl }: Props) => {
  const { t } = useTranslation("common");

  return (
    <section className="w-full pb-[120%] lg:pb-[40%] relative">
      <div className="absolute w-full h-full">
        <Image
          alt="background"
          src={imageUrl}
          className="w-full object-fit"
          height={500}
          width={1000}
        />
        <div className="top-[50%] absolute translate-y-[-50%] w-full px-4 text-center">
          <h1 className="text-6xl pb-4">{t("julia-david")}</h1>
          <h2 className="text-2xl pb-4">{t("date")}</h2>
        </div>
      </div>
    </section>
  );
};

export default Hero;
