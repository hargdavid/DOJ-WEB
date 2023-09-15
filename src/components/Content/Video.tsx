import { Video } from "@/types/content/contentPage";
import { useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";

type Props = {
  video: Video;
};

const Video = ({ video }: Props) => {
  return (
    <video
      className="absolute top-0 right-1/2 translate-x-1/2 h-full max-w-none md:w-full md:h-auto"
      autoPlay
      loop
      muted
    >
      <source src={video.url} type="video/mp4" />
    </video>
  );
};

export default Video;
