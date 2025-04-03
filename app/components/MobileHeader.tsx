import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

type MobileHeaderProps = {
  setOpenHeader: (open: boolean) => void;
};

const MobileHeader = ({ setOpenHeader }: MobileHeaderProps) => {
  return (
    <div className='fixed inset-0 z-50 flex flex-col bg-primary h-screen w-screen'>
      {/* Top bar with logo and close button */}
      <div className='px-4 py-7 mt-9 flex flex-row justify-between bg-primary items-center'>
        <Image
          alt='main-logo'
          src={'/images/main-logo-white.png'}
          className='object-contain'
          sizes='(max-width: 768px) 50vw, 100px'
          width={128}
          height={20}
        />
        <Button
          className='w-11 h-11 rounded-full flex items-center justify-center'
          onClick={() => setOpenHeader(false)}
        >
          <Menu className='w-4 h-4' />
        </Button>
      </div>

      {/* Menu links */}
      <div className='flex flex-col items-center justify-center space-y-5 mt-6'>
        <Link
          onClick={() => setOpenHeader(false)}
          href='/'
          className='font-semibold text-xl text-white tracking-[-0.45px] cursor-pointer'
        >
          Home
        </Link>
        <Link
          onClick={() => setOpenHeader(false)}
          href='/about'
          className='font-semibold text-xl text-white tracking-[-0.45px] cursor-pointer'
        >
          About
        </Link>
        <Link
          onClick={() => setOpenHeader(false)}
          href='/contact'
          className='font-semibold text-xl text-white tracking-[-0.45px] cursor-pointer'
        >
          Contact
        </Link>
        <Link
          onClick={() => setOpenHeader(false)}
          href='/subscribe'
          className='font-semibold text-xl text-white tracking-[-0.45px] cursor-pointer'
        >
          Subscribe
        </Link>

        {/* Social Media Icons */}
        <div className='flex flex-row space-x-5 mt-2'>
          <Image
            alt='facebook'
            src={'/images/facebook-logo-white.svg'}
            width={12}
            height={12}
          />
          <Image
            alt='instagram'
            src={'/images/instagram-logo-white.svg'}
            width={20}
            height={20}
          />
          <Image
            alt='tiktok'
            src={'/images/tiktok-logo-white.svg'}
            width={20}
            height={20}
          />
        </div>
      </div>
    </div>
  );
};

export default MobileHeader;
