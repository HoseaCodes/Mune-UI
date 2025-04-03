import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Image from "next/image";
import React, { useState } from "react";


// Descriptions, schools, and titles are only samples
const teamMembers = [
  {
    name: "Marques Zahir",
    img: "/images/about/marques-zahir-image.svg",
    title: "CEO",
    school: "Harvard University",
    description:
      "Marques leads with passion, driving innovation and excellence in everything we do. With years of experience in leadership, he's committed to making an impact.",
  },
  {
    name: "Casey Bass",
    img: "/images/about/casey-bass-image.svg",
    title: "COO",
    school: "Stanford University",
    description:
      "Casey oversees operations, ensuring efficiency and seamless execution of strategies. He thrives on problem-solving and operational excellence.",
  },
  {
    name: "Ashley Lewis",
    img: "/images/about/ashley-lewis-image.svg",
    title: "CFO",
    school: "Wharton Business School",
    description:
      "Ashley ensures financial stability and growth, leveraging her expertise in financial management and strategic planning.",
  },
  {
    name: "Darrias Thomas",
    img: "/images/about/darrias-thomas-image.png",
    title: "CTO",
    school: "MIT",
    description:
      "Darrias is the brain behind our technology. He specializes in developing scalable and secure tech solutions that drive success.",
  },
  {
    name: "Dana Simone",
    img: "/images/about/dana-simone-image.png",
    title: "CMO",
    school: "Yale University",
    description:
      "Dana leads our marketing efforts, creating strategies that connect with our audience and build brand loyalty.",
  },
  {
    name: "Dominique Hosea",
    img: "/images/about/dominique-hosea-image.png",
    title: "Lead Designer",
    school: "Parsons School of Design",
    description:
      "Dominique brings creativity to life, ensuring our brand and products have a unique and appealing design.",
  },
];

const MeetTheTeamSection = () => {
  const [selectedPerson, setSelectedPerson] = useState(teamMembers[0]); // Default to first person

  return (
    <div className="flex flex-col space-y-8 items-center md:items-start mt-8 p-1 w-full">
      <p className="text-2xl font-bold md:text-3xl md:text-start xl:text-5xl">
        Meet the team
      </p>

      <div className="w-full mx-auto overflow-hidden">
        <Carousel
          opts={{ align: "start" }}
          className="w-full flex items-center justify-center border-none shadow-none"
        >
          <CarouselContent className="gap-2">
            {teamMembers.map((person, index) => (
              <CarouselItem
                key={index}
                className="basis-1/3 md:basis-1/4 lg:basis-1/5 shrink-0 border-none shadow-none w-full"
              >
                <Card
                  onClick={() => setSelectedPerson(person)} // Click to select
                  className={`cursor-pointer border-none shadow-none w-fit flex flex-col items-center justify-center p-3 space-y-3 ${
                    selectedPerson.name === person.name
                      ? "bg-border rounded-xl"
                      : "bg-transparent"
                  }`}
                >
                  <CardContent className="flex flex-col items-center justify-center space-y-2 p-1">
                    <Image
                      alt={person.name}
                      src={person.img}
                      width={60}
                      height={60}
                      className="w-[60px] h-[60px] md:w-[90px] md:h-[90px] rounded-full object-cover flex-shrink-0"
                    />
                    <p className="text-sm text-center font-bold md:font-semibold md:text-[20px] xl:text-[22px]">
                      {person.name}
                    </p>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>

      {/* Selected Person Information */}
      <div className="flex flex-col space-y-6 md:flex md:flex-row md:space-x-20 md:w-full items-center justify-center xl:justify-start">
        <Image
          alt="highlight-person"
          src={selectedPerson.img}
          width={200}
          height={200}
          className="w-[200px] h-[200px] rounded-full object-cover flex-shrink-0 self-center"
        />
        <div className="flex flex-col self-start space-y-1 xl:space-y-2 md:w-[226px] xl:w-[487px]">
          <p className="font-semibold md:text-2xl xl:text-3xl">
            {selectedPerson.name}, <br className="hidden md:flex xl:hidden" />
            {selectedPerson.title}
          </p>
          <p className="italic text-[#85958F] mt-[-4px] md:text-[16px] xl:text-[22px]">
            {selectedPerson.school}
          </p>
          <p className="text-[16px]">{selectedPerson.description}</p>
        </div>
      </div>
    </div>
  );
};

export default MeetTheTeamSection;
