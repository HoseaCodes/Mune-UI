// import React, { useState } from 'react';

// interface TeamMemberProps {
//   name: string;
//   school: string;
//   role: string;
//   image: string;
//   bio: string;
//   isActive: boolean;
//   onClick: () => void;
// }

// const MAX_BIO_LENGTH = 80; // Adjust the length as per requirement

// const TeamMember: React.FC<TeamMemberProps> = ({
//   name,
//   school,
//   role,
//   image,
//   bio,
//   isActive,
//   onClick,
// }) => {
//   const [firstName, lastName] = name.split(' ');
//   const [isExpanded, setIsExpanded] = useState(false);

//   const handleToggleExpand = (e: React.MouseEvent) => {
//     e.stopPropagation();
//     setIsExpanded(!isExpanded);
//   };

//   const truncatedBio = bio.length > MAX_BIO_LENGTH ? bio.substring(0, MAX_BIO_LENGTH) + '...' : bio;

//   return (
//     <div
//       className={`relative flex flex-col items-center p-4 rounded-lg cursor-pointer transition-all duration-300 ease-in-out ${isActive ? 'bg-[#CEE0D0]' : 'bg-[#F2F7F3]'} ${isActive ? 'mb-80' : ''}`}
//       onClick={onClick}
//       style={{
//         width: '115px',
//         height: '186.5px',
//         padding: '12px 0 0 0',
//         gap: '16.5px',
//         borderRadius: '15px',
//         border: '2px solid transparent',
//         borderTopColor: isActive ? '#CEE0D0' : 'transparent',
//       }}
//     >
//       <img
//         src={image}
//         alt={name}
//         className="w-24 h-24 rounded-full mb-2"
//       />
//       <p className="text-center text-black font-bold">
//         {firstName}
//         <br />
//         {lastName}
//       </p>
//       {isActive && (
//         <div className="fixed inset-0 flex items-center justify-center z-50">
//           <div
//             className="relative bg-custom-white p-6 rounded-lg flex flex-col md:flex-row items-start space-y-4 md:space-y-0 md:space-x-6 z-10 transition-all duration-300 ease-in-out w-full max-w-[90%] md:max-w-[1136px] h-auto"
//           >
//             <img
//               src={image}
//               alt={name}
//               className="w-24 h-24 md:w-40 md:h-40 rounded-full shadow-md mb-4 md:mb-0 mx-auto md:mx-0"
//             />
//             <div className="flex flex-col w-full text-center md:text-left">
//               <h3 className="text-black text-xl font-bold">
//                 {name}
//               </h3>
//               <p className="text-gray-600 italic">{school}</p>
//               <p className="text-gray-800 mt-2">{role}</p>
//               <div className="flex flex-col md:flex-row w-full text-gray-800 mt-2">
//                 <div className="flex-1" dangerouslySetInnerHTML={{ __html: isExpanded ? bio : truncatedBio }}></div>
//                 <button
//                   onClick={handleToggleExpand}
//                   aria-label={isExpanded ? 'Show less' : 'Show more'}
//                   className="text-blue-500 mt-2 md:mt-0 md:ml-2"
//                 >
//                   {isExpanded ? 'Show Less' : 'Show More'}
//                 </button>
//               </div>
//             </div>
//             <button
//               onClick={(e) => { e.stopPropagation(); setIsExpanded(false); }}
//               aria-label="Close"
//               className="absolute top-2 right-2 text-gray-500"
//             >
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default TeamMember;


import React, { useState } from 'react';

interface TeamMemberProps {
  name: string;
  school: string;
  role: string;
  image: string;
  bio: string;
  isActive: boolean;
  onClick: () => void;
}

const MAX_BIO_LENGTH = 80; // Adjust the length as per requirement

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

  const handleToggleExpand = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsExpanded(!isExpanded);
  };

  const truncatedBio = bio.length > MAX_BIO_LENGTH ? `${bio.substring(0, MAX_BIO_LENGTH)}...` : bio;

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
