import React from 'react';
import {
  FooterWrapper,
  Nav,
  NavLink,
} from '../styles/FooterStyles';

const Footer: React.FC = () => {
  return (
    <FooterWrapper>
      <p>&copy; 2024 Financial App. All rights reserved.</p>
      <Nav>
        <NavLink href="/">Home</NavLink>
        <NavLink href="/about">About</NavLink>
        <NavLink href="/contact">Contact</NavLink>
        <NavLink href="/subscribe">Subscribe</NavLink>
        <NavLink href="/terms">Terms of Service</NavLink>
        <NavLink href="/privacy">Privacy Policy</NavLink>
      </Nav>
    </FooterWrapper>
  );
};

export default Footer;
