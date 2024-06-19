import React from 'react';
import mainImage from '../assets/mission.png'; // Make sure to import the correct image
import WhiteMuneButton from '../components/WhiteMuneButton';

const MissionSection: React.FC = () => {
  return (
    <div className="bg-gray-100 py-12 px-4 sm:px-8 md:px-12 lg:px-16 rounded-[48px] border-2 max-w-full lg:max-w-[1184px] mx-auto mt-[40px] sm:mt-[80px] md:mt-[120px] lg:mt-[157px]">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-16">
        <img
          src={mainImage}
          alt="Mission"
          className="rounded-lg w-full lg:w-[50%] h-auto"
        />
        <div className="bg-white p-6 rounded-lg shadow-lg w-full lg:w-[50%]">
          <h2 className="text-black font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight mb-4">
            Our Mission: <br /> Elevate Your Finances
          </h2>
          <p className="text-black text-base sm:text-lg mb-4">
            Our mission is simple: help you get your money
            right and your knowledge tight. We’re here to
            make financial literacy easy and accessible, so
            you can flex your financial skills and secure
            your bag for the future.
          </p>
          <div className="flex space-x-4">
            <WhiteMuneButton text="Get Mun-e" />
            <button className="bg-transparent text-green-500 font-bold py-2 px-6 rounded-lg border-2 border-green-500">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MissionSection;
