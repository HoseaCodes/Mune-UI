import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import LessonCard from '../components/LessonCard';
import TrendingCard from '../components/TrendingCard';
import { GreenButton } from '../components/Button';
import phoneIcon2 from '../assets/phone-icon2.png';
import subscribeImage from '../assets/student.png'; // Replace with actual image path
import lessonImage1 from '../assets/lesson-image1.png'; // Replace with actual image path
import lessonImage2 from '../assets/lesson-image2.png'; // Replace with actual image path
import lessonImage3 from '../assets/lesson-image3.png'; // Replace with actual image path
import trendingImage1 from '../assets/trending-image1.png'; // Replace with actual image path
import trendingImage2 from '../assets/trending-image2.png'; // Replace with actual image path
import trendingImage3 from '../assets/trending-image3.png'; // Replace with actual image path
import trendingImage4 from '../assets/trending-image4.png'; // Replace with actual image path
import { Link } from 'react-router-dom';

const lessons = [
  {
    title: 'Budgeting Basics: How to Manage Your Money',
    description: 'Learn the fundamentals of creating and maintaining a budget to keep your finances on track.',
    buttonText: 'Start Lesson',
    image: lessonImage1,
  },
  {
    title: 'Credit Scores 101: Building/Maintaining Good Credit',
    description: 'Understand what a credit score is, how it\'s calculated, tips for improving and maintaining a good score.',
    buttonText: 'Start Lesson',
    image: lessonImage2,
  },
  {
    title: 'Investing for Beginners: Growing Your Wealth',
    description: 'Get introduced to the basics of investing, different types of investments, and how to start investing wisely.',
    buttonText: 'Start Lesson',
    image: lessonImage3,
  },
];
  
const Subscribe: React.FC = () => {
  return (
    <>
      <Header />
      <div className="flex flex-col items-center min-h-screen p-5">
        <section className="flex flex-col items-center justify-center w-full max-w-5xl py-6 md:flex-row md:justify-between">
          <div className="text-center md:text-left md:mr-5 -mt-24">
            <h1 className="font-poppins w-[486.96px] h-11 text-3xl font-bold leading-[2.5rem] text-left text-[#010a03] ml-40 mt-20 md:mt-0 md:w-[40.58rem] md:h-[2.825rem] md:text-[1.375rem] md:leading-[1.75rem] md:ml-0 md:text-left whitespace-pre-wrap md:whitespace-normal">
              Elevate Your Financial IQ.
            </h1>
            <p className="font-poppins w-[486.96px] h-[84px] text-[1.4rem] font-normal leading-[1.8rem] text-left text-[#010a03] mb-8 ml-40 mt-6 md:ml-0 md:mt-0 md:w-[24.58rem] md:h-[5.25rem] md:text-[1.375rem] md:leading-[1.75rem] md:text-left">
              Stay ahead in your financial journey by subscribing to updates on our newest educational videos and resources!
            </p>
            <div className="mb-5 md:mb-0 md:self-start">
              <GreenButton text="Get Mun-e" />
            </div>
          </div>
          <img
            src={subscribeImage}
            alt="Subscribe"
            className="w-1/2 h-auto rounded-lg"
          />
        </section>
        <div className="flex overflow-x-auto space-x-4 scrollbar-hide snap-x snap-mandatory">
          {lessons.map((lesson, index) => (
            <LessonCard key={index} {...lesson} />
          ))}
        </div>
      
        <div className="w-full max-w-5xl text-left mt-16 mb-8">
          <h2 className="text-2xl font-bold mb-5">Trending</h2>
          <div className="flex justify-around flex-wrap md:flex-nowrap md:justify-start overflow-x-auto scrollbar-hide">
            <TrendingCard
              title="Growing Your Wealth"
              image={trendingImage1}
            />
            <TrendingCard
              title="Strategies to Pay Off Loans"
              image={trendingImage2}
            />
            <TrendingCard
              title="How to Build an Emergency Fund"
              image={trendingImage3}
            />
            <TrendingCard
              title="How to Manage Your Money"
              image={trendingImage4}
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Subscribe;
