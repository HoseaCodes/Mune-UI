import React, { useState } from 'react';
import PrivacyTerms from '../components/PrivacyTerms';
import Layout from '../components/home/Layout';

const Security = () => {
  const [activeTab, setActiveTab] = useState('security');

  return (
    <Layout >
        <PrivacyTerms activeTab={activeTab} setActiveTab={setActiveTab} />
    </Layout>
  );
};

export default Security;
