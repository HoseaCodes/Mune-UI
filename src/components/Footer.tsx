import React from 'react';
import {
  FooterWrapper,
  FooterContent,
  FooterTopText,
  FooterSectionContainer,
  FooterSection,
  Logo,
  FooterTitle,
  FooterLink,
  DownloadButtons,
  DownloadButton,
  SubscribeLinks,
  SubscribeLink,
  Form,
  Input,
  SubmitButton,
} from '../styles/FooterStyles';
import logo from '../assets/logo.png';
import googlePlay from '../assets/google-play.png'; // Add Google Play image
import appStore from '../assets/app-store.png'; // Add App Store image
import {
  FaFacebook,
  FaInstagram,
  FaTiktok,
} from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <FooterWrapper>
      <FooterContent>
        <FooterTopText>
          Don't Sleep! Sign Up Now.
        </FooterTopText>
        <Form>
          <Input
            type="text"
            placeholder="Enter your number here"
          />
          <SubmitButton type="submit">
            Get Mun-e
          </SubmitButton>
        </Form>
      </FooterContent>
      <FooterSectionContainer>
        <FooterSection>
          {/* <Logo src={logo} alt="Logo" /> */}
          <p>App Coming Soon!</p>
          {/* <DownloadButtons>
              <DownloadButton src={googlePlay} alt="Google Play" />
              <DownloadButton src={appStore} alt="App Store" />
            </DownloadButtons> */}
        </FooterSection>
        <FooterSection>
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
        </FooterSection>
        <FooterSection>
          <FooterTitle>Navigation</FooterTitle>
          <FooterLink href="/">Home</FooterLink>
          <FooterLink href="/about">About</FooterLink>
          <FooterLink href="/contact">Contact</FooterLink>
          <FooterLink href="/subscribe">
            Subscribe
          </FooterLink>
        </FooterSection>
        <FooterSection>
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
        </FooterSection>
      </FooterSectionContainer>
    </FooterWrapper>
  );
};

export default Footer;
