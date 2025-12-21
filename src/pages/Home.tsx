import React, { useEffect } from 'react';
import Layout from '../components/home/Layout';
import Hero from '../components/home/Hero';
import FeatureLearn from '../components/home/FeatureLearn';
import FeaturePay from '../components/home/FeaturePay';
import SavingSection from '../components/home/SavingSection';
import UsersSection from '../components/home/UsersSection';
import UnlockSection from '../components/home/UnlockSection';
import AccessSection from '../components/home/AccessSection';
import MuneDashboard from '../components/home/MuneDashboard';
// import heroVideo from '../assets/videos/hero.mp4';

const Home: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [isVisible, setIsVisible] = React.useState({ hero: false });
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(prev => ({
              ...prev,
              [entry.target.id]: true
            }));
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('[data-animate]');
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <Layout modalOpen={isModalOpen}>
      {/* <Hero /> */}
      <section className="px-6 lg:px-8 pt-16 pb-24">
        <div className="max-w-4xl mx-auto text-center">
          <h1 
            data-animate
            className={`text-5xl lg:text-7xl font-bold leading-tight mb-6 ${
              isVisible.hero ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
            } transition-all duration-800`}
            id="hero"
          >
            <span className="text-gray-900">The AI-Driven<br />Financial<br />Sidekick for a</span>
            <br />
            <span className="text-emerald-500 relative">
              New Generation
              <div className="absolute -inset-2 rounded-2xl -z-10 transform rotate-1"></div>
            </span>
          </h1>
          
          <p 
            data-animate
            className={`text-xl text-gray-600 mb-8 max-w-2xl mx-auto ${
              isVisible.hero ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            } transition-all duration-800 delay-200`}
          >
            Budgeting, saving, investing, and credit monitoring made easy.
          </p>
          
          <button 
            data-animate
            onClick={() => setIsModalOpen(!isModalOpen)}
            className={`bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1 ${
              isVisible.hero ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            } delay-400`}
          >
            Join the waitlist
          </button>
        </div>
      </section>
      <section className="flex items-center justify-center min-h-screen px-6 lg:px-8 ml-40">
        <div className="max-w-7xl w-full mx-auto flex items-center justify-center h-full">
          <div className="flex flex-col lg:flex-row items-center gap-16 w-full">
            <div className="flex-1 relative z-0">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Learn more about Mun-e here!
              </h2>
              <div className="bg-gray-100 rounded-3xl aspect-video flex items-center justify-center relative overflow-hidden">
                <video
                  src={"/assets/videos/hero.mp4"}
                  className="w-full h-full object-cover rounded-3xl"
                  controls
                  poster="/assets/images/hero.png" // Optional: add a poster image if available
                >
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
            
            <div className="flex-1">
              <div className="relative flex justify-center items-center h-full">
                <img 
                  src={require('../assets/images/demo.png')} 
                  alt="Dashboard Mockup" 
                  className="w-[340px] md:w-[400px] lg:w-[420px] h-auto drop-shadow-2xl rotate-[2deg] z-20 select-none pointer-events-none lg:absolute lg:-right-16 lg:-top-80 lg:-translate-x-96 lg:-ml-20"
                  style={{ filter: 'drop-shadow(0 8px 32px rgba(0,0,0,0.18))' }}
                  draggable={false}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <FeaturePay isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} /> */}
      {/* <FeatureLearn isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} /> */}
      <MuneDashboard />
      <div className="container mx-auto px-4 py-16 max-w-6xl">
        <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-gray-800 mb-6">Explore more with Mun-e</h1>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
                From AI-Powered budgeting to live advisor support — Mun-e isn't just 
                a tool, its your financial sidekick. Whether you're tracking your credit, 
                planning your goals, or sending money to friends,
                <br />
                <span className="text-green-500">you're always in control.</span>
            </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Card 1 */}
            <div className="border border-gray-200 rounded-lg p-8">
                <div className="text-red-500 mb-4">
                    <i className="fas fa-user-tie text-2xl"></i>
                </div>
                <h2 className="text-2xl font-bold text-gray-800 mb-3">Talk to a real advisor</h2>
                <p className="text-gray-500">
                    Monthly subscribers can schedule 1:1s with certified financial planners.
                </p>
            </div>

            {/* Card 2 */}
            <div className="border border-gray-200 rounded-lg p-8">
                <div className="text-blue-400 mb-4">
                    <i className="fas fa-chart-line text-2xl"></i>
                </div>
                <h2 className="text-2xl font-bold text-gray-800 mb-3">Credit Monitoring + Glow-Up tips</h2>
                <p className="text-gray-500">
                    Get real time updates + AI and human coaching to grow your score.
                </p>
            </div>

            {/* Card 3 */}
            <div className="border border-gray-200 rounded-lg p-8">
                <div className="text-purple-500 mb-4">
                    <i className="fas fa-chart-pie text-2xl"></i>
                </div>
                <h2 className="text-2xl font-bold text-gray-800 mb-3">Smart budgeting tools</h2>
                <p className="text-gray-500">
                    Track income, habits, and see how to optimize spending monthly.
                </p>
            </div>

            {/* Card 4 */}
            <div className="border border-gray-200 rounded-lg p-8">
                <div className="text-green-500 mb-4">
                    <i className="fas fa-paper-plane text-2xl"></i>
                </div>
                <h2 className="text-2xl font-bold text-gray-800 mb-3">Send money to friends</h2>
                <p className="text-gray-500">
                    Instantly move money to family or friends. No extra app needed.
                </p>
            </div>
        </div>
    </div>
      {/* <SavingSection isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
      <UsersSection />
      <UnlockSection isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
      <AccessSection isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} /> */}
    </Layout>
  );
};

export default Home;
