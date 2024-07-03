import React from 'react';
import { LearnMoreButton } from './Button';

interface TrendingCardProps {
  title: string;
  image: string;
}

const TrendingCard: React.FC<TrendingCardProps> = ({ title, image }) => {
  return (
    <div className="max-w-[246px] h-[300px] w-[272px] p-4 rounded-3xl bg-green-600 text-white text-left mb-10 md:mb-0 flex-shrink-0">
      <h2 className="w-[240px] h-[84px] font-poppins text-xl font-bold leading-7 text-white mb-2.5">
        {title}
      </h2>
      <img
        src={image}
        alt={title}
        className="w-[238px] h-[128px] rounded-3xl mt-4 mb-6"
      />
      <LearnMoreButton text="Learn More" />
    </div>
  );
};

export default TrendingCard;
