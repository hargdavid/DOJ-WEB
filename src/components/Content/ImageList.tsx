import { Image as ImageType, ImageWithLink } from "@/types/content/contentPage";
import Image from "./Image";
import Link from "./Link";

type Props = {
  images: ImageWithLink[];
};

const ImageList = ({ images }: Props) => {
  return (
    <ul className="flex gap-2 flex-col md:flex-row">
      {images.map((image, key) => (
        <li key={key} className="flex-auto">
          {typeof image.link !== "undefined" ? (
            <Link link={image.link}>
              <Image url={image.url} alt={image.alt} />
            </Link>
          ) : (
            <Image url={image.url} alt={image.alt} />
          )}
        </li>
      ))}
    </ul>
  );
};

export default ImageList;
