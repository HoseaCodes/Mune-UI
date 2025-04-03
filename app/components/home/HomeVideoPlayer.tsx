'use client';

import { useRef, useEffect } from 'react';

type VideoPlayerProps = {
  src: string;
  className?: string;
  hasStarted: boolean; // external control
};

const VideoPlayer = ({ src, className, hasStarted }: VideoPlayerProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (hasStarted) {
      videoRef.current?.play();
    } else {
      videoRef.current?.pause();
    }
  }, [hasStarted]);

  return (
    <div className={`relative w-full h-full ${className}`}>
      <video
        loop
        muted
        playsInline
        ref={videoRef}
        width='100%'
        height='100%'
        className='w-full h-full object-cover object-[75%_center]'
      >
        <source src={src} type='video/mp4' />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoPlayer;
