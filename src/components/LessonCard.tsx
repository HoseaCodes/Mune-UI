import React from 'react';
import { WhiteButton } from './Button';

interface LessonCardProps {
  title: string;
  description: string;
  buttonText: string;
  buttonTextColor: string;
  image: string;
  bgColor: string;
}

const LessonCard: React.FC<LessonCardProps> = ({ title, description, buttonText, image, bgColor, buttonTextColor }) => {
  return (
    <div className={`w-[272px] md:w-80 h-[421px] p-4 rounded-3xl ${bgColor} text-white text-left mb-10 md:mt-[-8rem] md:pl-10 flex-shrink-0 snap-start`}>
      <h2 className="w-full md:w-auto h-[84px] font-poppins text-xl font-bold leading-7 text-white text-left mb-2.5">
        {title}
      </h2>
      <p className="w-[240px] h-[54px] font-poppins text-[13px] font-normal leading-[18px] text-white mb-2.5">
        {description}
      </p>
      <div className='flex justify-center mb-5'>
        <WhiteButton text={buttonText} textColor={buttonTextColor} />
      </div>
      <img
        src={image}
        alt={title}
        className="w-[242px] h-[141px] rounded-3xl mt-4"
      />
    </div>
  );
};

export default LessonCard;
