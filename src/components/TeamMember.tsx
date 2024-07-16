import React, { useState, useEffect, useRef } from 'react';

interface TeamMemberProps {
  name: string;
  school: string;
  role: string;
  image: string;
  bio: string;
  isActive: boolean;
  onClick: () => void;
}

const MAX_BIO_LENGTH = 100; // Adjust the length as per requirement

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
  const [isExpanded, setIsExpanded] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleToggleExpand = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsExpanded(!isExpanded);
  };

  const truncatedBio = bio.length > MAX_BIO_LENGTH ? bio.substring(0, MAX_BIO_LENGTH) + '...' : bio;

  useEffect(() => {
    if (isActive && containerRef.current) {
      containerRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }, [isActive]);

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
        borderTopColor: isActive ? '#CEE0D0' : 'transparent',
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
          ref={containerRef}
          className="fixed inset-0 flex items-center justify-center bg-custom-white bg-opacity-10 z-50"
        >
          <div
            className="relative bg-custom-white p-6 rounded-lg flex items-start space-x-6 z-10 transition-all duration-300 ease-in-out w-full max-w-[1136px] h-auto md:h-[200px]"
            style={{
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
                {isExpanded ? bio : truncatedBio}
                <button
                  onClick={handleToggleExpand}
                  aria-label={isExpanded ? 'Show less' : 'Show more'}
                  className="text-blue-500 ml-2"
                >
                  {isExpanded ? 'Show Less' : 'Show More'}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TeamMember;
