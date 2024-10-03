import React from 'react';
import { MemberProps } from '../../interfaces/teamMembers';

export const ExpandedTeamCard: React.FC<{
  teamMembers: MemberProps[];
  index: number;
  handleToggleExpand: (index: number) => void;
}> = ({ teamMembers, index, handleToggleExpand }) => {
  const truncateAfterFirstSentence = (
    paragraph: string
  ) => {
    const sentences = paragraph.split(
      /(?<=[.!?])\s+|<br\s*\/?>/i
    );
    return sentences[0];
  };

  return (
    <div className="pe-4 rounded-lg flex items-start space-x-6 z-10 transition-all duration-300 ease-in-out w-ful h-auto">
      <img
        src={teamMembers[index].image}
        alt={`headshot photo of ${teamMembers[index].name}, ${teamMembers[index].role} at Mun-e`}
        className="w-40 h-40 rounded-full shadow-md hidden md:block"
      />
      <div className="flex flex-col w-full gap-2">
        <h3 className="text-black text-[1.75rem] font-bold">
          {teamMembers[index].name},{' '}
          {teamMembers[index].role}
        </h3>
        <p className="text-gray-800 text-[1.375rem] italic">
          {teamMembers[index].school}
        </p>
        <div className="flex flex-start w-full text-gray-800 max-w-[63ch]">
          <p>
            {truncateAfterFirstSentence(
              teamMembers[index].bio
            )}
            {'..'}
          </p>
        </div>
        <button
          onClick={() => handleToggleExpand(index)}
          type="button"
          aria-label="Show more"
          className="flex flex-start w-full text-blue-500 mt-2"
        >
          {'Show More'}
        </button>
      </div>
    </div>
  );
};
