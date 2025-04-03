import React, { useEffect, useRef, useState } from 'react';
import UserOne from '../../../public/images/home/user1.png';
import UserTwo from '../../../public/images/home/user2.png';
import UserThree from '../../../public/images/home/user3.png';

const testimonials = [
  {
    image: UserOne.src,
    name: 'Mary Thomas',
    school: 'Howard University',
    feedback:
      "Balancing school and work was tough until I found Mun-e. It's more than just an app—it's my financial assistant. I easily send money, save, and even started investing. Mun-e has transformed how I manage my finances and taught me so much about money management. I love it!",
  },
  {
    image: UserTwo.src,
    name: 'John Lewis',
    school: 'Spelman College',
    feedback:
      'Mun-e has completely changed how I handle my finances. From quick transfers with classmates to tracking my spending habits, everything is simpler now. Plus, the investment features introduced me to new ways to grow my savings safely. Every student should have this app!',
  },
  {
    image: UserThree.src,
    name: 'Seth Howard',
    school: 'Austin, TX',
    feedback:
      "Mun-e has been a game-changer for my college life. It's so easy to split bills for group projects or outings. The best part? I'm learning about managing finances in a way that's actually fun and engaging. It's perfect for any student who wants to get a grip on their financial future.",
  },
];

const HearFromOurUsersSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [translateX, setTranslateX] = useState(0);
  const [itemWidth, setItemWidth] = useState(449);
  const sliderRef = useRef(null);

  useEffect(() => {
    const updateItemWidth = () => {
      setItemWidth(window.innerWidth < 768 ? 230 : 449);
    };
    updateItemWidth();
    window.addEventListener('resize', updateItemWidth);
    return () => window.removeEventListener('resize', updateItemWidth);
  }, []);

  const handleInteractionStart = (clientX: number) => {
    setIsDragging(true);
    setStartX(clientX);
    document.body.style.cursor = 'grabbing';
    document.body.style.userSelect = 'none';
  };

  const handleInteractionMove = (clientX: number) => {
    if (!isDragging) return;
    setTranslateX(clientX - startX);
  };

  const handleInteractionEnd = () => {
    setIsDragging(false);
    document.body.style.cursor = 'default';
    document.body.style.userSelect = 'auto';

    if (translateX > 100 && currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else if (translateX < -100 && currentIndex < testimonials.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
    setTranslateX(0);
  };

  return (
    <div className='flex flex-col space-y-5 justify-center items-center sm:p-9 w-full'>
      <p className='text-3xl font-bold self-center sm:self-start xl:self-start'>
        Hear from Our Users
      </p>
      <p className='sm:self-start xl:w-[731px] xl:text-2xl self-center'>
        See what our early adopters are saying about how Mun-e has streamlined
        their financial operations and enhanced their learning.
      </p>
      <div
        className='overflow-hidden cursor-grab relative z-40 w-full'
        ref={sliderRef}
        onMouseDown={(e) => handleInteractionStart(e.clientX)}
        onMouseMove={(e) => handleInteractionMove(e.clientX)}
        onMouseUp={handleInteractionEnd}
        onMouseLeave={handleInteractionEnd}
        onTouchStart={(e) => handleInteractionStart(e.touches[0].clientX)}
        onTouchMove={(e) => handleInteractionMove(e.touches[0].clientX)}
        onTouchEnd={handleInteractionEnd}
        style={{
          cursor: isDragging ? 'grabbing' : 'grab',
          WebkitMaskImage:
            'linear-gradient(to right, rgba(0,0,0,1) 40%, rgba(0,0,0,0))',
          maskImage:
            'linear-gradient(to right, rgba(0,0,0,1) 40%, rgba(0,0,0,0))',
        }}
      >
        <div
          className='flex gap-2 md:gap-10 transition-transform duration-500 ease-out flex-nowrap'
          style={{
            transform: `translateX(calc(-${
              currentIndex * itemWidth
            }px + ${translateX}px))`,
            transition: isDragging ? 'none' : 'transform 0.5s ease-out',
          }}
        >
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className='w-full max-w-[230px] md:max-w-[449px] border-4 rounded-3xl md:rounded-[36px] space-y-6 p-4 md:p-8 border-[#CEE0D0] shrink-0'
            >
              <div className='flex items-center gap-4'>
                <img
                  src={testimonial.image}
                  className='w-[33px] md:w-auto'
                  alt={testimonial.name}
                />
                <div>
                  <div className='text-black font-bold text-xs md:text-sm'>
                    {testimonial.name}
                  </div>
                  <div className='text-xs md:text-sm'>{testimonial.school}</div>
                </div>
              </div>
              <p className='text-xs md:text-base'>“{testimonial.feedback}”</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HearFromOurUsersSection;
