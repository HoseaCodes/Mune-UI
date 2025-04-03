import Image from 'next/image';
import React from 'react';

const LoaderScreen = () => {
  return (
    <div className='flex items-center justify-center w-full h-full'>
      <Image
        alt='main-logo'
        src={'/images/main-logo-loader.svg'}
        className='object-contain' // or "object-cover", depending on use case
        sizes='(max-width: 768px) 50vw, 100px'
        width={128}
        height={20}
      />
    </div>
  );
};

export default LoaderScreen;
