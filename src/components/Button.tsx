import React from 'react';
import { Link } from 'react-router-dom';

interface ButtonProps {
  text: string;
  to?: string;
  onClick?: () => void;
  className?: string;
  textColor: string;
}

export const GreenButton: React.FC<ButtonProps> = ({
  text,
  to,
  onClick,
  className,
}) =>
  to ? (
    <Link
      to={to}
      className={`bg-[#19a530] text-[#f2f7f4] font-bold py-2 px-6 rounded-lg shadow-lg ${className}`}
    >
      {text}
    </Link>
  ) : (
    <button
      onClick={onClick}
      className={`bg-[#19a530] text-[#f2f7f4] font-bold py-2 px-6 rounded-lg shadow-lg ${className}`}
    >
      {text}
    </button>
  );

export const WhiteButton: React.FC<ButtonProps> = ({
  text,
  to,
  onClick,
  className,
  textColor,
}) =>
  to ? (
    <Link
      to={to}
      className={`bg-[#f2f7f4] ${textColor} font-bold py-2 px-6 rounded-lg shadow-lg ${className}`}
    >
      {text}
    </Link>
  ) : (
    <button
      onClick={onClick}
      className={`bg-[#f2f7f4] ${textColor} font-bold py-2 px-6 rounded-lg shadow-lg ${className}`}
    >
      {text}
    </button>
  );

export const LearnMoreButton: React.FC<ButtonProps> = ({
  text,
  to,
  onClick,
  className,
}) =>
  to ? (
    <Link
      to={to}
      className={`bg-[#f2f7f4] text-[#19a530] font-bold py-2 px-6 rounded-lg shadow-lg ${className}`}
    >
      {text}
    </Link>
  ) : (
    <button
      onClick={onClick}
      className={`bg-[#f2f7f4] text-[#19a530] font-bold py-2 px-6 rounded-lg shadow-lg ${className}`}
    >
      {text}
    </button>
  );
