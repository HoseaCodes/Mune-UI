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
      className="bg-white text-green-500 font-bold py-2 px-6 rounded-lg shadow-lg"
    >
      {text}
    </button>
  );
};

export default WhiteMuneButton;
