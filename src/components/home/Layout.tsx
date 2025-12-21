import React, { useEffect } from 'react'
import Header from '../Header'
// import Footer from '../Footer'
import NewsletterModal from '../NewsletterModal'

import { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
  modalOpen?: boolean;
}

export default function Layout({ children, modalOpen }: LayoutProps) {
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  useEffect(() => {
    if (modalOpen) {
      setIsModalOpen(true);
    }
  }, [modalOpen]);
  
  const handleOpenModal = () => {
    console.log('Opening modal');
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
        <Header onClick={handleOpenModal}/>
          {children}
        <div className="container mx-auto px-4 py-4">
            <div className="flex justify-between items-center">
                <div>
                    <img 
                      src={require('../../assets/logo-v2.png')} 
                      alt="Mun-e Logo" 
                      className="h-32 w-32 object-contain"
                      />
                    {/* <svg className="h-10 w-10 text-green-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" fill="currentColor"/>
                        <path d="M15 8H9v2h6V8zm0 3H9v2h6v-2zm0 3H9v2h6v-2z" fill="currentColor"/>
                    </svg> */}
                </div>
                <div className="flex space-x-8 items-center text-gray-800">
                    <a href="mailto:help@mun-e.com" className="text-gray-800 hover:text-gray-600">help@mun-e.com</a>
                    <a href="/terms" className="text-gray-800 hover:text-gray-600">Terms of Use</a>
                    <a href="/privacy" className="text-gray-800 hover:text-gray-600">Privacy Policy</a>
                    <span className="text-gray-800">© 2024 Mun-e</span>
                </div>
            </div>
        </div>
        {/* <Footer />  */}
        <NewsletterModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </div>
  )
}
