'use client';

import ConnectWithOurTeamSection from '../components/contact/ConnectWithOurTeamSection';
import FaqSection from '../components/contact/FaqSection';

function ContactPage() {
  return (
    <div className='flex flex-col items-center space-y-8  md:p-6 xl:p-9 xl:px-[200px]'>
      {/* Connect with our team section */}
      <ConnectWithOurTeamSection />

      {/* FAQ section */}
      <FaqSection />
    </div>
  );
}

export default ContactPage;
