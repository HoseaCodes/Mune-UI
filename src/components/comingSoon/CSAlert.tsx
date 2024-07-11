import React, { useState } from 'react';
import Modal from './ComingSoonModal';

const CSAlert: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <button
        onClick={openModal}
        className="bg-custom-green text-white px-4 py-2 rounded-lg mb-4 hover:bg-custom-green"
      >
        Get Mun-e
      </button>
      <button
        onClick={openModal}
        className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
      >
        Start Lesson
      </button>

      <Modal
        title="App Coming Soon!"
        description="Enter your mobile phone number to be notified when it's released."
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </div>
  );
};

export default CSAlert;
