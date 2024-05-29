import React from 'react';
import {
  FooterWrapper,
  FooterLogo,
  FooterTitle,
  FooterLink,
  SubscribeLink,
  SubscribeIcons,
  NavLinks,
  AppComingSoon,
  PhoneIcon,
  FooterInput,
  FooterForm,
  FooterFormWrapper,
  FooterSubmitButton,
} from '../styles/FooterStyles';
import logo from '../assets/logo.png';
import phoneIcon from '../assets/phone-icon.png';
import googlePlay from '../assets/google-play.png'; // Add Google Play image
import appStore from '../assets/app-store.png'; // Add App Store image
import {
  FaFacebook,
  FaInstagram,
  FaTiktok,
} from 'react-icons/fa';

const Footer = () => (
  <FooterWrapper>
    <FooterLogo src={logo} alt="Logo" />
    <FooterTitle>Don't Sleep! Sign Up Now.</FooterTitle>
    <FooterFormWrapper>
      <PhoneIcon src={phoneIcon} alt="Phone" />
      <FooterForm>
        <FooterInput
          type="text"
          placeholder="Enter your mobile number"
        />
        <FooterSubmitButton>CTA</FooterSubmitButton>
      </FooterForm>
    </FooterFormWrapper>
    <AppComingSoon>App Coming Soon!</AppComingSoon>
    <NavLinks>
      <FooterLink href="/">Home</FooterLink>
      <FooterLink href="/about">About</FooterLink>
      <FooterLink href="/contact">Contact</FooterLink>
      <FooterLink href="/subscribe">Subscribe</FooterLink>
    </NavLinks>
    <SubscribeIcons>
      <SubscribeLink href="https://facebook.com">
        <FaFacebook />
      </SubscribeLink>
      <SubscribeLink href="https://instagram.com">
        <FaInstagram />
      </SubscribeLink>
      <SubscribeLink href="https://tiktok.com">
        <FaTiktok />
      </SubscribeLink>
    </SubscribeIcons>
  </FooterWrapper>
);

export default Footer;
