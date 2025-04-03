import { Button } from '@/components/ui/button';
import Image from 'next/image';
import React from 'react';

const LearnTogetherSection = () => {
  return (
    <div className='xl:mt-[-200px] xl:relative flex flex-col space-y-5 sm:space-y-0 sm:flex sm:flex-row sm:space-x-6 items-center w-full xl:h-[600px]'>
      <div className='relative w-full sm:w-full h-[176px] sm:h-[319px] overflow-hidden xl:hidden'>
        <Image
          alt='main-logo'
          src='/images/home/learn-together-image.jpeg'
          className='object-cover border-border w-full h-full border-none rounded-3xl object-[center_20%]'
          fill
        />
      </div>

      {/* Background Image for XL screens */}
      <div className='absolute inset-0 hidden xl:block'>
        <Image
          alt='main-logo'
          src='/images/home/learn-together-image.jpeg'
          className='object-cover w-full border-none rounded-3xl object-[center_20%]'
          fill
        />
      </div>

      <div
        className='z-1000 sm:self-center space-y-5 sm:p-2 
            xl:bg-primary-foreground xl:w-[510px] xl:h-[335px] xl:py-12 xl:px-6 xl:rounded-3xl xl:ml-12'
      >
        <p className='text-3xl font-bold xl:text-4xl'>Learn Together </p>
        <p className='xl:text-lg'>
          Grow with friends using Mun-e’s lessons on budgeting, investing, and
          saving. Our app makes elevating your financial IQ together fun.
        </p>

        {/*'Start a lesson' and 'learn' Buttons */}
        <div className='flex flex-col space-y-3 xl:flex-row xl:space-x-5 xl:mt-10'>
          <Button className='bg-secondary w-[131px] h-11 p-4 text-sm'>
            Start a lesson
          </Button>
          <Button className='border-2 border-border rounded-lg bg-transparent text-primary w-[131px]  h-11 p-4  text-sm'>
            Learn more
          </Button>
        </div>
      </div>
    </div>
  );
};

export default LearnTogetherSection;
