import { Button } from '@/components/ui/button';
import Image from 'next/image';
import React from 'react';

const SpecialPerksSection = () => {
  return (
    <div className='space-y-5 sm:space-y-0 sm:flex sm:flex-row-reverse sm:gap-6 xl:gap-[140px] xl:justify-end xl:p-9 items-center w-full h-auto md:justify-center md:gap-9 '>
      <div className='space-y-5 flex flex-col xl:w-[560px] md:w-[222px]'>
        <p className='text-3xl font-bold xl:text-4xl'>Unlock Special Perks </p>
        <p className='xl:text-2xl'>
          Enjoy exclusive perks and rewards as a thank you for being an early
          supporter.
        </p>

        <Button className='bg-secondary text-primary-foreground w-fit p-6 shadow-lg shadow-secondary/15'>
          Unlock Perks
        </Button>
      </div>
      <Image
        alt='main-logo'
        src='/images/home/perks-card-image.svg'
        className='object-cover w-full h-full border-0 border-white rounded-lg mt-4 md:w-[244px] xl:w-[482px]'
        width={242}
        height={245}
      />
    </div>
  );
};

export default SpecialPerksSection;
