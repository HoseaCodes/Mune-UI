import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { colors, typography } from './styles';

const HeaderWrapper = styled.header`
  background-color: ${colors.primary};
  padding: ${typography.spacing.large};
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-around;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-weight: ${typography.fontWeight.bold};
  margin: ${spacing.medium};

  @media (max-width: 768px) {
    margin: ${spacing.small};
  }
`;

const Header: React.FC = () => {
  return (
    <HeaderWrapper>
      <Nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About Us</NavLink>
        <NavLink to="/products">Products</NavLink>
        <NavLink to="/pricing">Pricing</NavLink>
        <NavLink to="/subscribe">Subscribe</NavLink>
        <NavLink to="/contact">Contact Us</NavLink>
      </Nav>
    </HeaderWrapper>
  );
};

export default Header;
