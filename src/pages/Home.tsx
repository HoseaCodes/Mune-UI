import React from 'react';
import Layout from '../components/home/Layout';
import Hero from '../components/home/Hero';
import FeatureLearn from '../components/home/FeatureLearn';
import FeaturePay from '../components/home/FeaturePay';
import SavingSection from '../components/home/SavingSection';
import UsersSection from '../components/home/UsersSection';
import UnlockSection from '../components/home/UnlockSection';
import AccessSection from '../components/home/AccessSection';

const Home: React.FC = () => {
  return (
    <Layout>
      <Hero />
      <FeaturePay />
      <FeatureLearn />
      <SavingSection />
      <UsersSection />
      <UnlockSection />
      <AccessSection />
    </Layout>
  );
};

export default Home;
