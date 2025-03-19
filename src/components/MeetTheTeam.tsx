import React, { useState, useRef, useEffect } from 'react';
import TeamMember from './TeamMember';
import BioOverlay from './BiosOverlay';
import { teamMembers } from '../constants/bios';

const MeetTheTeam: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [isExpanded, setIsExpanded] = useState<number | null>(null);
  const sliderRef = useRef<HTMLDivElement>(null);
  const tabletSliderRef = useRef<HTMLDivElement>(null);
  const memberRefs = useRef<(HTMLDivElement | null)[]>([]);
  const tabletMemberRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Initialize refs array for team members
  useEffect(() => {
    memberRefs.current = memberRefs.current.slice(0, teamMembers.length);
    tabletMemberRefs.current = tabletMemberRefs.current.slice(0, teamMembers.length);
  }, [teamMembers.length]);

  const handleMemberClick = (index: number) => {
    setActiveIndex(index);
    setIsExpanded(null); // Reset expanded state on member change
    
    // Scroll to center the selected member on mobile
    if (window.innerWidth < 768 && memberRefs.current[index]) {
      centerMember(index, sliderRef, memberRefs);
    } 
    // Scroll to center the selected member on tablet
    else if (window.innerWidth >= 768 && window.innerWidth < 1024 && tabletMemberRefs.current[index]) {
      centerMember(index, tabletSliderRef, tabletMemberRefs);
    }
  };

  const centerMember = (
    index: number, 
    containerRef: React.RefObject<HTMLDivElement>, 
    elemRefs: React.MutableRefObject<(HTMLDivElement | null)[]>
  ) => {
    const element = elemRefs.current[index];
    if (element && containerRef.current) {
      const containerWidth = containerRef.current.offsetWidth;
      const elementWidth = element.offsetWidth;
      const elementLeft = element.offsetLeft;
      
      // Calculate position to center the element
      const scrollPosition = elementLeft - (containerWidth / 2) + (elementWidth / 2);
      
      containerRef.current.scrollTo({
        left: scrollPosition,
        behavior: 'smooth'
      });
    }
  };

  const handleToggleExpand = (index: number) => {
    setIsExpanded(index === isExpanded ? null : index); // Toggle the expanded state
  };

  const handleClose = () => {
    setIsExpanded(null);
  };

  const truncateAfterFirstSentence = (paragraph: string) => {
    const sentences = paragraph.split(/(?<=[.!?])\s+|<br\s*\/?>/i);
    return sentences[0];
  };

  const scroll = (direction: 'left' | 'right', containerRef: React.RefObject<HTMLDivElement>) => {
    if (containerRef.current) {
      const scrollAmount = 150;
      const currentScroll = containerRef.current.scrollLeft;
      containerRef.current.scrollTo({
        left: direction === 'left' ? currentScroll - scrollAmount : currentScroll + scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className={"bg-gray-100 py-12 sm:px-8 md:px-12 lg:px-2 mx-auto max-w-[1184px]"}>
      {/* Mobile view (hidden on larger screens) */}
      <div className="sm:hidden">
        <h2 className="text-2xl font-bold mb-8 mt-8 text-center">
          Meet the Team
        </h2>
        
        <div className="relative">
          <button 
            onClick={() => scroll('left', sliderRef)}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white bg-opacity-80 rounded-full p-1 shadow-md flex items-center justify-center w-8 h-8"
            aria-label="Scroll left"
          >
            {"<"}
          </button>
          
          {/* Team members scrollable container for mobile */}
          <div 
            ref={sliderRef}
            className="flex overflow-x-auto scrollbar-hide scroll-smooth py-2 px-8 gap-4"
          >
            {teamMembers.map((member, index) => (
              <div 
                key={index} 
                className="flex-shrink-0"
                ref={(el) => memberRefs.current[index] = el}
              >
                <TeamMember
                  member={member}
                  isActive={activeIndex === index}
                  onClick={() => handleMemberClick(index)}
                  onToggleExpand={() => handleToggleExpand(index)}
                />
              </div>
            ))}
          </div>
          <button 
            onClick={() => scroll('right', sliderRef)}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white bg-opacity-80 rounded-full p-1 shadow-md flex items-center justify-center w-8 h-8"
            aria-label="Scroll right"
          >
            {">"}
          </button>
        </div>
      </div>

      {/* Tablet view (hidden on mobile and desktop) */}
      <div className="hidden sm:block lg:hidden">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 mt-8 text-center">
          Meet the Team
        </h2>
        
        <div className="relative">
          <button 
            onClick={() => scroll('left', tabletSliderRef)}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white bg-opacity-80 rounded-full p-1 shadow-md flex items-center justify-center w-8 h-8"
            aria-label="Scroll left"
          >
            {"<"}
          </button>
          
          {/* Team members scrollable container for tablet */}
          <div 
            ref={tabletSliderRef}
            className="flex overflow-x-auto scrollbar-hide scroll-smooth py-2 px-8 gap-8"
          >
            {teamMembers.map((member, index) => (
              <div 
                key={index} 
                className="flex-shrink-0"
                ref={(el) => tabletMemberRefs.current[index] = el}
              >
                <TeamMember
                  member={member}
                  isActive={activeIndex === index}
                  onClick={() => handleMemberClick(index)}
                  onToggleExpand={() => handleToggleExpand(index)}
                />
              </div>
            ))}
          </div>
          <button 
            onClick={() => scroll('right', tabletSliderRef)}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white bg-opacity-80 rounded-full p-1 shadow-md flex items-center justify-center w-8 h-8"
            aria-label="Scroll right"
          >
            {">"}
          </button>
        </div>
      </div>

      {/* Desktop layout (hidden on mobile and tablet) */}
      <div className="hidden lg:flex justify-center overflow-x-visible flex-wrap">
        <h2 className="text-3xl lg:text-4xl font-bold mb-8 mt-8">
          Meet the Team
        </h2>
        <div className="flex flex-nowrap space-x-32 my-10">
          {teamMembers.map((member, index) => (
            <TeamMember
              key={index}
              member={member}
              isActive={activeIndex === index}
              onClick={() => handleMemberClick(index)}
              onToggleExpand={() => handleToggleExpand(index)}
            />
          ))}
        </div>
      </div>      
      {activeIndex !== null && (
        <div className="mt-6 md:px-12 pe-4 rounded-lg flex items-start space-x-6 z-10 transition-all duration-300 ease-in-out w-ful h-auto">
          <img
            src={teamMembers[activeIndex].image}
            alt={teamMembers[activeIndex].name}
            className="w-40 h-36 rounded-full shadow-md hidden md:block object-cover"
          />
          <div className="flex flex-col w-full">
            <h3 className="text-black text-xl font-bold">
              {teamMembers[activeIndex].name}
            </h3>
            <p className="text-gray-600 italic">{teamMembers[activeIndex].school}</p>
            <p className="text-gray-800 mt-2">{teamMembers[activeIndex].role}</p>
            <div className="flex flex-start w-full text-gray-800 mt-2">
              <p>{truncateAfterFirstSentence(teamMembers[activeIndex].bio)}{".."}</p>
            </div>
            <button
              onClick={() => handleToggleExpand(activeIndex)}
              aria-label={'Show more'}
              className="flex flex-start w-full text-blue-500 mt-2"
            >
              {'Show More'}
            </button>
          </div>
        </div>
      )}   
      {activeIndex !== null && isExpanded !== null && activeIndex === isExpanded && (
        <BioOverlay
          name={teamMembers[activeIndex].name}
          school={teamMembers[activeIndex].school}
          role={teamMembers[activeIndex].role}
          image={teamMembers[activeIndex].image}
          bio={teamMembers[activeIndex].bio}
          onClose={handleClose}
        />
      )}
    </div>
  );
};

export default MeetTheTeam;