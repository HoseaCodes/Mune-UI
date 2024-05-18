import React from 'react';
import {
  HeaderWrapper,
  Nav,
  NavLink,
  Button,
} from '../styles/HeaderStyles';

const Header: React.FC = () => {
  return (
    <HeaderWrapper>
      <Nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        <NavLink to="/subscribe">Subscribe</NavLink>
        <Button to="/get_mune">Get Mun-e</Button>
        {/* <NavLink to="/pricing">Pricing</NavLink> */}
      </Nav>
    </HeaderWrapper>
  );
};

export default Header;
