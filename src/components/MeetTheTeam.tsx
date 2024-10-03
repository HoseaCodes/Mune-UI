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
    setIsExpanded(null); // Reset expanded state on member change
  };

  const handleToggleExpand = (index: number) => {
    setIsExpanded(index === isExpanded ? null : index); // Toggle the expanded state
  };

  const handleClose = () => {
    setIsExpanded(null);
  };

  const truncateAfterFirstSentence = (
    paragraph: string
  ) => {
    const sentences = paragraph.split(
      /(?<=[.!?])\s+|<br\s*\/?>/i
    );
    return sentences[0];
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
        <div className="pe-4 rounded-lg flex items-start space-x-6 z-10 transition-all duration-300 ease-in-out w-ful h-auto">
          <img
            src={teamMembers[activeIndex].image}
            alt={`headshot photo of ${teamMembers[activeIndex].name}, ${teamMembers[activeIndex].role} at Mun-e`}
            className="w-40 h-40 rounded-full shadow-md hidden md:block"
          />
          <div className="flex flex-col w-full gap-2">
            <h3 className="text-black text-[1.75rem] font-bold">
              {teamMembers[activeIndex].name},{' '}
              {teamMembers[activeIndex].role}
            </h3>
            <p className="text-gray-800 text-[1.375rem] italic">
              {teamMembers[activeIndex].school}
            </p>
            <div className="flex flex-start w-full text-gray-800 max-w-[63ch]">
              <p>
                {truncateAfterFirstSentence(
                  teamMembers[activeIndex].bio
                )}
                {'..'}
              </p>
            </div>
            <button
              onClick={() =>
                handleToggleExpand(activeIndex)
              }
              aria-label={'Show more'}
              className="flex flex-start w-full text-blue-500 mt-2"
            >
              {'Show More'}
            </button>
          </div>
        </div>
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
