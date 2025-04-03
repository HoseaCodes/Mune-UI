import { Button } from '@/components/ui/button';
import Image from 'next/image';
import React from 'react';
import { FaTable, FaTrophy } from 'react-icons/fa';
import { IoFlag } from 'react-icons/io5';

const SavingsGoalSection = () => {
  return (
    <div className='flex flex-col space-y-5 mt-20 w-full'>
      <div className='bg-primary rounded-3xl py-8 px-6 flex flex-col space-y-5 xl:flex-row xl:gap-6'>
        <div className='flex flex-col space-y-6 xl:self-center self-start'>
          <p className='text-3xl  xl:text-4xl font-bold text-primary-foreground'>
            Hit your Savings Goals
          </p>
          <p className='text-primary-foreground xl:text-2xl'>
            Use our interactive tools to set personal savings goals and track
            your progress with real-time updates.
          </p>
          <Button className='hidden sm:flex bg-primary-foreground w-fit text-secondary-foreground'>
            <span className='hidden xl:inline'>Start Saving</span>
            <span className='xl:hidden'>Learn more</span>
          </Button>
        </div>
        <Image
          alt='savings-goal-image'
          src='/images/home/savings-goal-image.svg'
          className='object-cover w-full h-full border-0 border-white rounded-lg'
          width={242}
          height={245}
        />
      </div>
      <div className='flex flex-col rounded-3xl border-2 border-border shadow-lg shadow-secondary/15 bg-transparent px-4 py-6 space-y-4 sm:hidden'>
        {/* Set savings target text */}
        <div className='flex flex-row space-x-5 items-center '>
          <div className='bg-[#CBEFD9] rounded-md p-2 flex items-center justify-center'>
            <IoFlag className='text-primary' />
          </div>
          <div>
            {' '}
            <p className='font-bold text-xs'>Set Your Savings Target</p>
            <p className='text-xs text-[#556860]'>
              Choose what you`&apos;`re saving for
            </p>
          </div>
        </div>

        {/* Monitor savings text */}
        <div className='flex flex-row space-x-5 items-center'>
          <div className='bg-[#CBEFD9] rounded-md p-2 flex items-center justify-center'>
            <FaTable className='text-primary' />
          </div>
          <div>
            {' '}
            <p className='font-bold text-xs'>Monitor Savings Easily</p>
            <p className='text-xs text-[#556860]'>Watch your money grow</p>
          </div>
        </div>

        {/* Achieve your Financial Dreams text */}
        <div className='flex flex-row space-x-5 items-center'>
          <div className='bg-[#CBEFD9] rounded-md p-2 flex items-center justify-center'>
            <FaTrophy className='text-primary' />
          </div>
          <div>
            {' '}
            <p className='font-bold text-xs'>Achieve Your Financial Dreams</p>
            <p className='text-xs text-[#556860]'>
              Hit your target and celebrate!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SavingsGoalSection;
