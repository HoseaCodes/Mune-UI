import React from 'react';

interface TeamMemberProps {
  name: string;
  school: string;
  role: string;
  image: string;
  bio: string;
  isActive: boolean;
  onClick: () => void;
}

const TeamMember: React.FC<TeamMemberProps> = ({
  name,
  image,
  isActive,
  onClick,
}) => {
  const [firstName, lastName] = name.split(' ');

  return (
    <div
      className={`relative p-4 rounded-lg cursor-pointer transition-all duration-300 ease-in-out ${isActive ? 'bg-[#CEE0D0]' : 'bg-[#F2F7F3]'}`}
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
      <img src={image} alt={name} className="w-24 h-24 rounded-full mb-2" />
      <p className="text-center text-black font-bold">
        {firstName}
        <br />
        {lastName}
      </p>
    </div>
  );
};

export default TeamMember;
