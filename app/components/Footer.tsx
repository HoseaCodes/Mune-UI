import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaApple, FaGooglePlay, FaPhoneAlt } from 'react-icons/fa';

type FooterProps = {
  className?: string;
};

const Footer = ({ className }: FooterProps) => {
  return (
    <div
      className={`${className} bg-secondary rounded-t-3xl px-6 py-12 w-full mt-15 items-center flex flex-col space-y-4 xl:space-y-8`}
    >
      <Image
        alt='mune-logo-white'
        src='/images/home/solo-mune-logo-white.svg'
        className='object-cover border-0 border-white rounded-lg mt-4 self-start mb-10 md:hidden sm:hidden'
        width={40}
        height={24}
      />
      <p className='text-primary-foreground text-lg sm:text-3xl font-bold text-center xl:text-5xl'>
        Don’t Sleep! <br className='xl:hidden sm:hidden' /> Sign Up Now.{' '}
      </p>

      {/* Phone number Input for Phone and Tablet ONLY*/}
      <div className='relative w-full max-w-[240px] xl:hidden'>
        <div className='flex flex-row items-center bg-white py-2 px-3 rounded-full w-full'>
          <div className='bg-primary w-5 h-5 rounded-full flex items-center justify-center'>
            <FaPhoneAlt className='w-2 h-2 text-white' />
          </div>
          <Input
            type='text'
            placeholder='Enter your mobile number'
            className='border-none text-black text-sm font-light bg-transparent text-ellipsis w-full'
          />
        </div>
      </div>

      <p className='text-primary-foreground font-extralight md:hidden sm:hidden'>
        App coming soon!
      </p>

      {/* Navigation Buttons for Phone and Tablet ONLY*/}
      <div className='flex-row flex justify-between w-full xl:hidden'>
        {' '}
        <div className='flex-col space-y-1 hidden md:flex md:self-end sm:flex sm:self-end'>
          <Image
            alt='mune-logo-white'
            src='/images/home/solo-mune-logo-white.svg'
            className='object-cover border-0 border-white rounded-lg self-start'
            width={40}
            height={24}
          />
          <p className='text-primary-foreground text-xl'>App Coming Soon!</p>

          {/* Download Button App store and Plat store for Mobile and Tablet ONLY */}
          <div className='flex flex-row space-x-2'>
            <Button className='h-11  border-2 border-black rounded-lg flex items-center justify-center gap-2 bg-primary-foreground'>
              <FaGooglePlay className='h-5 w-5 text-black' />
              <div className='flex flex-col leading-none text-left text-xs font-medium text-black'>
                <span>GET IT ON</span>
                <span className='font-bold'>Google Play</span>
              </div>
            </Button>

            <Button className='h-11  border-2 border-black  rounded-lg flex items-center justify-center gap-2 bg-primary-foreground'>
              <FaApple className='h-5 w-5 text-black' />
              <div className='flex flex-col leading-none text-left text-xs font-medium text-black'>
                <span className='text-xs'>Download on the</span>
                <span className='font-bold flex justify-center'>App Store</span>
              </div>
            </Button>
          </div>
        </div>
        <div className='self-start flex flex-col space-y-5 mt-6 md:self-end'>
          <Link
            href='/'
            className='font-semibold text-xl text-white tracking-[-0.45px] cursor-pointer'
          >
            Home
          </Link>
          <Link
            href='/about'
            className='font-semibold text-xl text-white tracking-[-0.45px] cursor-pointer'
          >
            About
          </Link>
          <Link
            href='/contact'
            className='font-semibold text-xl text-white tracking-[-0.45px] cursor-pointer'
          >
            Contact
          </Link>
          <Link
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

      {/* Phone number input for Desktop */}
      <div className='relative w-full max-w-[412px] xl:flex hidden'>
        <div className='flex flex-row items-center bg-white py-2 px-3 w-full rounded-2xl'>
          <Input
            type='text'
            placeholder='Enter your mobile number'
            className='border-none text-black text-sm font-light bg-transparent text-ellipsis w-full'
          />
          <Button className='bg-secondary text-primary-foreground py-3 px-6 h-11'>
            Get Mun-e
          </Button>
        </div>
      </div>

      <div className='mt-32 hidden xl:flex xl:flex-row xl:justify-between w-full'>
        <div className='space-y-3 self-end'>
          <Image
            alt='mune-logo-white'
            src='/images/home/solo-mune-logo-white.svg'
            className='object-cover border-0 border-white rounded-lg self-start'
            width={121}
            height={47}
          />
          <p className='text-primary-foreground text-xl'>App Coming Soon!</p>

          {/* Download buttons for Apple and Google play store for Desktop ONLY */}
          <div className='flex flex-row space-x-2'>
            <Button className='h-11  border-2 border-black rounded-lg flex items-center justify-center gap-2 bg-primary-foreground'>
              <FaGooglePlay className='h-5 w-5 text-black' />
              <div className='flex flex-col leading-none text-left text-xs font-medium text-black'>
                <span>GET IT ON</span>
                <span className='font-bold'>Google Play</span>
              </div>
            </Button>

            <Button className='h-11  border-2 border-black  rounded-lg flex items-center justify-center gap-2 bg-primary-foreground'>
              <FaApple className='h-5 w-5 text-black' />
              <div className='flex flex-col leading-none text-left text-xs font-medium text-black'>
                <span className='text-xs'>Download on the</span>
                <span className='font-bold flex justify-center'>App Store</span>
              </div>
            </Button>
          </div>
        </div>

        <div className='flex-row flex self-end space-x-8'>
          {/* Legal Term Links */}
          <div className='space-y-4 '>
            <p className='font-semibold text-primary-foreground'>Legal</p>
            <p className='text-primary-foreground'>Terms of use</p>
            <p className='text-primary-foreground'>Privacy Policy</p>
            <p className='text-primary-foreground'>Security Policy</p>
            <p className='text-primary-foreground'>Cookie Settings</p>
          </div>

          {/* Navigation Buttons */}
          <div className='flex flex-col space-y-4 '>
            <p className='font-semibold text-primary-foreground'>Navigation</p>
            <Link href='/' className='text-primary-foreground cursor-pointer'>
              Home
            </Link>
            <Link
              href='/about'
              className='text-primary-foreground cursor-pointer'
            >
              About
            </Link>
            <Link
              href='/contact'
              className='text-primary-foreground cursor-pointer'
            >
              Contact
            </Link>
            <Link
              href='/subscribe'
              className='text-primary-foreground cursor-pointer'
            >
              Subscribe
            </Link>
          </div>

          {/* Subscribe Buttons */}
          <div className='flex flex-col space-y-4 '>
            <p className='font-semibold text-primary-foreground'>Subscribe</p>

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
      </div>
    </div>
  );
};

export default Footer;
