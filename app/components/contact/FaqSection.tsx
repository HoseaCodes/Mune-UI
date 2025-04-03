import { Button } from '@/components/ui/button';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';
import { Card, CardContent } from '@/components/ui/card';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible';
import { ChevronRight } from 'lucide-react';
import { useState } from 'react';

const FaqSection = () => {
  const [openIndexes, setOpenIndexes] = useState<Record<number, boolean>>({});

  // Sample FAQ's
  const faqs = [
    {
      question: 'What is your return policy?',
      answer: 'Our return policy allows returns within 30 days of purchase.',
    },
    {
      question: 'How do I track my order?',
      answer:
        'You can track your order using the tracking number provided in your email.',
    },
    {
      question: 'Can I purchase items in bulk?',
      answer:
        'Yes, we offer bulk purchasing options. Please contact our support team for more details.',
    },
    {
      question: 'Do you ship internationally?',
      answer:
        'Yes, we ship to many countries around the world. Shipping charges may vary.',
    },
    {
      question: 'How can I reset my password?',
      answer:
        'You can reset your password by clicking on the "Forgot Password" link on the login page.',
    },
    {
      question: 'Where is your company located?',
      answer: 'Our company is located at 123 Main Street, Anytown, USA.',
    },
    {
      question: 'Do you have customer support?',
      answer:
        'Yes, we offer 24/7 customer support. You can contact us via email or phone.',
    },
    {
      question: 'What payment methods do you accept?',
      answer:
        'We accept various payment methods including credit cards, PayPal, and bank transfers.',
    },
    {
      question: 'What are your business hours?',
      answer: 'Our business hours are from 9 AM to 6 PM, Monday to Friday.',
    },
    {
      question: 'How do I make a complaint?',
      answer:
        'You can make a complaint by contacting our customer support team via email.',
    },
    {
      question: 'Do you offer gift cards?',
      answer: 'Yes, we offer gift cards. You can purchase them on our website.',
    },
    {
      question: 'How can I apply for a job?',
      answer:
        'You can apply for a job by visiting our careers page and submitting your resume.',
    },
  ];

  // Split FAQs into groups of 4 per card
  const chunkedFaqs = [];
  for (let i = 0; i < faqs.length; i += 4) {
    chunkedFaqs.push(faqs.slice(i, i + 4));
  }

  // Toggle function for each FAQ
  const toggleFaq = (faqIndex: number) => {
    setOpenIndexes((prev) => ({
      ...prev,
      [faqIndex]: !prev[faqIndex],
    }));
  };

  return (
    <div className='flex flex-col space-y-4 items-center w-full'>
      <p className='text-2xl font-bold'>FAQ</p>
      <Carousel
        opts={{
          align: 'start',
          containScroll: 'trimSnaps',
        }}
        className='w-full border-none rounded-3xl overflow-hidden'
      >
        <CarouselContent className='flex-nowrap gap-4'>
          {chunkedFaqs.map((faqGroup, cardIndex) => (
            <CarouselItem
              key={cardIndex}
              className='w-full md:basis-1/2 md:max-w-[50%] xl:basis-1/3 xl:max-w-[33.33%]'
            >
              <Card className='bg-[#007E4C]'>
                <CardContent className='flex flex-col items-center justify-center space-y-3 p-4'>
                  <div className='flex flex-col gap-2 items-start w-full'>
                    {faqGroup.map((faq, faqIndex) => {
                      // Calculate the unique index per FAQ across all cards
                      const globalIndex = cardIndex * 4 + faqIndex;

                      return (
                        <Collapsible
                          key={globalIndex}
                          open={openIndexes[globalIndex] || false}
                          onOpenChange={() => toggleFaq(globalIndex)}
                          className='w-full justify-between'
                        >
                          <div className='flex flex-row items-center justify-between w-full p-2'>
                            {/* Left Content */}
                            <div className='flex flex-col gap-2 flex-1'>
                              <p className='text-wrap text-primary-foreground font-semibold text-sm'>
                                {faq.question}
                              </p>
                              <hr
                                className={`text-primary-foreground h-1 transition-opacity duration-300 ${
                                  openIndexes[globalIndex]
                                    ? 'opacity-0'
                                    : 'opacity-100'
                                }`}
                              />
                            </div>

                            {/* Button on the Far Right */}
                            <CollapsibleTrigger asChild>
                              <Button
                                size='default'
                                className='bg-transparent border-none shadow-none ml-auto p-2'
                              >
                                <ChevronRight
                                  className={`h-6 w-6 transition-transform duration-300 ${
                                    openIndexes[globalIndex] ? 'rotate-90' : ''
                                  }`}
                                />
                              </Button>
                            </CollapsibleTrigger>
                          </div>

                          <CollapsibleContent className='max-w-full overflow-hidden text-primary-foreground mt-2'>
                            <p className='text-sm text-primary-foreground font-light px-3'>
                              {faq.answer}
                            </p>
                          </CollapsibleContent>
                        </Collapsible>
                      );
                    })}
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

export default FaqSection;
