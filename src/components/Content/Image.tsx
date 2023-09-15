import Image from "next/image";

type Props = {
  url: string;
  alt: string;
};

const CustomImage = ({ url, alt }: Props) => {
  return (
    <Image
      src={url}
      alt={alt}
      className="w-full h-auto "
      width={500}
      height={300}
    />
  );
};

export default CustomImage;
