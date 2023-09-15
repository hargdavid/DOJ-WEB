import { useEffect, useState } from "react";
import ContentApi from "@/api/content/page";
import { usePathname } from "next/navigation";
import { ContentPage } from "@/types/content/contentPage";
import ContentPageProvider from "@/components/Content/ContentPageProvider";
import { useRouter } from "next/router";

const ContentPage = () => {
  const [contentPage, setContentPage] = useState<ContentPage>(); //TODO change this
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    (async () => {
      if (pathname) {
        try {
          setContentPage(
            await ContentApi.getContentPage(pathname?.replace("/content/", ""))
          );
        } catch (error) {
          router.push("/404");
          return null;
        }
      }
    })();
  }, [pathname, router]);

  return (
    <>{contentPage && <ContentPageProvider contentPage={contentPage} />}</>
  );
};

export default ContentPage;
