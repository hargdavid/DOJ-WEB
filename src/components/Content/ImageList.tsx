import { ImageWithLink } from "@/types/content/contentPage";
import ImageListElement from "./ImageListElement";

type Props = {
  images: ImageWithLink[];
};

const ImageList = ({ images }: Props) => {
  return (
    <ul className="flex gap-4 md:gap-2 flex-col md:flex-row h-auto md:w-[500px] py-10 flex-wrap">
      {images.map((image, key) => (
        <ImageListElement key={key} image={image} />
      ))}
    </ul>
  );
};

export default ImageList;
