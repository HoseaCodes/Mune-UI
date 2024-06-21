import React from 'react';
import missionImage from '../assets/black-couple.png'; // Make sure to import the correct image
import GreenMuneButton from '../components/GreenMuneButton';

const MissionSection: React.FC = () => {
  return (
    <div className="mb-36 mt-[-88px]">
      <div className="relative w-full">
        <img
          src={missionImage}
          alt="Mission"
          className="max-w-full lg:max-w-[4184px] mx-auto mt-[40px] sm:mt-[80px] md:mt-[120px] lg:mt-[157px] rounded-[48px] border-2 border-[#CEE0D0]"
        />
        <div className="absolute inset-0 flex flex-col justify-center pl-[1000px] pr-[48px] pt-[81.02px] pb-[81.98px]">
          <div className="bg-white p-6 rounded-lg shadow-lg w-[510px]">
            <h2 className="text-black font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight mb-4">
              Our Mission: <br /> Elevate Your Finances
            </h2>
            <p className="text-black text-base sm:text-lg mb-4">
              Our mission is simple: help you get your money
              right and your knowledge tight. We’re here to
              make financial literacy easy and accessible,
              so you can flex your financial skills and
              secure your bag for the future.
            </p>
            <div className="flex space-x-4">
              <GreenMuneButton text="Get Mun-e" />
              <button className="bg-transparent text-[#010A03] font-bold py-2 px-6 rounded-lg border-2 border-green-200">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MissionSection;
