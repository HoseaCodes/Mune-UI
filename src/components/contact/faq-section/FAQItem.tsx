import React, { useState } from 'react';
import FAQRow from './FAQRow';

const FAQItem: React.FC<{
  item: { question: string; answer: string }[];
}> = ({ item }) => {
  const [expandedIndex, setExpandedIndex] = useState<
    number | null
  >(null);

  const toggleRow = (index: number) => {
    setExpandedIndex((prevIndex) =>
      prevIndex === index ? null : index
    );
  };

  return (
    <div className="bg-[#19A530] p-16 rounded-3xl mb-4 text-white shrink-0 divide-y">
      {item.map((item, index) => (
        <FAQRow
          key={index}
          item={item}
          isExpanded={expandedIndex === index}
          onToggle={() => toggleRow(index)}
        />
      ))}
    </div>
  );
};

export default FAQItem;
