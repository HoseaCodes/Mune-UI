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
    <div className="bg-green-500 rounded-lg p-4 mb-4 text-white flex-1">
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
