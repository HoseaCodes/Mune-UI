import React from 'react';
import AppStore from '@/assets/images/app-store.svg';
import Image from 'next/image';

export default function AppleIcon() {
  return (
    <a href="">
      <Image width={0} height={0} src={AppStore} alt="App Store" />
    </a>
  );
}
