import ContentApi from "@/api/content/page";
import ContentPageProvider from "@/components/Content/ContentPageProvider";
import SkeletonFiller from "@/components/Content/SkeletonFiller";
import { ContentPage } from "@/types/content/contentPage";
import { useEffect, useState } from "react";

const Home = () => {
  const [content, setContent] = useState<ContentPage>();

  useEffect(() => {
    (async () => {
      setContent(await ContentApi.getStartPage());
    })();
  }, []);

  return (
    <>
      {content ? (
        <ContentPageProvider contentPage={content} />
      ) : (
        <SkeletonFiller />
      )}
    </>
  );
};

export default Home;
