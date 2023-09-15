import { RegisterPage, RegisterPageDto } from "@/types/content/contentPage";
import {
  mapContentBlock,
  mapHero,
  mapImageWithLinkBlock,
} from "./mapContentPage";

export const mapRegisterPage = (
  registerPageDto: RegisterPageDto
): RegisterPage => {
  return {
    content: registerPageDto.content.map(mapContentBlock),
    path: registerPageDto.path,
    images: registerPageDto.images
      ? registerPageDto.images.map(mapImageWithLinkBlock)
      : undefined,
    hero: mapHero(registerPageDto.hero),
    success: {
      images:
        registerPageDto.success.images?.map(mapImageWithLinkBlock) ?? undefined,
      content:
        registerPageDto.success.content?.map(mapContentBlock) ?? undefined,
    },
  };
};
