import ContentApi from "@/api/content/page";
import ContentPageProvider from "@/components/Content/ContentPageProvider";
import SkeletonFiller from "@/components/Content/SkeletonFiller";
import { ContentPage } from "@/types/content/contentPage";

interface Props {
  content: ContentPage;
}

const NotFound = ({ content }: Props) => {
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

export async function getStaticProps() {
  const content = await ContentApi.getErrorPage();

  return {
    props: {
      content,
    },
    revalidate: 10,
  };
}

export default NotFound;
