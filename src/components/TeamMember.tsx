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
    <div
      className={`relative flex flex-col items-center rounded-lg cursor-pointer transition-all duration-300 ease-in-out ${
        isActive ? 'bg-[#CEE0D0]' : 'bg-[#F2F7F3]'
      } ${isActive ? 'mb-10' : ''}`}
      onClick={onClick}
      style={{
        width: '115px',
        height: '186.5px',
        padding: '12px 0 0 0',
        gap: '16.5px',
        borderRadius: '15px',
        border: '2px solid transparent',
        borderTopColor: isActive ? '#CEE0D0' : 'transparent',
      }}
    >
      <div 
        className="w-24 h-24 rounded-full mb-2 overflow-hidden bg-gray-100"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div 
          className="rounded-full w-full h-full bg-center bg-no-repeat bg-cover"
          style={{ 
            backgroundImage: `url(${image})`,
            backgroundPosition: 'center',
          }}
        />
      </div>
      <p className="text-center text-black font-bold">
        {firstName}
        <br />
        {lastName}
      </p>
    </div>
  );
};

export default TeamMember;