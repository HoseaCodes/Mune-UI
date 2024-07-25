import React from 'react';
import { TeamMemberProps } from '../interfaces/teamMembers';

const TeamMember: React.FC<TeamMemberProps> = ({
  member,
  isActive,
  onToggleExpand,
  onClick,
}) => {
  const { name, school, role, image, bio } = member;
  const [firstName, lastName] = name.split(' ');
  const truncatedBio = bio.length > 80 ? `${bio.substring(0, 80)}...` : bio;
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth <= 640); 
    };

    checkIfMobile();

    window.addEventListener('resize', checkIfMobile);

    return () => {
      window.removeEventListener('resize', checkIfMobile);
    };
  }, []);

  const mobileStyles = {
    width: '350px',
    marginLeft: '80px',
    paddingRight: '2%',
    marginTop: '260px',
    height: '200px',
    gap: '78px',
    justifyContent: 'flex-start',
  };

  return (
    <div
      className={`relative flex flex-col items-center p-4 rounded-lg cursor-pointer transition-all duration-300 ease-in-out ${isActive ? 'bg-[#CEE0D0]' : 'bg-[#F2F7F3]'} ${isActive ? 'mb-80' : ''}`}
      onClick={onClick}
      style={{
        width: '115px',
        height: '186.5px',
        padding: '12px 0 0 0',
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
          style={isMobile ? mobileStyles : {
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
            className="w-40 h-40 rounded-full shadow-md hidden md:block"
          />
          <div className="flex flex-col w-full">
            <h3 className="text-black text-xl font-bold">
              {name}
            </h3>
            <p className="text-gray-600 italic">{school}</p>
            <p className="text-gray-800 mt-2">{role}</p>
            <div className="flex flex-start w-full text-gray-800 mt-2">
              <p dangerouslySetInnerHTML={{ __html: truncatedBio }}></p>
            </div>
              <button
                onClick={onToggleExpand}
                aria-label={'Show more'}
                className="flex flex-start w-full text-blue-500 mt-2"
              >
                {'Show More'}
              </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default TeamMember;