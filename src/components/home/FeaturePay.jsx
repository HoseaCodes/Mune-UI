import React, {useState} from 'react';
import PlayMockup from '../../assets/images/play-mockup.png';
import PayMobileMockup from '../../assets/images/pay-mobile.png';
import Modal from '../comingSoon/ComingSoonModal';

const FeaturePay = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="lg:mx-2 mx-3 mt-[80px] md:mt-[120px]">
      <div className="play-section max-w-7xl mx-auto ">
        <div className="md:grid grid-cols-2 gap-10 md:h-[620px] overflow-hidden  flex flex-col-reverse md:flex-row">
          <div className="flex justify-center">
            <img
              src={PlayMockup}
              className=" hidden md:block md:w-full"
              alt=""
            />
            <img
              src={PayMobileMockup}
              className="md:hidden"
              alt=""
            />
          </div>
          <div className="md:h-[620px]  flex justify-start items-center">
            <div className="space-y-4">
              <div className=" text-[22px] md:text-4xl font-bold">
                Pay Friends
              </div>
              <div className="primary-text w-full md:w-[525px]">
                Split bills and share costs effortlessly.
                Mun-e lets you settle up instantly, keeping
                group expenses simple and stress-free.
              </div>
              <div className="hidden md:block">
                <button 
                  className="button-three w-[131px] h-[44px] text-[15px] text-stone-100 font-semibold rounded-xl"
                  onClick={openModal}
                >
                  Get Mun-e
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Modal
        title="App Coming Soon!"
        description="Enter your mobile phone number to be notified when it's released."
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </div>
  );
};

export default FeaturePay;
