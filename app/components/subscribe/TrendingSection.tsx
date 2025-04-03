import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';
import Image from 'next/image';

// Define trending lessons as an array
const trendingLessons = [
  {
    title: 'Growing Your Wealth',
    imageSrc: '/images/subscribe/growing-your-wealth-image.jpeg',
    bgColor: '#005159',
  },
  {
    title: 'Strategies to Pay Off Loans',
    imageSrc: '/images/subscribe/strategies-to-payoff-image.jpeg',
    bgColor: '#005159',
  },
  {
    title: 'How to Manage Your Money',
    imageSrc: '/images/subscribe/how-to-manage-your-money-image.jpeg',
    bgColor: '#005159',
  },
  {
    title: 'How to Build an Emergency Fund',
    imageSrc: '/images/subscribe/how-to-build-emergency-fund-image.jpeg',
    bgColor: '#005159',
  },
];

const TrendingSection = () => {
  return (
    <div className='flex flex-col space-y-4 items-center w-full'>
      <p className='text-4xl font-bold self-start'>Trending</p>
      <Carousel
        opts={{
          align: 'start',
          containScroll: false, // Ensures proper card visibility
        }}
        className='w-full border-none rounded-3xl overflow-visible xl:hidden'
      >
        {/* Apply flex and gap-4 to ensure 16px spacing */}
        <CarouselContent className='flex'>
          {trendingLessons.map((lesson, index) => (
            <CarouselItem
              key={index}
              className='flex-none basis-[calc(15%)-16px]'
            >
              <Card
                className='w-[266px] h-[366px] p-0'
                style={{ backgroundColor: lesson.bgColor }}
              >
                <CardContent className='flex flex-col items-center justify-center p-4'>
                  <div className='flex flex-col space-y-8 items-start'>
                    <p className='text-[22px] text-primary-foreground text-start font-bold line-clamp-2'>
                      {lesson.title}
                    </p>
                    <Image
                      alt={lesson.title}
                      src={lesson.imageSrc}
                      width={234}
                      height={144}
                      className='w-[234px] h-[144px] object-cover rounded-2xl border-2 border-border'
                    />
                    <Button className='px-8 py-5 border-1 border-border bg-primary-foreground rounded-[12px]'>
                      <p>Start Lesson</p>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      <div className='hidden xl:grid grid-cols-4 gap-2 w-full'>
        {trendingLessons.map((lesson, index) => (
          <div key={index} className='flex justify-center'>
            <Card
              className='w-[266px] h-[366px] p-0'
              style={{ backgroundColor: lesson.bgColor }}
            >
              <CardContent className='flex flex-col items-center justify-center p-4'>
                <div className='flex flex-col space-y-8 items-start'>
                  <p className='text-[22px] text-primary-foreground text-start font-bold line-clamp-2'>
                    {lesson.title}
                  </p>
                  <Image
                    alt={lesson.title}
                    src={lesson.imageSrc}
                    width={234}
                    height={144}
                    className='w-[234px] h-[144px] object-cover rounded-2xl border-2 border-border'
                  />
                  <Button className='px-8 py-5 border-1 border-border bg-primary-foreground rounded-[12px]'>
                    <p>Start Lesson</p>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrendingSection;
