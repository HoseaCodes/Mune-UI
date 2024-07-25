import React, { useState } from 'react';
import TeamMember from './TeamMember';
import BioOverlay from './BiosOverlay';
import { teamMembers } from '../constants/bios';

const MeetTheTeam: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<
    number | null
  >(null);
  const [isExpanded, setIsExpanded] = useState<
  number | null
>(null);

  const handleMemberClick = (index: number) => {
    setActiveIndex(index);
  };
  
  const handleToggleExpand = (index: number) => {
    setIsExpanded(index);
  };

  const handleClose = () => {
    setActiveIndex(null);
    setIsExpanded(null)
  };

  return (
    <div className={`${isExpanded === activeIndex && "overflow-hidden"} bg-gray-100 py-12 px-4 sm:px-8 md:px-12 lg:px-16`}>
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-left mb-8 ml-0 md:2 ml-20">
        Meet the Team
      </h2>
      <div className="flex overflow-x-scroll scroll-smooth space-x-2 scrollbar-hide md:overflow-x-visible md:flex-wrap">
        <div className=" flex flex-nowrap space-x-5 md:space-x-28 md:ml-16">
        {teamMembers.map((member, index) => (
            <TeamMember
              key={index}
              member={member}
              isActive={activeIndex === index}
              onToggleExpand={() => handleToggleExpand(index)}
              onClick={() => handleMemberClick(index)} />
          ))}
        </div>
      </div>
      {activeIndex !== null && isExpanded !== null && activeIndex === isExpanded && (
        <BioOverlay
          name={teamMembers[activeIndex].name}
          school={teamMembers[activeIndex].school}
          role={teamMembers[activeIndex].role}
          image={teamMembers[activeIndex].image}
          bio={teamMembers[activeIndex].bio}
          onClose={handleClose}
        />
      )}
    </div>
  );
};

export default MeetTheTeam;