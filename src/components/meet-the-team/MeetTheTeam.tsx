import React, { useState } from 'react';
import TeamMember from '../TeamMember';
import BioOverlay from '../BiosOverlay';
import { teamMembers } from '../../constants/bios';
import { ExpandedTeamCard } from './ExpandedTeamCard';

const MeetTheTeam: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<
    number | null
  >(null);
  const [isExpanded, setIsExpanded] = useState<
    number | null
  >(null);

  const handleMemberClick = (index: number) => {
    setActiveIndex(index);
    setIsExpanded(null); // Reset expanded state on member change
  };

  const handleToggleExpand = (index: number) => {
    setIsExpanded(index === isExpanded ? null : index); // Toggle the expanded state
  };

  const handleClose = () => {
    setIsExpanded(null);
  };

  return (
    <div
      className={`${isExpanded === activeIndex && 'overflow-hidden'} bg-gray-100 mx-auto max-w-[1184px] flex flex-col gap-20 my-32 px-6`}
    >
      <div className="flex flex-col justify-center overflow-x-scroll scroll-smooth space-x-2 scrollbar-hide md:overflow-x-visible md:flex-wrap gap-10">
        <h2 className="w-full text-left text-2xl md:text-3xl lg:text-5xl font-bold">
          Meet the Team
        </h2>
        <div className="flex flex-nowrap gap-[85px] w-full justify-between m-0 overflow-x-auto scrollbar-hide">
          {teamMembers.map((member, index) => (
            <TeamMember
              key={index}
              member={member}
              isActive={
                activeIndex === teamMembers.indexOf(member)
              }
              onClick={() =>
                handleMemberClick(
                  teamMembers.indexOf(member)
                )
              }
              onToggleExpand={() =>
                handleToggleExpand(
                  teamMembers.indexOf(member)
                )
              }
            />
          ))}
        </div>
      </div>
      {activeIndex !== null && (
        <ExpandedTeamCard
          teamMembers={teamMembers}
          index={activeIndex}
          handleToggleExpand={handleToggleExpand}
        />
      )}
      {activeIndex !== null &&
        isExpanded !== null &&
        activeIndex === isExpanded && (
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
