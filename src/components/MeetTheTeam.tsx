import React, { useState } from 'react';
import TeamMember from './TeamMember';
import BioOverlay from './BiosOverlay';
import marques from '../assets/Marques-Zahir.png';
import casey from '../assets/Casey-Bass.png';
import ashley from '../assets/Ashley-Lewis.png';
import darrias from '../assets/Darrias-Thomas.png';
import dana from '../assets/Dana-Simone.png';
import dominique from '../assets/Dominique-Hosea.png';

// const MeetTheTeam: React.FC = () => {
//   const [activeIndex, setActiveIndex] = useState<
//     number | null
//   >(null);

//   const handleClick = (index: number) => {
//     setActiveIndex((prevIndex) =>
//       prevIndex === index ? null : index
//     );
//   };

//   return (
//     <div className="bg-gray-100 py-12 px-4 sm:px-8 md:px-12 lg:px-16">
//       <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-left mb-8 ml-0 md:2 ml-20">
//         Meet the Team
//       </h2>
//       <div className="flex overflow-x-scroll scroll-smooth space-x-2 scrollbar-hide md:overflow-x-visible md:flex-wrap">
//         <div className="flex flex-nowrap space-x-5 md:space-x-28 md:ml-16">
//           <TeamMember
//             name="Marques Zahir"
//             school="School"
//             role="CEO"
//             image={marques}
//             bio="Marques Zahir is the CEO and founder of Mun-e, a groundbreaking financial management app dedicated to financial wellness for Black and Brown communities.<br /><br />
//                 Fueled by a desire to see economic equity for people of color, Marques identified a need for financial tools that resonated with the cultural experiences of Black and Brown users. Mun-e goes beyond traditional budgeting apps. It provides financial education that reflects the realities of these communities, dismantles myths surrounding wealth creation specific to their situations, and fosters a supportive online space for users to achieve financial goals together.<br /><br />
//                 Before launching Mun-e, Marques thrived in the world of fintech startups and entrepreneurship. However, his true passion resided in closing the racial wealth gap.  He channeled his expertise to develop a platform that celebrates the financial journeys of Black and Brown users, while equipping them with the tools and knowledge to navigate the complexities of personal finance.<br /><br />
//                 Marques regularly contributes to financial literacy publications aimed at Black and Brown audiences. His dedication to financial justice extends far beyond the app; Marques actively works to dismantle systemic barriers that hinder wealth creation within these communities."
//             isActive={activeIndex === 0}
//             onClick={() => handleClick(0)}
//           />
//           <TeamMember
//             name="Casey Bass"
//             school="School"
//             role="COO"
//             image={casey}
//             bio="Bio for Casey Bass. Pellentesque lectus lorem enim lacinia non ipsum. Posuere nunc consectetur malesuada nunc vitae ipsum."
//             isActive={activeIndex === 1}
//             onClick={() => handleClick(1)}
//           />
//           <TeamMember
//             name="Ashley Lewis"
//             school="School"
//             role="CFO"
//             image={ashley}
//             bio="Bio for Ashley Lewis. Pellentesque lectus lorem enim lacinia non ipsum. Posuere nunc consectetur malesuada nunc vitae ipsum."
//             isActive={activeIndex === 2}
//             onClick={() => handleClick(2)}
//           />
//           <TeamMember
//             name="Darrias Thomas"
//             school="School"
//             role="CTO"
//             image={darrias}
//             bio="Bio for Darrias Thomas. Pellentesque lectus lorem enim lacinia non ipsum. Posuere nunc consectetur malesuada nunc vitae ipsum."
//             isActive={activeIndex === 3}
//             onClick={() => handleClick(3)}
//           />
//           <TeamMember
//             name="Dana Simone"
//             school="School"
//             role="CMO"
//             image={dana}
//             bio="Bio for Dana Simone. Pellentesque lectus lorem enim lacinia non ipsum. Posuere nunc consectetur malesuada nunc vitae ipsum."
//             isActive={activeIndex === 4}
//             onClick={() => handleClick(4)}
//           />
//           <TeamMember
//             name="Dominique Hosea"
//             school="School"
//             role="CIO"
//             image={dominique}
//             bio="Bio for Dominique Hosea. Pellentesque lectus lorem enim lacinia non ipsum. Posuere nunc consectetur malesuada nunc vitae ipsum."
//             isActive={activeIndex === 5}
//             onClick={() => handleClick(5)}
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MeetTheTeam;




const MeetTheTeam: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [isExpanded, setIsExpanded] = useState(false);

  const teamMembers = [
    {
      name:'Marques Zahir',
      school:'School',
      role:'CEO',
      image:marques,
      bio:'Marques Zahir is the CEO and founder of Mun-e, a groundbreaking financial management app dedicated to financial wellness for Black and Brown communities.<br /><br />Fueled by a desire to see economic equity for people of color, Marques identified a need for financial tools that resonated with the cultural experiences of Black and Brown users. Mun-e goes beyond traditional budgeting apps. It provides financial education that reflects the realities of these communities, dismantles myths surrounding wealth creation specific to their situations, and fosters a supportive online space for users to achieve financial goals together.<br /><br />Before launching Mun-e, Marques thrived in the world of fintech startups and entrepreneurship. However, his true passion resided in closing the racial wealth gap.  He channeled his expertise to develop a platform that celebrates the financial journeys of Black and Brown users, while equipping them with the tools and knowledge to navigate the complexities of personal finance.<br /><br />Marques regularly contributes to financial literacy publications aimed at Black and Brown audiences. His dedication to financial justice extends far beyond the app; Marques actively works to dismantle systemic barriers that hinder wealth creation within these communities.',
    },
    {
      name: 'Casey Bass',
      school: 'School',
      role: 'COO',
      image: casey,
      bio: 'Casey Bass is the COO at Mun-e, ensuring the company operates smoothly...',
    },
    {
      name: 'Ashley Lewis',
      school: 'School',
      role: 'CFO',
      image: ashley,
      bio: 'Ashley Lewis manages the finances of Mun-e, bringing extensive experience in financial management...',
    },
    {
      name: 'Darrias Thomas',
      school: 'School',
      role: 'CTO',
      image: darrias,
      bio: 'Darrias Thomas oversees the technology and development at Mun-e...',
    },
    {
      name: 'Dana Simone',
      school: 'School',
      role: 'CMO',
      image: dana,
      bio: 'Dana Simone leads the marketing efforts at Mun-e, driving the brand forward...',
    },
    {
      name: 'Dominique Hosea',
      school: 'School',
      role: 'CIO',
      image: dominique,
      bio: 'Dominique Hosea is responsible for information management and strategy at Mun-e...',
    },
  ];

  const handleMemberClick = (index: number) => {
    setActiveIndex(index);
    setIsExpanded(false);
  };

  const handleClose = () => {
    setActiveIndex(null);
  };

  const handleToggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="bg-gray-100 py-12 px-4 sm:px-8 md:px-12 lg:px-16">
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-left mb-8 ml-0 md:2 ml-20">
        Meet the Team
      </h2>
      <div className="flex overflow-x-scroll scroll-smooth space-x-2 scrollbar-hide md:overflow-x-visible md:flex-wrap">
        <div className="flex flex-nowrap space-x-5 md:space-x-28 md:ml-16">
          {teamMembers.map((member, index) => (
            <TeamMember
              key={index}
              name={member.name}
              image={member.image}
              isActive={activeIndex === index}
              onClick={() => handleMemberClick(index)} school={''} role={''} bio={''}            />
          ))}
        </div>
      </div>
      {activeIndex !== null && (
        <BioOverlay
          name={teamMembers[activeIndex].name}
          school={teamMembers[activeIndex].school}
          role={teamMembers[activeIndex].role}
          image={teamMembers[activeIndex].image}
          bio={teamMembers[activeIndex].bio}
          isExpanded={isExpanded}
          onClose={handleClose}
          onToggleExpand={handleToggleExpand}
        />
      )}
    </div>
  );
};

export default MeetTheTeam;
