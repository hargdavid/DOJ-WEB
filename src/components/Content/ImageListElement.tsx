import { ImageWithLink } from "@/types/content/contentPage";
import Link from "./Link";
import Image from "./Image";

type Props = { image: ImageWithLink };

const ImageListElement = ({ image }: Props) => {
  const ImageListBlock = () => {
    return (
      <>
        <Image url={image.url} alt={image.alt} />
        {image.title && (
          <>
            <div className="bg-black w-full h-full absolute top-0 opacity-30" />
            <div className="absolute bottom-0 text-left p-6">
              <p className="text-white uppercase text-lg bold">{image.title}</p>
              {image.description && (
                <p className="text-white text-sm">{image.description}</p>
              )}
            </div>
          </>
        )}
      </>
    );
  };

  return (
    <li
      className={`flex-auto overflow-hidden relative ${
        typeof image.link !== "undefined" ? "md:hover:scale-[1.01]}" : ""
      }`}
    >
      {typeof image.link !== "undefined" ? (
        <a href={image.url} target="_blank">
          <ImageListBlock />
        </a>
      ) : (
        <ImageListBlock />
      )}
    </li>
  );
};

export default ImageListElement;
