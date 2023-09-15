import { mapContentPage } from "@/helpers/mappers/mapContentPage";
import { mapMetaData } from "@/helpers/mappers/mapMetaData";
import { mapNavigation } from "@/helpers/mappers/mapNavigation";
import { mapRegisterPage } from "@/helpers/mappers/mapRegisterPage";
import { ContentPageDTO, RegisterPageDto } from "@/types/content/contentPage";
import {
  MetaData,
  NavigationDto,
  NavigationItem,
} from "@/types/content/navigation";
import axios from "axios";

export default class ContentApi {
  private static contentUrl = `https://${process.env.NEXT_PUBLIC_CMS_ID}.api.sanity.io/v1/data/query/production?query=`;

  public static getNavigation = async (): Promise<{
    navigation: NavigationItem[];
    meta: MetaData;
  }> => {
    try {
      const query = encodeURIComponent("*[_type == 'navLinks']");
      const response = await axios.get(this.contentUrl + query);
      const links: NavigationDto[] = response.data.result[0].links;
      const meta: MetaData = mapMetaData(response.data.result[0].meta);
      return { navigation: mapNavigation(links), meta };
    } catch (error) {
      throw error;
    }
  };

  public static getStartPage = async () => {
    try {
      const query = encodeURIComponent("*[_type == 'startPage']");
      const response = await axios.get(this.contentUrl + query);

      const startPage: ContentPageDTO = response.data.result[0];

      if (typeof startPage === "undefined") {
        throw { message: "Couldn't find content", code: 404 };
      }

      return mapContentPage(startPage);
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
      const content = response.data.result[0] as ContentPageDTO;

      if (typeof content === "undefined") {
        throw { message: "Couldn't find content", code: 404 };
      }

      return mapContentPage(content);
    } catch (error) {
      throw error;
    }
  };

  public static getRegisterPage = async () => {
    try {
      const query = encodeURIComponent(`*[_type == 'registerPage']`);
      const response = await axios.get(this.contentUrl + query);
      const content = response.data.result[0] as RegisterPageDto;

      if (typeof content === "undefined") {
        throw { message: "Couldn't find content", code: 404 };
      }
      return mapRegisterPage(response.data.result[0]);
    } catch (error) {
      throw error;
    }
  };

  public static getErrorPage = async () => {
    try {
      const query = encodeURIComponent(
        `*[_type == 'contentPage'][path == '404']`
      );
      const response = await axios.get(this.contentUrl + query);
      const content = response.data.result[0] as ContentPageDTO;

      if (typeof content === "undefined") {
        throw { message: "Couldn't find content", code: 404 };
      }
      return mapContentPage(response.data.result[0]);
    } catch (error) {
      throw error;
    }
  };
}
