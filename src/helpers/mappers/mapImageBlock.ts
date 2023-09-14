import {
  ContentBlockType,
  Image,
  ImageDto,
  Video,
} from "@/types/content/contentPage";
import { imageAssetToPath } from "../imageAssetToPath";

export const mapImageBlock = (imageDto: ImageDto): Image => ({
  alt: imageDto.alt ?? "",
  url: imageAssetToPath(imageDto?.asset?._ref) ?? "",
  type: ContentBlockType.Image,
});

export const mapVideoBlock = (videoDto: ImageDto): Video => ({
  alt: videoDto.alt ?? "",
  url: imageAssetToPath(videoDto?.asset?._ref) ?? "",
  type: ContentBlockType.Video,
});
