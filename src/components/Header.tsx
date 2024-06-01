import React, { useState, useEffect } from 'react';
import {
  HeaderWrapper,
  HeaderLogo,
  Nav,
  NavLinks,
  NavLink,
  Button,
  HamburgerMenu,
  Bar,
} from '../styles/HeaderStyles';
import headerlogo from '../assets/headerlogo.png';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleResize = () => {
    if (window.innerWidth <= 768) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
      setIsOpen(false);
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
      <HeaderLogo src={headerlogo} alt="Logo" />
      <Nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        <NavLink to="/subscribe">Subscribe</NavLink>
        <Button to="/get-started">Get Mun-e</Button>
        {/* <NavLink to="/pricing">Pricing</NavLink> */}
      </Nav>
      {isMobile && (
        <>
          <HamburgerMenu onClick={toggleMenu}>
            <Bar />
            <Bar />
            <Bar />
          </HamburgerMenu>
          <NavLinks
            className={`nav-links ${isOpen ? 'open' : ''}`}
          >
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/contact">Contact</NavLink>
            <Button to="/get-started">Get Mun-E</Button>
          </NavLinks>
        </>
      )}
    </HeaderWrapper>
  );
};

export default Header;
