import React from 'react';
import {
  FooterWrapper,
  FooterLogo,
  FooterTitle,
  FooterLink,
  SubscribeLink,
  AppComingSoon,
  PhoneIcon,
  Form,
  Input,
  SubmitButton,
  StoreLinks,
  StoreButton,
  SubscribeLinks,
  FooterContent,
  FooterTopText,
  LegalSection,
  NavigationSection,
  SubscribeSection,
  FooterSectionContainer,
  FooterSection,
} from '../styles/FooterStyles';
import logo from '../assets/logo1.png';
import phoneIcon from '../assets/phone-icon.png';
import googlePlayLogo from '../assets/google-play-logo.png'; // Add Google Play image
import appStoreLogo from '../assets/app-store-logo.png'; // Add App Store image
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
            placeholder="Enter your mobile number"
          />
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
            <StoreButton href="https://play.google.com/store">
              <img src={googlePlayLogo} alt="Google Play" />
              <div>
                <div>GET IT ON</div>
                <div>Google Play</div>
              </div>
            </StoreButton>
            <StoreButton href="https://www.apple.com/app-store">
              <img src={appStoreLogo} alt="App Store" />
              <div>
                <div>Download on the</div>
                <div>App Store</div>
              </div>
            </StoreButton>
          </StoreLinks>
        </FooterSection>
        <LegalSection>
          <FooterTitle>Legal</FooterTitle>
          <FooterLink href="/terms">Terms of use</FooterLink>
          <FooterLink href="/privacy">Privacy Policy</FooterLink>
          <FooterLink href="/security">Security Policy</FooterLink>
          <FooterLink href="/cookie-settings">Cookie Settings</FooterLink>
        </LegalSection>
        <NavigationSection>
          <FooterTitle>Navigation</FooterTitle>
          <FooterLink href="/">Home</FooterLink>
          <FooterLink href="/about">About</FooterLink>
          <FooterLink href="/contact">Contact</FooterLink>
          <FooterLink href="/subscribe">Subscribe</FooterLink>
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
