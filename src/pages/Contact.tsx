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
import DanaSimone from '../assets/Dana-Simone.png'; // Replace with actual image path
import connectTeam from '../assets/connect-team.png'; // Replace with actual image path

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

  const faqData = [
    {
      questions: [
        'What is your return policy?',
        'How do I track my order?',
        'Can I purchase items in bulk?',
        'Do you ship internationally?',
      ],
      answers: [
        'Our return policy allows returns within 30 days of purchase.',
        'You can track your order using the tracking number provided in your email.',
        'Yes, we offer bulk purchasing options. Please contact our support team for more details.',
        'Yes, we ship to many countries around the world. Shipping charges may vary.',
      ],
    },
    {
      questions: [
        'How can I reset my password?',
        'Where is your company located?',
        'Do you have customer support?',
        'What payment methods do you accept?',
      ],
      answers: [
        'You can reset your password by clicking on the "Forgot Password" link on the login page.',
        'Our company is located at 123 Main Street, Anytown, USA.',
        'Yes, we offer 24/7 customer support. You can contact us via email or phone.',
        'We accept various payment methods including credit cards, PayPal, and bank transfers.',
      ],
    },
    {
      questions: [
        'What are your business hours?',
        'How do I make a complaint?',
        'Do you offer gift cards?',
        'How can I apply for a job?',
      ],
      answers: [
        'Our business hours are from 9 AM to 6 PM, Monday to Friday.',
        'You can make a complaint by contacting our customer support team via email.',
        'Yes, we offer gift cards. You can purchase them on our website.',
        'You can apply for a job by visiting our careers page and submitting your resume.',
      ],
    },
  ];

  return (
    <>
      <Header />
      <ContactWrapper>
        <MainContent>
          <Section>
            <Title>Connect with Our Team.</Title>
            <StyledImage
              src={connectTeam}
              alt="Connect With Our Team"
            />
            <FormWrapper>
              <Input type="text" placeholder="Name" />
              <Input type="email" placeholder="Email" />
              <TextArea placeholder="Message" />
              <SubmitButton>Submit</SubmitButton>
            </FormWrapper>
          </Section>
          <TeamImages>
            <TeamImage
              src={MarquesZahir}
              alt="Marques Zahir"
            />
            <TeamImage src={CaseyBass} alt="Casey Bass" />
            <TeamImage
              src={DanaSimone}
              alt="Ashley Lewis"
            />
            <ReplyText>
              Hang Tight, We'll Reply Shortly.
            </ReplyText>
          </TeamImages>
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
