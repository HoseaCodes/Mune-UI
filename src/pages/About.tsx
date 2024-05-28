import React from 'react';
import {
  AboutWrapper,
  MainContent,
  Section,
  TextContent,
  Title,
  Paragraph,
  GetStartedButton,
  Image,
  TeamSection,
  TeamTitle,
  TeamGrid,
  TeamMember,
  TeamImage,
  TeamName,
  Bio,
  MissionSection,
  MissionImage,
  MissionText,
  MissionTitle,
  MissionParagraph,
  MissionButton,
} from '../styles/AboutStyles';
import Header from '../components/Header';
import Footer from '../components/Footer';
import aboutImage from '../assets/about-image.png';
import missionImage from '../assets/mission-image.png';
import MarquesZahir from '../assets/Marques-Zahir.png';
import CaseyBass from '../assets/Casey-Bass.png';
import AshleyLewis from '../assets/Ashley-Lewis.png';
// import teamMember4 from '../assets/team-member4.png'; // Replace with actual image path
// import teamMember5 from '../assets/team-member5.png'; // Replace with actual image path

const About: React.FC = () => {
  return (
    <AboutWrapper>
      <Header />
      <MainContent>
        <Section>
          <TextContent>
            <Title>Send It. Save It. Earn It. Learn It.</Title>
            <Paragraph>
              Experience the ultimate blend of convenience and knowledge. Our app lets you send money effortlessly, save smartly, and learn essential financial skills along the way. Simplify your financial life while boosting your money know-how with every transaction.
            </Paragraph>
            <GetStartedButton>Get Started</GetStartedButton>
          </TextContent>
          <Image src={aboutImage} alt="About Us" />
        </Section>

        <TeamSection>
          <TeamTitle>Meet the Team</TeamTitle>
          <TeamGrid>
            <TeamMember>
              <TeamImage src={MarquesZahir} alt="Marques Zahir" />
              <TeamName>Marques Zahir</TeamName>
              <Bio className="bio">Marques Zahir, CEO. School: Lorem ipsum dolor sit amet consectetur. Pellentesque lectus lorem enim lacinia non ipsum.</Bio>
            </TeamMember>
            <TeamMember>
              <TeamImage src={CaseyBass} alt="Casey Bass" />
              <TeamName>Casey Bass</TeamName>
              <Bio className="bio">Casey Bass, CTO. School: Lorem ipsum dolor sit amet consectetur. Pellentesque lectus lorem enim lacinia non ipsum.</Bio>
            </TeamMember>
            <TeamMember>
              <TeamImage src={AshleyLewis} alt="Ashley Lewis" />
              <TeamName>Ashley Lewis</TeamName>
              <Bio className="bio">Ashley Lewis, CFO. School: Lorem ipsum dolor sit amet consectetur. Pellentesque lectus lorem enim lacinia non ipsum.</Bio>
            </TeamMember>
            <TeamMember>
              <TeamImage /*src={teamMember4}*/ alt="First Last" />
              <TeamName>First Last</TeamName>
              <Bio className="bio">First Last, COO. School: Lorem ipsum dolor sit amet consectetur. Pellentesque lectus lorem enim lacinia non ipsum.</Bio>
            </TeamMember>
            <TeamMember>
              <TeamImage /*src={teamMember5}*/ alt="First Last" />
              <TeamName>First Last</TeamName>
              <Bio className="bio">First Last, CMO. School: Lorem ipsum dolor sit amet consectetur. Pellentesque lectus lorem enim lacinia non ipsum.</Bio>
            </TeamMember>
          </TeamGrid>
        </TeamSection>

        <MissionSection>
          <MissionImage src={missionImage} alt="Our Mission" />
          <MissionText>
            <MissionTitle>Our Mission: Elevate Your Finances</MissionTitle>
            <MissionParagraph>
              Our mission is simple: help you get your money right and your knowledge tight. We're here to make financial literacy easy and accessible, so you can flex your financial skills and secure your bag for the future.
            </MissionParagraph>
            <MissionButton>Get Started</MissionButton>
          </MissionText>
        </MissionSection>
      </MainContent>
      <Footer />
    </AboutWrapper>
  );
};

export default About;

