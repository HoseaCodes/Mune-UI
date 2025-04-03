'use client';

import { useRef, useState } from 'react';
import { IoPauseCircleOutline, IoPlayCircleOutline } from 'react-icons/io5';

type SubscribeVideoPlayerProps = {
  src: string;
  className?: string;
};

const SubscribeVideoPlayer = ({
  src,
  className,
}: SubscribeVideoPlayerProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  // Toggle Play/Pause
  const togglePlay = () => {
    if (videoRef.current?.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current?.pause();
      setIsPlaying(false);
    }
  };

  // Update progress bar
  const handleTimeUpdate = () => {
    if (!isDragging && videoRef.current) {
      const progress =
        (videoRef.current.currentTime / videoRef.current.duration) * 100;
      setProgress(progress);
    }
  };

  // Seek when user clicks on the progress bar
  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!videoRef.current || !progressRef.current) return;

    const rect = progressRef.current.getBoundingClientRect();
    const offsetX = e.clientX - rect.left;
    const newTime = (offsetX / rect.width) * videoRef.current.duration;

    videoRef.current.currentTime = newTime;
    setProgress((newTime / videoRef.current.duration) * 100);
  };

  // Handle dragging of progress handle
  const handleDragStart = () => setIsDragging(true);
  const handleDragMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging || !videoRef.current || !progressRef.current) return;

    const rect = progressRef.current.getBoundingClientRect();
    const offsetX = e.clientX - rect.left;
    const newProgress = Math.max(
      0,
      Math.min((offsetX / rect.width) * 100, 100)
    );

    setProgress(newProgress);
    videoRef.current.currentTime =
      (newProgress / 100) * videoRef.current.duration;
  };
  const handleDragEnd = () => setIsDragging(false);

  return (
    <div
      className={`relative border-1 border-border rounded-2xl ${className}`} // Apply className correctly
    >
      {/* Video Element */}
      <video
        ref={videoRef}
        loop
        muted
        playsInline
        onTimeUpdate={handleTimeUpdate}
        className='w-full h-full object-cover rounded-2xl' // Ensure it fills the parent
      >
        <source src={src} type='video/mp4' />
        Your browser does not support the video tag.
      </video>

      {/* Controls */}
      <div className='absolute bottom-2 left-2 right-2 flex items-center gap-2 px-4 py-2 bg-transparent backdrop-none rounded-lg'>
        <button onClick={togglePlay} className='text-white'>
          {isPlaying ? (
            <IoPauseCircleOutline size={20} />
          ) : (
            <IoPlayCircleOutline size={20} />
          )}
        </button>

        {/* Progress Bar */}
        <div
          ref={progressRef}
          className='relative flex-1 bg-white h-[2px] rounded-full cursor-pointer'
          onClick={handleSeek}
          onMouseMove={handleDragMove}
          onMouseUp={handleDragEnd}
          onMouseLeave={handleDragEnd}
        >
          <div
            className='bg-white h-full transition-all duration-300 rounded-full'
            style={{ width: `${progress}%` }}
          />
          <div
            className='absolute -top-[3px] w-2 h-2 bg-white rounded-full shadow-md border cursor-pointer'
            style={{ left: `calc(${progress}% - 4px)` }}
            onMouseDown={handleDragStart}
          />
        </div>
      </div>
    </div>
  );
};

export default SubscribeVideoPlayer;
