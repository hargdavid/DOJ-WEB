import ContentApi from "@/api/content/page";
import ContentPageProvider from "@/components/Content/ContentPageProvider";
import { ContentPage } from "@/types/content/contentPage";
import { useEffect, useState } from "react";

const NotFound = () => {
  const [content, setContent] = useState<ContentPage>();

  useEffect(() => {
    (async () => {
      setContent(await ContentApi.getErrorPage());
    })();
  }, []);

  return <>{content && <ContentPageProvider contentPage={content} />}</>;
};

export default NotFound;
