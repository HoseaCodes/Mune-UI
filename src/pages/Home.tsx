import React from 'react';
import {
  HomeWrapper,
  TitleSection,
  Title,
  FormWrapper,
  Input,
  PhoneIcon,
  GetStartedButton,
  StoreButtonWrapper,
  StoreButton,
  StoreLogo,
  StoreTextWrapper,
  StoreText,
  StoreTitle,
  EasyPaymentsImage,
  SectionWrapper,
  SectionTitle,
  SectionParagraph,
  SectionButton,
  ImageWrapper,
  Image,
  GridWrapper,
  GridItem,
  GridItemTitle,
  GridItemParagraph,
  GridItemButton,
} from '../styles/HomeStyles';
import Header from '../components/Header';
import Footer from '../components/Footer';
import phoneIcon from '../assets/phone-icon2.png'; // Replace with actual image path
import easyPaymentsImage from '../assets/easy-payments.png'; // Replace with actual image path
import googlePlayLogo from '../assets/google-play-logo.png'; // Replace with actual image path
import appStoreLogo from '../assets/app-store-logo.png'; // Replace with actual image path
import sectionImage from '../assets/section-image.png'; // Replace with actual image path
import gridImage1 from '../assets/ion-card.png'; // Replace with actual image path
import gridImage2 from '../assets/graduation-hat.png'; // Replace with actual image path

const Home: React.FC = () => {
  return (
    <>
      <Header />
      <HomeWrapper>
        <TitleSection>
          <div>
            <Title>Easy Payments. Make Mun-e Moves.</Title>
            <FormWrapper>
              <PhoneIcon src={phoneIcon} alt="Phone" />
              <Input type="text" placeholder="Enter your mobile number" />
              <GetStartedButton>Get Started</GetStartedButton>
            </FormWrapper>
            <StoreButtonWrapper>
              <StoreButton href="https://play.google.com/store">
                <StoreLogo src={googlePlayLogo} alt="Google Play" />
                <StoreTextWrapper>
                  <StoreText>GET IT ON</StoreText>
                  <StoreTitle>Google Play</StoreTitle>
                </StoreTextWrapper>
              </StoreButton>
              <StoreButton href="https://www.apple.com/app-store">
                <StoreLogo src={appStoreLogo} alt="App Store" />
                <StoreTextWrapper>
                  <StoreText>Download on the</StoreText>
                  <StoreTitle>App Store</StoreTitle>
                </StoreTextWrapper>
              </StoreButton>
            </StoreButtonWrapper>
          </div>
          <EasyPaymentsImage src={easyPaymentsImage} alt="Easy Payments!!" />
        </TitleSection>
        <SectionWrapper>
          <SectionTitle>Pay Friends, Learn Together</SectionTitle>
          <SectionParagraph>
            Seamless payments that keep you connected. Share money effortlessly and boost your financial knowledge with friends by your side.
          </SectionParagraph>
          <SectionButton>Get Mun-E</SectionButton>
          <ImageWrapper>
            <Image src={sectionImage} alt="Pay Friends, Learn Together" />
          </ImageWrapper>
        </SectionWrapper>
        <GridWrapper>
          <GridItem>
            <GridItemTitle>Exclusive Early Access</GridItemTitle>
            <GridItemParagraph>
              Get early access to cutting-edge financial tools and features designed just for you.
            </GridItemParagraph>
            <GridItemButton>Get Started</GridItemButton>
            <ImageWrapper>
              <Image src={gridImage1} alt="Exclusive Early Access" />
            </ImageWrapper>
          </GridItem>
          <GridItem>
            <GridItemTitle>Unlock Special Perks</GridItemTitle>
            <GridItemParagraph>
              Enjoy exclusive perks and rewards as a thank you for being an early supporter.
            </GridItemParagraph>
            <GridItemButton>Get Started</GridItemButton>
            <ImageWrapper>
              <Image src={gridImage2} alt="Unlock Special Perks" />
            </ImageWrapper>
          </GridItem>
        </GridWrapper>
      </HomeWrapper>
      <Footer />
    </>
  );
};

export default Home;
