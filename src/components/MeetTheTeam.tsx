import React, { useState } from 'react';
import TeamMember from './TeamMember';
import marques from '../assets/Marques-Zahir.png';
import casey from '../assets/Casey-Bass.png';
import ashley from '../assets/Ashley-Lewis.png';
import darrias from '../assets/Darrias-Thomas.png';
import dana from '../assets/Dana-Simone.png';
import dominique from '../assets/Dominique-Hosea.png';

const MeetTheTeam: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<
    number | null
  >(null);

  const handleClick = (index: number) => {
    setActiveIndex((prevIndex) =>
      prevIndex === index ? null : index
    );
  };

  return (
    <div className="bg-gray-100 py-12 px-4 sm:px-8 md:px-12 lg:px-16">
      <h2
        className="text-3xl lg:text-4xl font-bold text-left mb-8 ml-72"
        style={{ fontSize: '48px' }}
      >
        Meet the Team
      </h2>
      <div className="flex flex-wrap justify-center gap-12 lg:gap-x-28 max-w-full">
        <TeamMember
          name="Marques Zahir"
          school="School"
          role="CEO"
          image={marques}
          bio="Lorem ipsum dolor sit amet consectetur. Pellentesque lectus lorem enim lacinia non ipsum. Posuere nunc consectetur malesuada nunc vitae ipsum."
          isActive={activeIndex === 0}
          onClick={() => handleClick(0)}
        />
        <TeamMember
          name="Casey Bass"
          school="School"
          role="COO"
          image={casey}
          bio="Bio for Casey Bass. Pellentesque lectus lorem enim lacinia non ipsum. Posuere nunc consectetur malesuada nunc vitae ipsum."
          isActive={activeIndex === 1}
          onClick={() => handleClick(1)}
        />
        <TeamMember
          name="Ashley Lewis"
          school="School"
          role="CFO"
          image={ashley}
          bio="Bio for Ashley Lewis. Pellentesque lectus lorem enim lacinia non ipsum. Posuere nunc consectetur malesuada nunc vitae ipsum."
          isActive={activeIndex === 2}
          onClick={() => handleClick(2)}
        />
        <TeamMember
          name="Darrias Thomas"
          school="School"
          role="CTO"
          image={darrias}
          bio="Bio for Darrias Thomas. Pellentesque lectus lorem enim lacinia non ipsum. Posuere nunc consectetur malesuada nunc vitae ipsum."
          isActive={activeIndex === 3}
          onClick={() => handleClick(3)}
        />
        <TeamMember
          name="Dana Simone"
          school="School"
          role="CMO"
          image={dana}
          bio="Bio for Dana Simone. Pellentesque lectus lorem enim lacinia non ipsum. Posuere nunc consectetur malesuada nunc vitae ipsum."
          isActive={activeIndex === 4}
          onClick={() => handleClick(4)}
        />
        <TeamMember
          name="Dominique Hosea"
          school="School"
          role="CIO"
          image={dominique}
          bio="Bio for Dominique Hosea. Pellentesque lectus lorem enim lacinia non ipsum. Posuere nunc consectetur malesuada nunc vitae ipsum."
          isActive={activeIndex === 5}
          onClick={() => handleClick(5)}
        />
      </div>
    </div>
  );
};

export default MeetTheTeam;
