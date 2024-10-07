import React from 'react';
import FAQItem from './FAQItem';
import faqData from '../../../constants/faq';

const FAQSection: React.FC = () => (
  <div className="max-w-6xl mx-auto p-4 flex flex-col md:flex-row gap-4">
    {faqData.map((item, index) => (
      <FAQItem key={index} item={item} />
    ))}
  </div>
);

export default FAQSection;
