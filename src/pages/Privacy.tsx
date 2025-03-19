import React, { useState } from 'react';
import PrivacyTerms from '../components/PrivacyTerms';
import Layout from '../components/home/Layout';

const Privacy = () => {
  const [activeTab, setActiveTab] = useState('privacy');

  return (
    <Layout >
        <PrivacyTerms activeTab={activeTab} setActiveTab={setActiveTab} />
    </Layout>
  );
};

export default Privacy;
