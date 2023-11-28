import { useEffect, useState } from "react";
import ContentApi from "@/api/content/page";
import { usePathname } from "next/navigation";
import { ContentPage } from "@/types/content/contentPage";
import ContentPageProvider from "@/components/Content/ContentPageProvider";
import { useRouter } from "next/router";
import SkeletonFiller from "@/components/Content/SkeletonFiller";

interface Props {
  content: ContentPage;
}

interface PathProps {
  params: { content: string };
}

const ContentPage = ({ content }: Props) => {
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

export async function getStaticProps({ params }: PathProps) {
  const content = await ContentApi.getContentPage(params.content);

  return {
    props: {
      content,
    },
    revalidate: 10,
  };
}

export async function getStaticPaths() {
  // Call an external API endpoint to get posts
  const posts = [
    {
      id: "when-where",
    },
    {
      id: "event-details",
    },
    {
      id: "dresscode",
    },
    {
      id: "faq",
    },
    {
      id: "images",
    },
  ];
  // Get the paths we want to pre-render based on posts
  const paths = posts.map((post) => ({
    params: { content: post.id },
  }));

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false };
}

export default ContentPage;
