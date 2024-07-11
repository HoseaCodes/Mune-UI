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
  school,
  role,
  image,
  bio,
  isActive,
  onClick,
}) => {
  const [firstName, lastName] = name.split(' ');
  return (
    <div
      className={`relative flex flex-col items-center p-4 rounded-lg cursor-pointer transition-all duration-300 ease-in-out ${isActive ? 'bg-[#CEE0D0]' : 'bg-[#F2F7F3]'} ${isActive ? 'mb-80' : ''}`}
      onClick={onClick}
      style={{
        width: '115px',
        height: '186.5px',
        padding: '12px 0 0 0',
        // marginBottom: '300px',
        gap: '16.5px',
        borderRadius: '15px',
        border: '2px solid transparent',
        borderTopColor: isActive
          ? '#CEE0D0'
          : 'transparent',
      }}
    >
      <img
        src={image}
        alt={name}
        className="w-24 h-24 rounded-full mb-2"
      />
      <p className="text-center text-black font-bold">
        {firstName}
        <br />
        {lastName}
      </p>
      {isActive && (
        <div
          className="absolute left-1/2 transform -translate-x-1/2 mt-6 p-6 rounded-lg flex items-start space-x-6 z-10 transition-all duration-300 ease-in-out w-full max-w-[1136px] h-auto md:h-[200px]"
          style={{
            marginTop: '260px',
            marginLeft: '320px',
            width: '765px',
            height: '200px',
            gap: '78px',
            justifyContent: 'flex-start',
          }}
        >
          <img
            src={image}
            alt={name}
            className="w-40 h-40 rounded-full shadow-md"
          />
          <div className="flex flex-col w-full">
            <h3 className="text-black text-xl font-bold">
              {name}
            </h3>
            <p className="text-gray-600 italic">{school}</p>
            <p className="text-gray-800 mt-2">{role}</p>
            <div className="flex flex-start w-full text-gray-800 mt-2">
              {bio}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TeamMember;
