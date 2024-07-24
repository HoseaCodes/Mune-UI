import React, { useState } from 'react';
import TeamMember from './TeamMember';
import BioOverlay from './BiosOverlay';
import marques from '../assets/Marques-Zahir.png';
import casey from '../assets/Casey-Bass.png';
import ashley from '../assets/Ashley-Lewis.png';
import darrias from '../assets/Darrias-Thomas.png';
import dana from '../assets/Dana-Simone.png';
import dominique from '../assets/Dominique-Hosea.png';

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
      bio: 'Casey Bass is a senior leader who brings a unique foundation of business acumen, data management expertise, technical knowledge, and delivery leadership through his diverse consulting and industry background. Strong initiative, a passion for driving change in the business, and the ability to develop valuable relationships make him an asset within any organization.',
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
      bio: 'Darrias Thomas is an award winning Content and Brand strategist with over 15 years of experience in high level video production. Over the past 4 years, has helped many brands and businesses elevate their look and feel, as well as amplified their brand through video, social media, graphic design and brand identity. Although most of his time is spent as an entrepreneur, he also enjoys time giving back to his community and building meaningful relationships.',
    },
    {
      name: 'Dana Simone',
      school: 'School',
      role: 'CMO',
      image: dana,
      bio: 'DanaSimone Stovall is a woman with a purpose on fire as philanthropist, women empowerment advocate, former talk show host, public speaker, bestselling author; and corporate trainer, instructor, leader and mentor.  Her career includes 32 years of federal bank regulatory experience in risk management, consumer protection, economic inclusion, and financial literacy across the US.  She is a fierce supporter of Historically Black Colleges and Universities as a board trustee and president of a national alumni association.',
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
