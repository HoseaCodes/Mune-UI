import React from 'react';
import {
  ImageWrapper,
  FloatingImage,
  FeatureList,
  FeatureItem,
  FeatureIcon,
  FeatureText,
  Title2,
  Description,
  GetMunEButton,
  ContentWrapper,
} from '../../../styles/HomeStyles';
import iPhoneImage from '../../../assets/Iphone.png';
import payGirls from '../../../assets/pay-Girls.png';
import payMan from '../../../assets/pay-man.png';
import quickSignUp from '../../../assets/quick-signup.png';
import enterPayment from '../../../assets/enter-payment.png';
import sendMoney from '../../../assets/send-money.png';
import '../../../styles/FeaturePay.css';

export default function FeaturePay() {
  return (
    <section className="pay-section">
      <ImageWrapper>
        <div className="iphone">
          <div className="iphone-img-wrap">
            <img src={iPhoneImage} alt="Mock iPhone" />
          </div>
        </div>
        <FloatingImage
          src={payGirls}
          alt="Image 1"
          className="image1"
        />
        <FloatingImage
          src={payMan}
          alt="Image 2"
          className="image2"
        />
        <FeatureList>
          <FeatureItem>
            <FeatureIcon bgColor="#B0DFF9">
              <img src={quickSignUp} alt="Quick SignUp" />
            </FeatureIcon>
            <FeatureText>
              <span className="feature-title">
                Quick Sign-Up, Zero Cost
              </span>
              <br />
              Sign up on our app for free
            </FeatureText>
          </FeatureItem>
          <FeatureItem>
            <FeatureIcon bgColor="#CEB0FA">
              <img src={enterPayment} alt="Enter Payment" />
            </FeatureIcon>
            <FeatureText>
              <span className="feature-title">
                Enter Payment Details
              </span>
              <br />
              Just add the amount and friend
            </FeatureText>
          </FeatureItem>
          <FeatureItem>
            <FeatureIcon bgColor="#B9EBC1">
              <img src={sendMoney} alt="Send Money" />
            </FeatureIcon>
            <FeatureText>
              <span className="feature-title">
                Send Money Fast
              </span>
              <br />
              Tap send and transfers complete
            </FeatureText>
          </FeatureItem>
        </FeatureList>
      </ImageWrapper>
      <div className="card-container">
        <ContentWrapper>
          <Title2>Pay Friends</Title2>
          <Description>
            Split bills and share costs effortlessly. Mun-e
            lets you settle up instantly, keeping group
            expenses simple and stress-free.
          </Description>
          <GetMunEButton>Get Mun-e</GetMunEButton>
        </ContentWrapper>
      </div>
    </section>
  );
}
