import React from 'react';
import {
  SubscribeWrapper,
  TitleSection,
  TextWrapper,
  Title,
  Paragraph,
  FormWrapper,
  PhoneIcon2,
  Input,
  SubmitButton,
  LessonWrapper,
  LessonCard,
  LessonTitle,
  LessonDescription,
  LessonButton,
  LessonImage,
  SubscribeImage,
  StayTunedSection,
  StayTunedTitle,
  StayTunedText,
  StayTunedFormWrapper,
  StayTunedInput,
  TrendingSection,
  TrendingTitle,
  TrendingWrapper,
  TrendingCard,
  TrendingImage,
} from '../styles/SubscribeStyles';
import Header from '../components/Header';
import Footer from '../components/Footer';
import phoneIcon2 from '../assets/phone-icon2.png';
import subscribeImage from '../assets/subscribe-image.png'; // Replace with actual image path
import lessonImage1 from '../assets/lesson-image1.png'; // Replace with actual image path
import lessonImage2 from '../assets/lesson-image2.png'; // Replace with actual image path
import lessonImage3 from '../assets/lesson-image3.png'; // Replace with actual image path
import trendingImage1 from '../assets/trending-image1.png'; // Replace with actual image path
import trendingImage2 from '../assets/trending-image2.png'; // Replace with actual image path
import trendingImage3 from '../assets/trending-image3.png'; // Replace with actual image path
import trendingImage4 from '../assets/trending-image4.png'; // Replace with actual image path

const Subscribe: React.FC = () => {
  return (
    <SubscribeWrapper>
      <Header />
      <TitleSection>
        <TextWrapper>
          <Title>Elevate Your Financial IQ</Title>
          <Paragraph>
            Stay ahead in your financial journey by subscribing to updates on our newest educational videos and resources!
          </Paragraph>
          <FormWrapper>
            <PhoneIcon2 src={phoneIcon2} alt="Phone" />
            <Input type="text" placeholder="Enter your mobile number" />
            <SubmitButton>Subscribe</SubmitButton>
          </FormWrapper>
        </TextWrapper>
        <SubscribeImage src={subscribeImage} alt="Subscribe" />
      </TitleSection>
      <LessonWrapper>
        <LessonCard>
          <LessonTitle>Budgeting Basics: How to Manage Your Money</LessonTitle>
          <LessonDescription>
            Learn the fundamentals of creating and maintaining a budget to keep your finances on track.
          </LessonDescription>
          <LessonButton>Start Lesson</LessonButton>
          <LessonImage src={lessonImage1} alt="Lesson 1" />
        </LessonCard>
        <LessonCard>
          <LessonTitle>Credit Scores 101: Building/Maintaining Good Credit</LessonTitle>
          <LessonDescription>
            Understand what a credit score is, how it's calculated, tips for improving and maintaining a good score.
          </LessonDescription>
          <LessonButton>Start Lesson</LessonButton>
          <LessonImage src={lessonImage2} alt="Lesson 2" />
        </LessonCard>
        <LessonCard>
          <LessonTitle>Investing for Beginners: Growing Your Wealth</LessonTitle>
          <LessonDescription>
            Get introduced to the basics of investing, different types of investments, and how to start investing wisely.
          </LessonDescription>
          <LessonButton>Start Lesson</LessonButton>
          <LessonImage src={lessonImage3} alt="Lesson 3" />
        </LessonCard>
      </LessonWrapper>
      <StayTunedSection>
        <StayTunedTitle>Stay Tuned for New Lessons!</StayTunedTitle>
        <StayTunedText>Enter your mobile number for updates on new educational videos!</StayTunedText>
        <StayTunedFormWrapper>
          <PhoneIcon2 src={phoneIcon2} alt="Phone" />
          <StayTunedInput type="text" placeholder="Enter your mobile number" />
          {/* <SubmitButton>Subscribe</SubmitButton> */}
        </StayTunedFormWrapper>
      </StayTunedSection>
      <TrendingSection>
        <TrendingTitle>Trending</TrendingTitle>
        <TrendingWrapper>
          <TrendingCard>
            <LessonTitle>Growing Your Wealth</LessonTitle>
            <TrendingImage src={trendingImage1} alt="Trending 1" />
            <LessonButton>Start Lesson</LessonButton>
          </TrendingCard>
          <TrendingCard>
            <LessonTitle>Strategies to Pay Off Loans</LessonTitle>
            <TrendingImage src={trendingImage2} alt="Trending 2" />
            <LessonButton>Start Lesson</LessonButton>
          </TrendingCard>
          <TrendingCard>
            <LessonTitle>How to Build an Emergency Fund</LessonTitle>
            <TrendingImage src={trendingImage3} alt="Trending 3" />
            <LessonButton>Start Lesson</LessonButton>
          </TrendingCard>
          <TrendingCard>
            <LessonTitle>How to Manage Your Money</LessonTitle>
            <TrendingImage src={trendingImage4} alt="Trending 4" />
            <LessonButton>Start Lesson</LessonButton>
          </TrendingCard>
        </TrendingWrapper>
      </TrendingSection>
      <Footer />
    </SubscribeWrapper>
  );
};

export default Subscribe;
