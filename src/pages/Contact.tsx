import React from 'react';
import {
  ContactWrapper,
  MainContent,
  TeamImages,
  TeamImage,
} from '../styles/ContactStyles';
import Header from '../components/Header';
import Footer from '../components/Footer';
import MarquesZahir from '../assets/Marques-Zahir.png'; // Replace with actual image path
import CaseyBass from '../assets/Casey-Bass.png'; // Replace with actual image path
import AshleyLewis from '../assets/Ashley-Lewis.png'; // Replace with actual image path
import connectTeam from '../assets/connect-team.webp'; // Replace with actual image path
import ContactForm from '../components/contact/contact-form/ContactForm';
import FAQSection from '../components/contact/faq-section/FAQSection';

const Contact: React.FC = () => (
  <>
    <Header />
    <ContactWrapper>
      <MainContent>
        <div className="flex gap-20 flex-nowrap">
          <div className="w-full flex flex-col gap-6">
            <h1 className="font-bold text-5xl text-black leading-[55px] p-6 w-full whitespace-nowrap">
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
          <div className="w-full flex flex-col flex-nowrap items-end gap-6">
            <ContactForm />
            <div className="flex items-center w-full">
              <TeamImages>
                <TeamImage
                  src={MarquesZahir}
                  alt="Marques Zahir"
                />
                <TeamImage
                  src={CaseyBass}
                  alt="Casey Bass"
                />
                <TeamImage
                  src={AshleyLewis}
                  alt="Ashley Lewis"
                />
              </TeamImages>
              <p className="text-base font-semibold text-black shrink ml-4">
                Hang Tight, We'll Reply Shortly.
              </p>
            </div>
          </div>
        </div>
        <FAQSection />
      </MainContent>
    </ContactWrapper>
    <Footer />
  </>
);

export default Contact;
