import { Button } from '@/components/ui/button';
import Image from 'next/image';
import React from 'react';

const EarlyAccessSection = () => {
  return (
    <div className='px-4 py-6 bg-[#DBF000] h-auto w-full rounded-3xl flex flex-col xl:flex-row xl:gap-30'>
      <div className='  flex flex-col space-y-5 '>
        <p className='text-3xl xl:text-4xl font-bold text-center sm:text-start'>
          Exclusive Early Access
        </p>
        <p className='text-center  xl:text-[22px] text-sm sm:text-start'>
          Get early access to cutting-edge financial tools and features designed
          just for you.
        </p>
        <Button className='bg-secondary text-primary-foreground w-fit p-6 shadow-lg shadow-secondary/15 self-center sm:self-start'>
          Get Mun-e
        </Button>
      </div>

      <div
        className='w-full aspect-[242/245] relative overflow-hidden 
                 mt-4 md:mt-[64px] xl:mt-0 md:h-[266px] xl:h-[368px] border-2 border-[#D9E9E2] rounded-3xl'
      >
        <Image
          alt='main-logo'
          src='/images/home/exclusive-early-acess-image.svg'
          fill
          className='object-cover rounded-3xl'
        />
      </div>
    </div>
  );
};

export default EarlyAccessSection;
