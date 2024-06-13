import React from 'react';
import {
  ButtonContainer,
  LearnMoreButton,
  LearnTogetherContent,
  LearnTogetherDescription,
  LearnTogetherImage,
  LearnTogetherSection,
  LearnTogetherTitle,
  StartLessonButton,
} from '../../../styles/HomeStyles';
import learnTogetherImage from '../../../assets/learn-together.png';
import '../../../styles/FeatureLearn.css';

export default function FeatureLearn() {
  return (
    <section className="learn-container">
      <LearnTogetherSection>
        <LearnTogetherContent>
          <LearnTogetherTitle>
            Learn Together
          </LearnTogetherTitle>
          <LearnTogetherDescription>
            Grow with friends using Mun-e’s lessons on
            budgeting, investing, and saving. Our app makes
            elevating your financial IQ together fun.
          </LearnTogetherDescription>
          <ButtonContainer>
            <StartLessonButton>
              Start a Lesson
            </StartLessonButton>
            <LearnMoreButton>Learn More</LearnMoreButton>
          </ButtonContainer>
        </LearnTogetherContent>
        <LearnTogetherImage
          src={learnTogetherImage}
          alt="Learn Together"
        />
      </LearnTogetherSection>
    </section>
  );
}
