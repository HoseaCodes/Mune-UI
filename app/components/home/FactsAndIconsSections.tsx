import React from 'react';
import { FaCreditCard, FaGraduationCap } from 'react-icons/fa';
import { IoShieldCheckmarkSharp } from 'react-icons/io5';
import { PiPiggyBankFill } from 'react-icons/pi';

const FactsAndIconsSections = () => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 mt-15 xl:grid-cols-4 xl:p-6'>
      <div className='space-y-3'>
        <FaCreditCard className='text-[#85958F] h-5 w-5' />
        <p className='font-bold '>Send and Receive Money Instantly</p>
        <p className=' text-sm'>
          Make quick and easy payments to friends and family with just a few
          taps.
        </p>
      </div>
      <div className='space-y-3'>
        <FaGraduationCap className='text-[#85958F] h-6 w-6' />
        <p className='font-bold '>Learn Money Skills Anytime, Anywhere</p>
        <p className=' text-sm'>
          Access bite-sized financial lessons and tips designed to boost your
          financial literacy on the go.
        </p>
      </div>
      <div className='space-y-3'>
        <IoShieldCheckmarkSharp className='text-[#85958F] h-6 w-6' />
        <p className='font-bold '>Protection You Can Trust</p>
        <p className=' text-sm'>
          Your transactions are protected with top-tier security protocols to
          keep your money safe.
        </p>
      </div>
      <div className='space-y-3'>
        <PiPiggyBankFill className='text-[#85958F] h-6 w-6' />
        <p className='font-bold '>Smart Saving Tools for Your Goals</p>
        <p className=' text-sm'>
          Set savings goals and track your progress effortlessly to build a
          better financial future.
        </p>
      </div>
    </div>
  );
};

export default FactsAndIconsSections;
