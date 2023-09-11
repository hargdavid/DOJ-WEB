import ContentApi from "@/api/content/page";
import ContentProvider from "@/components/Content/ContentProvider";
import { ContentPage } from "@/types/content/contentPage";
import { useEffect, useState } from "react";

const Home = () => {
  const [content, setContent] = useState<ContentPage>();

  useEffect(() => {
    (async () => {
      setContent(await ContentApi.getStartPage());
    })();
  }, []);

  return <>{content && <ContentProvider contentPage={content} />}</>;
};

export default Home;
