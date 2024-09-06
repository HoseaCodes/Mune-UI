import React from 'react';
import GooglePlay from '../assets/images/google-play.svg';
import Image from 'next/image';

export default function GoogleIcon() {
  return (
    <a href="#/">
      <Image width={0} height={0} src={GooglePlay} alt="Google Play" />
    </a>
  );
}
