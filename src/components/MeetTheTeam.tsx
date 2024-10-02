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
      className={`${isExpanded === activeIndex && 'overflow-hidden'} bg-gray-100 py-12 sm:px-8 md:px-12 lg:px-2 mx-auto max-w-[1184px] flex flex-col gap-20`}
    >
      <div className="flex flex-col justify-center overflow-x-scroll scroll-smooth space-x-2 scrollbar-hide md:overflow-x-visible md:flex-wrap gap-10">
        <h2 className="w-full text-left text-2xl md:text-3xl lg:text-5xl font-bold">
          Meet the Team
        </h2>
        <div className="flex flex-nowrap gap-[85px] w-full">
          {teamMembers.map((member, index) => (
            // COMPONENT: TEAM MEMBER CARD
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
      {/* COMPONENT: ACTIVE TEAM MEMBER BIO */}
      {activeIndex !== null && (
        <div className="mt-6 md:px-12 pe-4 rounded-lg flex items-start space-x-6 z-10 transition-all duration-300 ease-in-out w-ful h-auto">
          <img
            src={teamMembers[activeIndex].image}
            alt={teamMembers[activeIndex].name}
            className="w-40 h-40 rounded-full shadow-md hidden md:block"
          />
          <div className="flex flex-col w-full">
            <h3 className="text-black text-xl font-bold">
              {teamMembers[activeIndex].name}
            </h3>
            <p className="text-gray-600 italic">
              {teamMembers[activeIndex].school}
            </p>
            <p className="text-gray-800 mt-2">
              {teamMembers[activeIndex].role}
            </p>
            <div className="flex flex-start w-full text-gray-800 mt-2">
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
          // COMPONENT: MODAL FOR TEAM MEMBER BIO
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
