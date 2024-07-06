import React, { useState } from 'react';
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

const Contact: React.FC = () => {
  const [activeIndexes, setActiveIndexes] = useState<{
    [key: number]: number | null;
  }>({});

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
            <Title>Connect with Our Team</Title>
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
              src={AshleyLewis}
              alt="Ashley Lewis"
            />
            <ReplyText>
              Hang Tight, We'll Reply Soon
            </ReplyText>
          </TeamImages>
          <FAQSection>
            <FAQTitle>FAQ</FAQTitle>
            <FAQGrid>
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
