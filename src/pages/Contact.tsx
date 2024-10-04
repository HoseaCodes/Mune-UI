import React from 'react';
import {
  ContactWrapper,
  MainContent,
  TeamImages,
  TeamImage,
  ReplyText,
} from '../styles/ContactStyles';
import Header from '../components/Header';
import Footer from '../components/Footer';
import MarquesZahir from '../assets/Marques-Zahir.png'; // Replace with actual image path
import CaseyBass from '../assets/Casey-Bass.png'; // Replace with actual image path
import AshleyLewis from '../assets/Ashley-Lewis.png'; // Replace with actual image path
import connectTeam from '../assets/connect-team.webp'; // Replace with actual image path
import FAQ from '../components/contact/FAQ';

const Contact: React.FC = () => {
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
              TESTReplace with actual image path
            </div>
          </div>
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
              Hang Tight, We'll Reply Shortly.
            </ReplyText>
          </TeamImages>
          <FAQ />
        </MainContent>
      </ContactWrapper>
      <Footer />
    </>
  );
};

export default Contact;
