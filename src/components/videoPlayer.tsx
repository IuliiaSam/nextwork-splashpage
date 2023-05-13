import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { videoPlayerProps } from "../../types/instructions";
const VideoPlayer: React.FC<videoPlayerProps> = ({ videoUrl, imageUrl }) => {
  const videoRef = useRef<null | HTMLVideoElement>(null);
  const [videoError, setVideoError] = React.useState(false);

  useEffect(() => {
    if (videoRef.current) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (videoRef.current) {
            if (entry.isIntersecting) {
              videoRef.current.currentTime = 0;
              // videoRef.current.play();
              videoRef.current.loop = true;
            } else {
              videoRef.current.loop = false;
              videoRef.current.pause();
            }
          }
        });
      });

      observer.observe(videoRef.current);

      return () => {
        if (videoRef.current) {
          observer.disconnect();
        }
      };
    }
  }, []);

  const handleVideoError = (): void => {
    console.log("error");
    setVideoError(true);
  };

  return (
    <div>
      {videoError ? (
        <Image
          className="rounded-xl"
          src={imageUrl}
          alt="video error image"
          width={200}
          height={500}
        />
      ) : (
        <video
          className="md:rounded-xl shadow-lg"
          src={videoUrl}
          ref={videoRef}
          width={1200}
          height={1200}
          muted={true}
          onError={handleVideoError}
          controls={true}
        ></video>
      )}
    </div>
  );
};

export default VideoPlayer;
