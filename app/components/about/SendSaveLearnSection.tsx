import { Button } from '@/components/ui/button';
import Image from 'next/image';
import React from 'react';

const SendSaveLearnSection = () => {
  return (
    <div className='bg-primary relative z-1 rounded-b-3xl md:rounded-3xl justify-center sm:w-[calc(100%+2rem)] md:w-full -mx-4 h-full py-6 px-4 flex-col flex xl:flex-row items-center md:items-start md:py-20 md:px-12 space-y-6'>
      <div className='flex flex-col space-y-6 md:self-center'>
        <p className='text-3xl md:text-4xl text-center md:text-start font-bold text-primary-foreground'>
          Send It.
          <br className='md:hidden' />
          <span className='md:ml-2'>Save It.</span>
          <br />
          Earn It.
          <br className='md:hidden' />
          <span className='md:ml-2'>Learn It.</span>
        </p>

        <p className='text-primary-foreground text-sm text-center font-light md:text-start md:text-[22px] md:font-extralight'>
          Experience convenience and knowledge with our app. Simplify your
          financial life and boost your money know-how.
        </p>
        <Button className='bg-primary-foreground rounded-xl self-center md:self-start px-6 py-2 text-black w-fit text-lg h-auto'>
          Get Mun-e
        </Button>
      </div>
      <Image
        alt='play-button'
        src='/images/about/save-it-image.svg'
        width={643}
        height={504}
        className='w-full md:h-full xl:h-[643px] self-center  '
      />
    </div>
  );
};

export default SendSaveLearnSection;
