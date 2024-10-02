import React from 'react';
import { TeamMemberProps } from '../interfaces/teamMembers';

const TeamMember: React.FC<TeamMemberProps> = ({
  member,
  isActive,
  onClick,
}) => {
  const { name, image } = member;
  const [firstName, lastName] = name.split(' ');

  return (
    <button
      className={`relative flex rounded-2xl w-[115px] h-[186.5px] gap-4 flex-col justify-between items-center p-3 transition-all duration-300 ease-in-out ${isActive ? 'bg-[#CEE0D0]' : 'bg-[#F2F7F3]'}`}
      onClick={onClick}
    >
      <img
        src={image}
        alt={name}
        className="w-24 h-24 rounded-full border-2 border-custom-bgreen"
      />
      <p className="text-center text-black font-bold font text-[1.375rem] leading-7">
        {firstName}
        <br />
        {lastName}
      </p>
    </button>
  );
};

export default TeamMember;
