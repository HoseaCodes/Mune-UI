import React from 'react';

interface WhiteMuneButtonProps {
  text: string;
  onClick?: () => void;
}

const WhiteMuneButton: React.FC<WhiteMuneButtonProps> = ({
  text,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className="bg-custom-white text-[#010a03] font-bold py-2 px-6 rounded-lg shadow-lg hover:shadow-lg hover:shadow-custom-white transition-shadow duration-300"
    >
      {text}
    </button>
  );
};

export default WhiteMuneButton;
