import { ContentBlockType, Image, ImageDto } from "@/types/content/contentPage";
import { imageAssetToPath } from "../imageAssetToPath";

export const mapImageBlock = (imageDto: ImageDto): Image => ({
  alt: imageDto.alt ?? "",
  url: imageAssetToPath(imageDto?.asset?._ref) ?? "",
  type: ContentBlockType.Image,
});
