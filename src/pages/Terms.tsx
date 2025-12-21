import React, { useState } from 'react';
import PrivacyTerms from '../components/PrivacyTerms';
import Layout from '../components/home/Layout';

const Terms = () => {
  const [activeTab, setActiveTab] = useState('terms');

  return (
    <Layout >
        <PrivacyTerms activeTab={activeTab} setActiveTab={setActiveTab} />
    </Layout>
  );
};

export default Terms;
