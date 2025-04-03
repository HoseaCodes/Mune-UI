'use client';

import ElevateFinancialIqSection from '../components/subscribe/ElevateFinancialIqSection';
import BudgetingBasicsSections from '../components/subscribe/BudgetingBasicsSections';
import NewLessonsSections from '../components/subscribe/NewLessonsSections';
import TrendingSection from '../components/subscribe/TrendingSection';

function SubscribePage() {
  return (
    <div className='flex flex-col items-center space-y-20 sm:max-w-7xl mx-auto'>
      {/* Elevate your financial IQ section */}
      <ElevateFinancialIqSection />

      {/* Budgeting Basics section */}
      <BudgetingBasicsSections />

      {/* Stay tuned for new lessons Section */}
      <NewLessonsSections />

      {/* Trending section */}
      <TrendingSection />
    </div>
  );
}

export default SubscribePage;
