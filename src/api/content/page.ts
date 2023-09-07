import { mapContentPage } from "@/helpers/mappers/mapContentPage";
import { mapNavigation } from "@/helpers/mappers/mapNavigation";
import { mapStartPage } from "@/helpers/mappers/mapStartPage";
import { NavigationDto } from "@/types/content/navigation";
import { StartPageDto } from "@/types/content/startPage";
import axios from "axios";

export default class ContentApi {
  private static contentUrl = `https://${process.env.NEXT_PUBLIC_CMS_ID}.api.sanity.io/v1/data/query/production?query=`;

  public static getNavigation = async () => {
    try {
      const query = encodeURIComponent("*[_type == 'navLinks']");
      const response = await axios.get(this.contentUrl + query);
      const links: NavigationDto[] = response.data.result[0].links;
      return mapNavigation(links);
    } catch (error) {
      throw error;
    }
  };

  public static getStartPage = async () => {
    try {
      const query = encodeURIComponent("*[_type == 'startPage']");
      const response = await axios.get(this.contentUrl + query);
      const startPage: StartPageDto = response.data.result[0];
      return mapStartPage(startPage);
    } catch (error) {
      throw error;
    }
  };

  public static getContentPage = async (pathname: string) => {
    try {
      const query = encodeURIComponent(
        `*[_type == 'contentPage'][path == '${pathname}']`
      );
      const response = await axios.get(this.contentUrl + query);
      return mapContentPage(response.data.result[0]);
    } catch (error) {
      throw error;
    }
  };
}
