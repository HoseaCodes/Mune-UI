import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import {
  HomeWrapper,
  HeroSection,
  FeaturesSection,
  FeaturesList,
  FeatureItem,
} from '../styles/HomeStyles';

const Home: React.FC = () => {
  return (
    <>
      <Header />
      <HomeWrapper>
        <main>
          <HeroSection>
            <h1>Welcome to Mun-E</h1>
            <p>Your solution for financial transactions</p>
          </HeroSection>
          <FeaturesSection>
            <h2>Features</h2>
            <FeaturesList>
              <FeatureItem>Secure Payments</FeatureItem>
              <FeatureItem>Easy to Use</FeatureItem>
              <FeatureItem>24/7 Support</FeatureItem>
            </FeaturesList>
          </FeaturesSection>
        </main>
      </HomeWrapper>
      <Footer />
    </>
  );
};

export default Home;
