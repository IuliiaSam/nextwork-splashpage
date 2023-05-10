import React, { useEffect, useRef } from "react";

const VideoPlayer: React.FC = () => {
  const videoRef = useRef<null | HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (videoRef.current) {
            if (entry.isIntersecting) {
              videoRef.current.currentTime = 0;
              videoRef.current.play();
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
          observer.unobserve(videoRef.current);
        }
      };
    }
  }, []);

  return (
    <div>
      <video
        ref={videoRef}
        width={1200}
        height={1200}
        src="/nextwork-video.mov"
      ></video>
    </div>
  );
};

export default VideoPlayer;
