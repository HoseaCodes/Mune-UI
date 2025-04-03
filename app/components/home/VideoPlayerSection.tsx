'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Image from 'next/image';
import {
  FaApple,
  FaGooglePlay,
  FaPause,
  FaPhoneAlt,
  FaPlay,
} from 'react-icons/fa';
import { useState } from 'react';
import VideoPlayer from './HomeVideoPlayer';
import { cn } from '@/lib/utils';

const TitleSection = () => (
  <div className='font-bold text-2xl'>
    <p className='text-primary-foreground sm:text-4xl xl:text-5xl'>
      Easy Payments.
    </p>
    <p className='text-primary-foreground sm:text-4xl xl:text-5xl'>
      Make Mun-e Moves.
    </p>
  </div>
);

const PhoneNumberInput = () => (
  <div
    className={cn('relative w-[250px] self-center xl:w-[412px] xl:self-start')}
  >
    <div className='flex flex-row items-center bg-white py-2 px-3 rounded-full xl:rounded-2xl xl:bg-primary-foreground/20 xl:border-1 xl:border-border'>
      <div className='bg-primary w-5 h-5 rounded-full flex items-center justify-center xl:hidden'>
        <FaPhoneAlt className='w-2 h-2 text-white' />
      </div>
      <Input
        type='text'
        placeholder='Enter your mobile number'
        className='border-none text-black text-sm font-light bg-transparent xl:text-primary-foreground xl:placeholder-primary-foreground'
      />
      <Button className='hidden xl:flex bg-secondary py-3 px-6'>
        Get Mun-e
      </Button>
    </div>
  </div>
);

const AppStoreButtons = () => (
  <div className='hidden flex-row space-x-4 xl:flex'>
    <Button className='h-11 rounded-lg flex items-center justify-center gap-2 bg-primary-foreground'>
      <FaGooglePlay className='h-5 w-5 text-black' />
      <div className='flex flex-col leading-none text-left text-xs font-medium text-black'>
        <span>GET IT ON</span>
        <span className='font-bold'>Google Play</span>
      </div>
    </Button>
    <Button className='h-11 rounded-lg flex items-center justify-center gap-2 bg-primary-foreground'>
      <FaApple className='h-5 w-5 text-black' />
      <div className='flex flex-col leading-none text-left text-xs font-medium text-black'>
        <span className='text-xs'>Download on the</span>
        <span className='font-bold flex justify-center'>App Store</span>
      </div>
    </Button>
  </div>
);

const VideoPlayerSection = () => {
  const [hasStartedVideo, setHasStartedVideo] = useState(false);

  return (
    <div className='w-full h-[476px] xl:h-[700px] rounded-3xl relative overflow-hidden'>
      <VideoPlayer
        src='/videos/home/prototypeVideo.mp4'
        hasStarted={hasStartedVideo}
      />

      {/* Desktop View */}
      <div className='hidden absolute inset-0 px-8 py-8 flex-col bg-[#00170E]/60 xl:flex xl:h-[700px] xl:space-y-8'>
        <div className='flex flex-col xl:items-start xl:justify-center xl:h-full xl:space-y-8'>
          <TitleSection />
          <PhoneNumberInput />
          <AppStoreButtons />
        </div>

        <Button
          className='hidden w-fit bg-primary-foreground/20 border-1 border-border py-3 px-6 self-end mt-auto xl:flex xl:order-4'
          onClick={() => setHasStartedVideo((prev) => !prev)}
        >
          {hasStartedVideo ? <FaPause /> : <FaPlay />}
          Watch the Mun-e story
        </Button>
      </div>

      {/* Mobile View */}
      <div className='absolute inset-0 px-4 py-8 flex flex-col bg-[#00170E]/60 xl:hidden'>
        <TitleSection />
        {!hasStartedVideo && (
          <Button
            className='self-center mt-auto bg-transparent xl:hidden'
            onClick={() => setHasStartedVideo((prev) => !prev)}
          >
            <Image
              alt='play-button'
              src='/images/home/video-play-button.svg'
              width={64}
              height={44}
              className='w-16 h-11'
            />
          </Button>
        )}
        <div className='mt-auto self-center'>
          <PhoneNumberInput />
        </div>
      </div>
    </div>
  );
};

export default VideoPlayerSection;
