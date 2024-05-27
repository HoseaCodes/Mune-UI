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
} from '../styles/ContactStyles';
import Header from '../components/Header';
import Footer from '../components/Footer';
import teamMember1 from '../assets/team-member1.png'; // Replace with actual image path
import teamMember2 from '../assets/team-member2.png'; // Replace with actual image path
import teamMember3 from '../assets/team-member3.png'; // Replace with actual image path

const Contact: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <ContactWrapper>
      <Header />
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
          <TeamImage /*src={teamMember1}*/ alt="Team Member 1" />
          <TeamImage /*src={teamMember2}*/ alt="Team Member 2" />
          <TeamImage /*src={teamMember3}*/ alt="Team Member 3" />
          <ReplyText>Hang Tight, We'll Reply Soon</ReplyText>
        </TeamImages>
        <FAQSection>
          <FAQTitle>FAQ</FAQTitle>
          <FAQGrid>
            {[1, 2, 3].map((item, index) => (
              <FAQItem key={index}>
                <Question onClick={() => handleToggle(index)}>
                  Lorem ipsum dolor sit amet <span>{activeIndex === index ? '▲' : '▼'}</span>
                </Question>
                <Answer className={activeIndex === index ? 'active' : ''}>
                  Lorem ipsum dolor sit amet consectetur. Pellentesque lectus lorem enim lacinia non ipsum.
                </Answer>
                {[1, 2, 3].map((subitem) => (
                  <Question key={subitem} onClick={() => handleToggle(index)}>
                    Lorem ipsum dolor sit amet <span>{activeIndex === index ? '▲' : '▼'}</span>
                  </Question>
                ))}
              </FAQItem>
            ))}
          </FAQGrid>
        </FAQSection>
      </MainContent>
      <Footer />
    </ContactWrapper>
  );
};

export default Contact;
