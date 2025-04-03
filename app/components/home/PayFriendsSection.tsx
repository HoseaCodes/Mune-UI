import { Button } from '@/components/ui/button';
import Image from 'next/image';
import React from 'react';

const PayFriendsSection = () => {
  return (
    <div className='space-y-5 sm:flex-row sm:flex sm:gap-6 w-full md:justify-between'>
      <div className='sm:self-center space-y-5 sm:p-2 xl:order-2 xl:w-[600px] '>
        <p className='text-3xl xl:text-4xl font-bold'>Pay Friends</p>
        <p className='sm:order-2 sm:justify-items-start xl:text-2xl md:max-w-[240px] md:line-clamp-5 xl:max-w-none xl:line-clamp-none'>
          Split bills and share costs effortlessly. Mun-e lets you settle up
          instantly, keeping group expenses simple and stress-free.
        </p>
        <Button className='hidden xl:flex bg-secondary py-4 px-6 items-center text-center'>
          Get Mun-e
        </Button>
      </div>
      <div className='relative w-[562px] xl:order-1 hidden md:block justify-center'>
        <Image
          alt='main-logo'
          src='/images/home/pay-friends-desktop.png'
          className='object-contain'
          layout='responsive'
          width={562}
          height={988}
        />
      </div>
      <div className='relative w-full xl:order-1 md:hidden self-center mx-auto'>
        <Image
          alt='main-logo'
          src='/images/home/pay-friends-mobile.png'
          className='object-contain'
          layout='responsive'
          width={320}
          height={476}
        />
      </div>
    </div>
  );
};

export default PayFriendsSection;
