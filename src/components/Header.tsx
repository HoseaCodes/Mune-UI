import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  HeaderWrapper,
  HeaderLogo,
  Nav,
  NavLink,
  // Button,
  ModalButton,
  HamburgerMenu,
  Bar,
  Sidebar,
  CloseButton,
  SidebarHeader,
  SidebarLogo,
  SocialLinks,
} from '../styles/HeaderStyles';
import {
  FaFacebook,
  FaInstagram,
  FaTiktok,
} from 'react-icons/fa';
import headerlogo from '../assets/headerlogo.png';
import sidebarLogo from '../assets/sidebarlogo.png';
import Modal from './comingSoon/ComingSoonModal';

const Header: React.FC = () => {
  // const [isOpen, setIsOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handleResize = () => {
    if (window.innerWidth <= 768) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
      // setIsOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <HeaderWrapper>
      <Link to="/">
        <HeaderLogo src={headerlogo} alt="Logo" />
      </Link>
      <Nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        <NavLink to="/subscribe">Subscribe</NavLink>
        <ModalButton
          onClick={openModal}
          className="bg-custom-green text-custom-white px-4 py-2 rounded-lg hover:bg-green-500"
        >
          Get Mun-e
        </ModalButton>
        {/* <NavLink to="/pricing">Pricing</NavLink> */}
      </Nav>
      {isMobile && (
        <>
          <HamburgerMenu onClick={toggleSidebar}>
            <Bar />
            <Bar />
            <Bar />
          </HamburgerMenu>
          <Sidebar isOpen={sidebarOpen}>
            <SidebarHeader>
              <SidebarLogo src={sidebarLogo} alt="Logo" />
            </SidebarHeader>
            <CloseButton onClick={toggleSidebar}>
              <Bar />
              <Bar />
              <Bar />
            </CloseButton>
            <NavLink to="/" onClick={toggleSidebar}>
              Home
            </NavLink>
            <NavLink to="/about" onClick={toggleSidebar}>
              About
            </NavLink>
            <NavLink to="/contact" onClick={toggleSidebar}>
              Contact
            </NavLink>
            <NavLink
              to="/subscribe"
              onClick={toggleSidebar}
            >
              Subscribe
            </NavLink>
            <SocialLinks>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram />
              </a>
              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTiktok />
              </a>
            </SocialLinks>
          </Sidebar>
        </>
      )}
      <Modal
        title="App Coming Soon!"
        description="Enter your mobile phone number to be notified when it's released."
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </HeaderWrapper>
  );
};

export default Header;
