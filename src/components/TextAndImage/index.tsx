import Image from "next/image";

type Props = {
  text: string;
  imageUrl: string;
  alt: string;
  side: "left" | "right";
};

const TextAndImage = ({ text, imageUrl, alt, side }: Props) => {
  return (
    <article className="flex gap-5 flex-col md:flex-row">
      <Image
        src={imageUrl}
        alt={alt}
        className="w-full md:w-1/2 h-auto"
        width={500}
        height={300}
      />
      <p>{text}</p>
    </article>
  );
};

export default TextAndImage;
