import React from 'react';
import { GreenButton } from '../Button';
import phoneIcon2 from '../../assets/phone-icon2.png';

interface ModalProps {
  title: string;
  description: string;
  isOpen: boolean;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({
  title,
  description,
  isOpen,
  onClose,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-custom-white rounded-3xl p-6 max-w-md w-full relative min-h-80 flex flex-col justify-center">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
        >
          &times;
        </button>
        <h1 className="text-2xl font-bold text-[#010A03] text-center mb-4">
          {title}
        </h1>
        <p className="text-sm text-[#010A03] text-center mb-4">
          {description}
        </p>
        <div className="flex items-center justify-center w-full max-w-md mx-auto mt-4">
          <div className="flex items-center justify-start w-full h-[60px] p-8 rounded-[14px] border-2 border-custom-bgreen bg-custom-white mb-5">
            <input
              type="text"
              placeholder="Enter your mobile number"
              className="w-full p-[10px] text-[14px] rounded-l-[30px] -m-6 border-none outline-none text-black bg-custom-white"
            />
            <GreenButton
              text="Get Mun-e"
              className="hidden lg:block whitespace-nowrap"
            />
            <img
              src={phoneIcon2}
              alt="Phone Icon"
              className="block lg:hidden h-6 w-6 ml-2"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
