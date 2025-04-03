import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';
import React from 'react';
import SubscribeVideoPlayer from './SubscribeVideoPlayer';

const lessons = [
  {
    title: 'Budgeting Basics',
    subtitle: 'How to Manage Your Money',
    description:
      'Learn the fundamentals of creating and maintaining a budget to keep your finances on track.',
    bgColor: '#00B26C',
    videoSrc: '/videos/home/prototypeVideo.mp4',
    isNew: false,
  },
  {
    title: 'Credit Scores 101',
    subtitle: 'Building/Maintaining Good Credit',
    description:
      'Understand what a credit score is, how it’s calculated, tips for improving and maintaining a good score.',
    bgColor: '#007E4C',
    videoSrc: '/videos/home/prototypeVideo.mp4',
    isNew: true,
  },
  {
    title: 'Investing for Beginners',
    subtitle: 'Growing Your Wealth',
    description:
      'Get introduced to the basics of investing, different types of investments, and how to start investing wisely.',
    bgColor: '#005159',
    videoSrc: '/videos/home/prototypeVideo.mp4',
    isNew: false,
  },
];

const BudgetingBasicsSections = () => {
  return (
    <div className='flex flex-col space-y-4 items-center w-full h-auto overflow-visible'>
      <Carousel
        opts={{
          align: 'start',
          containScroll: false,
        }}
        className='w-full border-none overflow-visible'
      >
        <CarouselContent className='h-auto w-full overflow-visible mt-4 xl:gap-10'>
          {lessons.map((lesson, index) => (
            <CarouselItem
              key={index}
              className='w-full h-auto basis-[280px] md:basis-1/2 xl:basis-[calc(33.333%-23px)]'
            >
              <Card
                className={`relative h-[421px] w-[272px] xl:h-[453px] xl:max-w-[500px] xl:min-w-[370px] py-4 xl:px-10 xl:py-8 md:rounded-[24px] md:w-full xl:rounded-[48px]`}
                style={{ backgroundColor: lesson.bgColor }}
              >
                <CardContent className='flex flex-col items-center justify-center h-full px-4'>
                  <div className='flex flex-col items-start h-full'>
                    {lesson.isNew && (
                      <div className='absolute z-50 top-[-10px] right-[-10px] bg-[#D9E9E2] border-border border-2 text-[#007E4C] font-semibold px-3 py-2 rounded-2xl shadow-md text-[10px]'>
                        NEW!
                      </div>
                    )}
                    <p className='text-[22px] text-primary-foreground text-start font-bold line-clamp-3 leading-[28px] xl:min-h-[84px]'>
                      {lesson.title}: <br /> {lesson.subtitle}
                    </p>
                    <p className='text-[13px] text-start text-primary-foreground mt-4 xl:mt-2 line-clamp-3 font-extralight leading-[18px]'>
                      {lesson.description}
                    </p>
                    <Button className='px-8 py-5 border-1 border-border bg-primary-foreground rounded-[12px] mt-4 xl:self-center xl:py-5'>
                      <p>Start Lesson</p>
                    </Button>
                    <div className='mt-auto'>
                      <SubscribeVideoPlayer
                        src={lesson.videoSrc}
                        className='w-[242px] h-[141px] xl:self-center xl:w-[273px] xl:h-[160px]'
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default BudgetingBasicsSections;
