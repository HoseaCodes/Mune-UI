import { Button } from '@/components/ui/button';
import Image from 'next/image';
import React from 'react';

const OurMissionSection = () => {
  return (
    <div className='flex flex-col border-border border-t-1  md:border-1 rounded-3xl w-full xl:border-none xl:flex-row xl:h-[600px] xl:relative xl:py-[81px] xl:px-[48px] xl:mt-[120px]'>
      {/* Background Image for XL screens */}
      <div className='absolute inset-0 hidden xl:block border-none'>
        <Image
          alt='main-logo'
          src='/images/about/our-mission-image2.jpeg'
          className='object-cover object-center w-full h-full border-none rounded-3xl'
          fill
        />
      </div>
      <div
        className='z-1000 xl:bg-primary-foreground flex flex-col space-y-8 px-2 py-6 md:py-6 md:px-6 
xl:w-[510px] xl:h-auto xl:my-auto xl:rounded-3xl xl:self-end xl:ml-auto'
      >
        <p className='font-bold text-[22px] tracking-[-0.26px] md:text-3xl'>
          Our Mission: <br /> Elevate Your Finances
        </p>
        <p className='font-light text-[#556860]'>
          Our mission is simple: help you get your money right and your
          knowledge tight. We’re here to make financial literacy easy and
          accessible, so you can flex your financial skills and secure your bag
          for the <span className='font-bold'>future.</span>
        </p>

        <div className='flex flex-row space-x-4 w-full'>
          <Button className='bg-secondary rounded-[12px] px-6 py-3 h-auto'>
            Get Mun-e
          </Button>
          <Button className='bg-transparent border-border border-1 rounded-[12px]  px-6 py-3 text-secondary-foreground h-auto font-semibold'>
            Learn more
          </Button>
        </div>
      </div>

      <div className='xl:hidden self-center w-full md:p-6 flex justify-center items-center md:mr-auto'>
        <Image
          alt='highlight-person'
          src='/images/about/our-mission-image2.jpeg'
          width={400}
          height={400}
          quality={95}
          className='w-full rounded-3xl object-contain'
        />
      </div>
    </div>
  );
};

export default OurMissionSection;
