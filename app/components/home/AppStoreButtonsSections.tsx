import { Button } from '@/components/ui/button';
import React from 'react';
import { FaApple, FaGooglePlay } from 'react-icons/fa';

const AppStoreButtonsSections = () => {
  return (
    <div className='flex flex-row space-x-2 xl:hidden'>
      <Button className='h-11  border-2 border-border rounded-lg flex items-center justify-center gap-2 bg-primary-foreground'>
        <FaGooglePlay className='h-5 w-5 text-black' />
        <div className='flex flex-col leading-none text-left text-xs font-medium text-black'>
          <span>GET IT ON</span>
          <span className='font-bold'>Google Play</span>
        </div>
      </Button>

      <Button className='h-11  border-2 border-border  rounded-lg flex items-center justify-center gap-2 bg-primary-foreground'>
        <FaApple className='h-5 w-5 text-black' />
        <div className='flex flex-col leading-none text-left text-xs font-medium text-black'>
          <span className='text-xs'>Download on the</span>
          <span className='font-bold flex justify-center'>App Store</span>
        </div>
      </Button>
    </div>
  );
};

export default AppStoreButtonsSections;
