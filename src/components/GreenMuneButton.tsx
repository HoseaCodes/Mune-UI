import React from 'react';

interface GreenMuneButtonProps {
  text: string;
  onClick?: () => void;
}

const GreenMuneButton: React.FC<GreenMuneButtonProps> = ({
  text,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className="bg-custom-green text-custom-white font-bold py-2 px-6 rounded-lg shadow-lg hover:shadow-lg hover:shadow-green-500 transition-shadow duration-300"
    >
      {text}
    </button>
  );
};

export default GreenMuneButton;
