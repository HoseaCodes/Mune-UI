import { Button } from '@/components/ui/button';
import Image from 'next/image';
import React from 'react';

const ElevateFinancialIqSection = () => {
  return (
    <div className='flex flex-col md:flex-row justify-center space-y-8 md:space-x-4 w-full'>
      <div className='flex flex-col space-y-4 md:items-start xl:self-center w-full'>
        <p className='text-4xl font-bold tracking-[-1px] leading-[41px] text-center md:text-start'>
          Elevate Your <br className='xl:hidden' />
          Financial IQ.
        </p>
        <p className='text-center md:text-start'>
          Stay ahead in your financial journey by
          <br className='hidden xl:block' /> subscribing to updates on our
          newest <br className='hidden xl:block' /> educational videos and
          resources!
        </p>
        <Button className='px-6 py-6 bg-secondary text-primary-foreground self-center text-[15px] rounded-[12px] md:self-start'>
          Get mun-e
        </Button>
      </div>
      <div className='w-full aspect-[288/222] relative rounded-3xl overflow-hidden'>
        <Image
          alt='subscribe-image'
          src='/images/subscribe/financial-iq-image.jpeg'
          fill
          className='object-cover border border-border'
        />
      </div>
    </div>
  );
};

export default ElevateFinancialIqSection;
