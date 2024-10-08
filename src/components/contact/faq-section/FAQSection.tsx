import React from 'react';
import FAQItem from './FAQItem';
import faqData from '../../../constants/faq';

const FAQSection: React.FC = () => (
  <div className="flex flex-col w-full">
    <h1 className="font-bold text-5xl text-black leading-[55px] p-6 w-full">
      FAQ
    </h1>
    <div className="max-w-6xl mx-auto flex flex-row gap-4 w-full overflow-x-auto scrollbar-hide">
      {faqData.map((item, index) => (
        <FAQItem key={index} item={item} />
      ))}
    </div>
  </div>
);

export default FAQSection;
