import { useEffect, useState } from "react";
import ContentApi from "@/api/content/page";
import { usePathname } from "next/navigation";
import { ContentPage } from "@/types/content/contentPage";
import ContentProvider from "@/components/Content/ContentProvider";

const ContentPage = () => {
  const [contentPage, setContentPage] = useState<ContentPage>(); //TODO change this
  const pathname = usePathname();

  console.log(contentPage);

  useEffect(() => {
    (async () => {
      if (pathname) {
        setContentPage(
          await ContentApi.getContentPage(pathname?.replace("/content/", ""))
        );
      }
    })();
  }, [pathname]);

  return <>{contentPage && <ContentProvider contentPage={contentPage} />}</>;
};

export default ContentPage;
