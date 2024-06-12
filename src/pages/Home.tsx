import React from 'react';
import {
  HomeWrapper,
  Title,
  FormWrapper,
  Input,
  StoreButton,
  SectionWrapper,
  ImageWrapper,
  // GridItemParagraph,
  VideoClip,
  Button,
  StoreLinks,
  PlayButtonWrapper,
  PlayButtonIcon,
  PlayButtonText,
  PhoneImage,
  FloatingImage,
  FeatureList,
  FeatureItem,
  FeatureIcon,
  FeatureText,
  Title2,
  Description,
  GetMunEButton,
  ContentWrapper,
  LearnTogetherSection,
  LearnTogetherContent,
  LearnTogetherTitle,
  LearnTogetherDescription,
  ButtonContainer,
  StartLessonButton,
  LearnMoreButton,
  LearnTogetherImage,
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
import playButtonIcon from '../assets/playButtonIcon.png';
import videoClip from '../assets/videoClip.png';
import iPhoneImage from '../assets/iPhone-image.png';
import payGirls from '../assets/pay-Girls.png';
import payMan from '../assets/pay-man.png';
import quickSignUp from '../assets/quick-signup.png';
import enterPayment from '../assets/enter-payment.png';
import sendMoney from '../assets/send-money.png';
import learnTogetherImage from '../assets/learn-together.png'

const Home: React.FC = () => {
  return (
    <>
      <Header />
      <HomeWrapper>
        <VideoClip src={videoClip} autoPlay muted loop />
        <Title>Easy Payments. Make Mun-e Moves.</Title>
        <FormWrapper>
          <Input type="text" placeholder="Enter your mobile number" />
          <Button>Get Mun-e</Button>
        </FormWrapper>
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
        <PlayButtonWrapper>
          <PlayButtonIcon src={playButtonIcon} alt="Play" />
          <PlayButtonText>Watch the Mun-e story</PlayButtonText>
        </PlayButtonWrapper>
        <SectionWrapper>
          <ImageWrapper>
            <PhoneImage src={iPhoneImage} alt="Phone" />
            <FloatingImage src={payGirls} alt="Image 1" className="image1" />
            <FloatingImage src={payMan} alt="Image 2" className="image2" />
          </ImageWrapper>
          <ContentWrapper>
            <Title2>Pay Friends</Title2>
            <Description>
              Split bills and share costs effortlessly. Mun-e lets you settle up instantly, keeping group expenses simple and stress-free.
            </Description>
            <GetMunEButton>Get Mun-e</GetMunEButton>
            <FeatureList>
              <FeatureItem>
                <FeatureIcon bgColor='#B0DFF9'>
                  <img src={quickSignUp} alt="Quick SignUp" />
                </FeatureIcon>
                <FeatureText>
                  <span className="feature-title">Quick Sign-Up, Zero Cost</span><br />
                  Sign up on our app for free
                </FeatureText>
              </FeatureItem>
              <FeatureItem>
                <FeatureIcon bgColor='#CEB0FA'>
                  <img src={enterPayment} alt="Enter Payment" />
                </FeatureIcon>
                <FeatureText>
                  <span className="feature-title">Enter Payment Details</span><br />
                  Just add the amount and friend
                </FeatureText>
              </FeatureItem>
              <FeatureItem>
                <FeatureIcon bgColor='#B9EBC1'>
                  <img src={sendMoney} alt="Send Money" />
                </FeatureIcon>
                <FeatureText>
                  <span className="feature-title">Send Money Fast</span><br />
                  Tap send and transfers complete
                </FeatureText>
              </FeatureItem>
            </FeatureList>
          </ContentWrapper>
        </SectionWrapper>
        <LearnTogetherSection>
          <LearnTogetherContent>
            <LearnTogetherTitle>Learn Together</LearnTogetherTitle>
            <LearnTogetherDescription>
              Grow with friends using Mun-e’s lessons on budgeting, investing, and saving. Our app makes elevating your financial IQ together fun.
            </LearnTogetherDescription>
            <ButtonContainer>
              <StartLessonButton>Start a Lesson</StartLessonButton>
              <LearnMoreButton>Learn More</LearnMoreButton>
            </ButtonContainer>
          </LearnTogetherContent>
            <LearnTogetherImage src={learnTogetherImage} alt="Learn Together" />
        </LearnTogetherSection>
      </HomeWrapper>
      <Footer />
    </>
  );
};

export default Home;
