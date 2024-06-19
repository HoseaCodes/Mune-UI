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
      className="bg-green-500 text-white font-bold py-2 px-6 rounded-lg shadow-lg"
    >
      {text}
    </button>
  );
};

export default GreenMuneButton;
