'use client';

import VideoPlayerSection from './components/home/VideoPlayerSection';
import AppStoreButtonsSections from './components/home/AppStoreButtonsSections';
import PayFriendsSection from './components/home/PayFriendsSection';
import LearnTogetherSection from './components/home/LearnTogetherSection';
import SavingsGoalSection from './components/home/SavingsGoalSection';
import HearFromOurUsersSection from './components/home/HearFromOurUsersSection';
import SpecialPerksSection from './components/home/SpecialPerksSection';
import EarlyAccessSection from './components/home/EarlyAccessSection';
import FactsAndIconsSections from './components/home/FactsAndIconsSections';

export default function Home() {
  return (
    <div className='flex flex-col items-center space-y-8 sm:max-w-7xl mx-auto'>
      {/* Video Player Section */}
      <VideoPlayerSection />

      {/* Apple store and Google play store buttons*/}
      <AppStoreButtonsSections />

      {/* Pay Friends Section */}
      <PayFriendsSection />

      {/* learn Together Section */}
      <LearnTogetherSection />

      {/* Savings Goal Section */}
      <SavingsGoalSection />

      {/* Hear from our users Section */}
      <HearFromOurUsersSection />

      {/* Unlock Special Perks Section */}
      <SpecialPerksSection />

      {/* Exclusive Early Access Section */}
      <EarlyAccessSection />

      {/*Facts and icons section*/}
      <FactsAndIconsSections />
    </div>
  );
}
