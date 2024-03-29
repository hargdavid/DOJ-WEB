import { Video } from "@/types/content/contentPage";
import { LegacyRef, useEffect, useRef } from "react";

type Props = {
  video: Video;
};

const Video = ({ video }: Props) => {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    setTimeout(() => {
      if (ref.current) {
        ref.current.play();
      }
    }, 50);
  }, []);

  return (
    <video
      ref={ref}
      className="absolute top-0 right-1/2 translate-x-1/2 h-full max-w-none md:w-full md:h-auto"
      loop
      muted
      playsInline
    >
      <source src={video.url} type="video/mp4" />
    </video>
  );
};

export default Video;
