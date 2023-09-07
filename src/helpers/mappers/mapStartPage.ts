import { StartPage, StartPageDto } from "@/types/content/startPage";

export const mapStartPage = (startPageDto: StartPageDto): StartPage => ({
  title: startPageDto.title,
  subTitle: startPageDto.subtitle,
});
