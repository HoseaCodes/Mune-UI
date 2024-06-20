import React from 'react';
import {
  FooterWrapper,
  FooterLogo,
  // FooterTitle,
  FooterLink,
  SubscribeLink,
  AppComingSoon,
  PhoneIcon,
  Form,
  Input,
  SubmitButton,
  StoreLinks,
  SubscribeLinks,
  FooterContent,
  FooterTopText,
  LegalSection,
  NavigationSection,
  SubscribeSection,
  FooterSectionContainer,
  FooterSection,
  FooterTitle,
} from '../styles/FooterStyles';
import logo from '../assets/logo1.png';
import phoneIcon2 from '../assets/phone-icon2.png';
import {
  FaFacebook,
  FaInstagram,
  FaTiktok,
} from 'react-icons/fa';
import AppleIcon from './AppleIcon';
import GoogleIcon from './GoogleIcon';

const Footer: React.FC = () => {
  return (
    <FooterWrapper>
      <FooterContent>
        <FooterTopText>
          Don&apos;t Sleep! Sign Up Now.
        </FooterTopText>
        <Form>
          <Input
            type="text"
            placeholder="Enter your mobile number"
          />
          <PhoneIcon src={phoneIcon2} alt="Phone" />
          <SubmitButton type="submit">
            Get Mun-e
          </SubmitButton>
        </Form>
      </FooterContent>
      <FooterSectionContainer>
        <FooterSection>
          <FooterLogo src={logo} alt="Logo" />
          <AppComingSoon>App Coming Soon!</AppComingSoon>
          <StoreLinks>
            <GoogleIcon />
            <AppleIcon />
          </StoreLinks>
        </FooterSection>
        <LegalSection>
          <FooterTitle>Legal</FooterTitle>
          <FooterLink href="/terms">
            Terms of use
          </FooterLink>
          <FooterLink href="/privacy">
            Privacy Policy
          </FooterLink>
          <FooterLink href="/security">
            Security Policy
          </FooterLink>
          <FooterLink href="/cookie-settings">
            Cookie Settings
          </FooterLink>
        </LegalSection>
        <NavigationSection>
          <FooterTitle>Navigation</FooterTitle>
          <FooterLink href="/">Home</FooterLink>
          <FooterLink href="/about">About</FooterLink>
          <FooterLink href="/contact">Contact</FooterLink>
          <FooterLink href="/subscribe">
            Subscribe
          </FooterLink>
        </NavigationSection>
        <SubscribeSection>
          <FooterTitle>Subscribe</FooterTitle>
          <SubscribeLinks>
            <SubscribeLink href="https://facebook.com">
              <FaFacebook />
            </SubscribeLink>
            <SubscribeLink href="https://instagram.com">
              <FaInstagram />
            </SubscribeLink>
            <SubscribeLink href="https://tiktok.com">
              <FaTiktok />
            </SubscribeLink>
          </SubscribeLinks>
        </SubscribeSection>
      </FooterSectionContainer>
    </FooterWrapper>
  );
};

export default Footer;
