'use client';

import SendSaveLearnSection from '../components/about/SendSaveLearnSection';
import MeetTheTeamSection from '../components/about/MeetTheTeamSection';
import OurMissionSection from '../components/about/OurMissionSection';

function AboutPage() {
  return (
    <div className='flex flex-col w-full items-center space-y-8 sm:max-w-7xl mx-auto'>
      {/* Send it, save it, learn it section */}
      <SendSaveLearnSection />

      {/* Meet the team Section*/}
      <MeetTheTeamSection />

      {/* Our Mission Section*/}
      <OurMissionSection />
    </div>
  );
}

export default AboutPage;
