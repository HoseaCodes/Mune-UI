import React from 'react';

const FAQRow: React.FC<{
  item: { question: string; answer: string };
  isExpanded: boolean;
  onToggle: () => void;
}> = ({ item, isExpanded, onToggle }) => (
  <div className="max-w-[240px]">
    <div
      className="flex items-center gap-2 border-green-400 cursor-pointer"
      onClick={onToggle}
    >
      <span>{item.question}</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={`h-5 w-5 transition-transform duration-[750ms] ${isExpanded ? 'rotate-180' : ''}`}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M19 9l-7 7-7-7"
        />
      </svg>
    </div>
    <div
      className={`pl-4 py-2 text-sm overflow-hidden transition-all duration-[750ms] ease-in-out ${
        isExpanded
          ? 'max-h-40 opacity-100'
          : 'max-h-0 opacity-0'
      }`}
    >
      {item.answer}
    </div>
  </div>
);

export default FAQRow;
