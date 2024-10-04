import React, { useState, useEffect, useRef } from 'react';
import {
  ContactWrapper,
  MainContent,
  Section,
  Title,
  FormWrapper,
  Input,
  TextArea,
  SubmitButton,
  TeamImages,
  TeamImage,
  ReplyText,
  FAQSection,
  FAQTitle,
  FAQGrid,
  FAQItem,
  Question,
  Answer,
  Separator,
  StyledImage,
} from '../styles/ContactStyles';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronRight,
  faChevronUp,
} from '@fortawesome/free-solid-svg-icons';
import MarquesZahir from '../assets/Marques-Zahir.png'; // Replace with actual image path
import CaseyBass from '../assets/Casey-Bass.png'; // Replace with actual image path
import AshleyLewis from '../assets/Ashley-Lewis.png'; // Replace with actual image path
import connectTeam from '../assets/connect-team.webp'; // Replace with actual image path
import faqData from '../constants/faq';

const Contact: React.FC = () => {
  const [activeIndexes, setActiveIndexes] = useState<{
    [key: number]: number | null;
  }>({});
  const faqGridRef = useRef<HTMLDivElement>(null);

  const handleToggle = (
    itemIndex: number,
    questionIndex: number
  ) => {
    setActiveIndexes((prev) => ({
      ...prev,
      [itemIndex]:
        prev[itemIndex] === questionIndex
          ? null
          : questionIndex,
    }));
  };

  useEffect(() => {
    const faqGrid = faqGridRef.current;
    if (!faqGrid) return;

    let isDown = false;
    let startX: number;
    let scrollLeft: number;

    const handleMouseDown = (e: MouseEvent) => {
      isDown = true;
      faqGrid.classList.add('active');
      startX = e.pageX - faqGrid.offsetLeft;
      scrollLeft = faqGrid.scrollLeft;
    };

    const handleMouseLeave = () => {
      isDown = false;
      faqGrid.classList.remove('active');
    };

    const handleMouseUp = () => {
      isDown = false;
      faqGrid.classList.remove('active');
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - faqGrid.offsetLeft;
      const walk = (x - startX) * 3; //scroll-fast
      faqGrid.scrollLeft = scrollLeft - walk;
    };

    faqGrid.addEventListener('mousedown', handleMouseDown);
    faqGrid.addEventListener(
      'mouseleave',
      handleMouseLeave
    );
    faqGrid.addEventListener('mouseup', handleMouseUp);
    faqGrid.addEventListener('mousemove', handleMouseMove);

    return () => {
      faqGrid.removeEventListener(
        'mousedown',
        handleMouseDown
      );
      faqGrid.removeEventListener(
        'mouseleave',
        handleMouseLeave
      );
      faqGrid.removeEventListener('mouseup', handleMouseUp);
      faqGrid.removeEventListener(
        'mousemove',
        handleMouseMove
      );
    };
  }, []);

  return (
    <>
      <Header />
      <ContactWrapper>
        <MainContent>
          <div className="flex gap-20 flex-nowrap">
            <div className="w-full flex flex-col gap-6">
              <h1 className="font-bold text-5xl text-black leading-[55px] p-6">
                Connect with
                <br />
                Our Team.
              </h1>
              <img
                src={connectTeam}
                alt={'mun-e team'}
                className="w-full rounded-[48px]"
              />
            </div>
            <div className="bg-[#19a530] w-full rounded-[48px]">
              TEST
            </div>
          </div>
          {/* <TeamImages>
            <TeamImage
              src={MarquesZahir}
              alt="Marques Zahir"
            />
            <TeamImage src={CaseyBass} alt="Casey Bass" />
            <TeamImage
              src={AshleyLewis}
              alt="Ashley Lewis"
            />
            <ReplyText>
              Hang Tight, We'll Reply Shortly.
            </ReplyText>
          </TeamImages> */}
          <FAQSection>
            <FAQTitle>FAQ</FAQTitle>
            <FAQGrid ref={faqGridRef}>
              {faqData.map((item, itemIndex) => (
                <FAQItem key={itemIndex}>
                  {item.questions.map(
                    (question, questionIndex) => (
                      <div key={questionIndex}>
                        <Question
                          className={
                            activeIndexes[itemIndex] ===
                            questionIndex
                              ? 'active'
                              : ''
                          }
                          onClick={() =>
                            handleToggle(
                              itemIndex,
                              questionIndex
                            )
                          }
                        >
                          {question}{' '}
                          <FontAwesomeIcon
                            icon={
                              activeIndexes[itemIndex] ===
                              questionIndex
                                ? faChevronUp
                                : faChevronRight
                            }
                          />
                        </Question>
                        <Answer
                          className={
                            activeIndexes[itemIndex] ===
                            questionIndex
                              ? 'active'
                              : ''
                          }
                        >
                          {item.answers[questionIndex]}
                        </Answer>
                        {activeIndexes[itemIndex] !==
                          questionIndex && <Separator />}
                      </div>
                    )
                  )}
                </FAQItem>
              ))}
            </FAQGrid>
          </FAQSection>
        </MainContent>
      </ContactWrapper>
      <Footer />
    </>
  );
};

export default Contact;
