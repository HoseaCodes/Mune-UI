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
  FooterFormContainer,
  FooterForm,
  FooterFormWrapper,
  FooterSubmitButton,
} from '../styles/FooterStyles';
import logo from '../assets/logo.png';
import phoneIcon from '../assets/phone-icon.png';
import {
  FaFacebook,
  FaInstagram,
  FaTiktok,
} from 'react-icons/fa';

const Footer = () => (
  <FooterWrapper>
    <FooterLogo src={logo} alt="Logo" />
    <FooterTitle>Don&#39;t Sleep! Sign Up Now.</FooterTitle>
    <FooterFormContainer>
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
    </FooterFormContainer>
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
