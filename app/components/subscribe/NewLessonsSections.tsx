import { Input } from '@/components/ui/input';
import React from 'react';
import { FaPhoneAlt } from 'react-icons/fa';

const NewLessonsSections = () => {
  return (
    <div className='flex flex-col space-y-8 p-[10px]'>
      <p className='font-semibold text-[17px] md:text-3xl text-center'>
        Stay Tuned for New Lessons!
      </p>
      <p className='text-center text-[12px] md:text-sm'>
        Enter your mobile number for updates <br /> on new educational videos!
      </p>
      <div className='flex flex-row items-center bg-transparent border-1 border-border py-2 px-3 rounded-full w-full'>
        <div className='bg-primary w-5 h-5 rounded-full flex items-center justify-center'>
          <FaPhoneAlt className='w-2 h-2 text-white' />
        </div>
        <Input
          type='text'
          placeholder='Enter your mobile number'
          className='border-none text-black text-sm bg-transparent text-ellipsis w-full'
        />
      </div>
    </div>
  );
};

export default NewLessonsSections;
