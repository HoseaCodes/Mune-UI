'use client';

import Image from 'next/image';
import { useState } from 'react';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import MobileHeader from './MobileHeader';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuLink,
} from '@/components/ui/navigation-menu';
import Link from 'next/link';

type NavBarProps = {
  className?: string;
};

const Navbar = ({ className }: NavBarProps) => {
  const [openHeader, setOpenHeader] = useState(false);

  return (
    <>
      {/* Mobile - Tablet Header (Overlay) */}
      {openHeader && <MobileHeader setOpenHeader={setOpenHeader} />}

      {/* Navbar Container */}
      <div
        className={`${className} py-7 mt-9 flex flex-row justify-between items-center md:px-12`}
      >
        <Link
          onClick={() => setOpenHeader(false)}
          href='/'
          className='font-semibold text-xl text-white tracking-[-0.45px] cursor-pointer'
        >
          <Image
            alt='main-logo'
            src={'/images/main-logo.svg'}
            className='object-contain'
            sizes='(max-width: 768px) 50vw, 100px'
            width={128}
            height={20}
          />
        </Link>

        {/* Desktop Navigation (xl and up) */}
        <nav className='hidden xl:flex'>
          <NavigationMenu>
            <NavigationMenuList className='space-x-10'>
              <NavigationMenuItem>
                <NavigationMenuLink
                  href='/about'
                  className='font-semibold text-lg'
                >
                  About
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink
                  href='/contact'
                  className='font-semibold text-lg'
                >
                  Contact
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  href='/subscribe'
                  className='font-semibold text-lg'
                >
                  Subscribe
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  href='/subscribe'
                  className='font-semibold text-lg'
                >
                  <Button className='bg-secondary py-4 px-6 shadow-lg shadow-secondary/15'>
                    Get Mun-e
                  </Button>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </nav>

        {/* Burger Menu (hidden at xl and up) */}
        <Button
          className='w-11 h-11 rounded-full flex items-center justify-center xl:hidden '
          onClick={() => setOpenHeader(true)}
        >
          <Menu className='w-4 h-4 text-primary-foreground' />
        </Button>
      </div>
    </>
  );
};

export default Navbar;
