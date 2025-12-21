import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  HeaderWrapper,
  HeaderLogo,
  Nav,
  NavLink,
  // GlowButton as Button,
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
import headerlogo from '../assets/logo-v2.png';
import sidebarLogo from '../assets/logo-white-v2.png';

interface HeaderProps {
  onClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onClick }) => {
  // const [isOpen, setIsOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

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

  return (
    <HeaderWrapper>
      <Link to="/">
        <HeaderLogo src={headerlogo} alt="Logo" />
      </Link>
      <Nav>
        {/* <NavLink to="/">Home</NavLink> */}
        <NavLink to="/about">About Us</NavLink>
        {/* <NavLink to="/contact">Contact</NavLink> */}
        {/* <NavLink to="/subscribe">Subscribe</NavLink> */}
        {/* <Button onClick={onClick} >Get early access</Button> */}
        <button className="bg-emerald-500 hover:bg-emerald-600 text-white 
        px-6 py-3 rounded-xl font-semibold transition-all duration-200 shadow-lg 
        hover:shadow-xl transform hover:-translate-y-0.5" onClick={onClick} >
          Get early access
        </button>
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
            {/* <NavLink
              to="/subscribe"
              onClick={toggleSidebar}
            >
              Subscribe
            </NavLink> */}
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
    </HeaderWrapper>
  );
};

export default Header;
