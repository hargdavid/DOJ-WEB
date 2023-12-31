import ContentApi from "@/api/content/page";
import ContentPageProvider from "@/components/Content/ContentPageProvider";
import { useGlobalState } from "@/hooks/GlobalProvider";
import { ContentPage } from "@/types/content/contentPage";
import { useEffect, useState } from "react";

const Home = () => {
  const [content, setContent] = useState<ContentPage>();
  const { isLoggedIn } = useGlobalState();

  console.log("isLoggedIncontet", isLoggedIn);

  useEffect(() => {
    (async () => {
      setContent(await ContentApi.getStartPage());
    })();
  }, []);

  return <>{content && <ContentPageProvider contentPage={content} />}</>;
};

export default Home;
