import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { colors, spacing, typography } from './';

export const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 50px;

  @media (max-width: 768px) {
    padding: 20px;
  }
`;

export const HeaderLogo = styled.img`
  height: 40px;
  margin-left: ${spacing.large};
  width: 85px;
  border-radius: 4px;

  @media (max-width: 768px) {
    margin-left: 0;
  }
`;

export const Logo = styled.img`
  height: 40px; /* Adjust the height as needed */
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const NavLinks = styled.div`
  display: flex;
  align-items: center;
  margin-right: ${spacing.large};

  @media (max-width: 768px) {
    display: none;
    flex-direction: column;
    align-items: flex-end;
    width: auto;
    position: absolute;
    top: 60px;
    right: -10px;
    padding: 10px;
  }

  &.open {
    display: flex;
  }
`;

export const NavLink = styled(Link)`
  margin: 0 ${spacing.medium};
  color: black;
  text-decoration: none;
  font-weight: ${typography.fontWeight.bold};

  &:hover {
    text-decoration: underline;
  }

  @media (max-width: 768px) {
    margin: ${spacing.small} 0;
  }
`;

export const Button = styled(Link)`
  padding: ${spacing.small} ${spacing.large};
  background-color: ${colors.secondary};
  color: white;
  text-decoration: none;
  border-radius: 20px;
  font-weight: ${typography.fontWeight.bold};
  margin-left: ${spacing.large};
  display: flex;
  align-items: center;
  height: 100%;

  @media (max-width: 768px) {
    margin: ${spacing.small} 0 0 0;
    align-self: flex-end;
    margin-left: 550px; /* Add margin-right to push the button to the right */
  }
`;

export const HamburgerMenu = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;

  @media (max-width: 768px) {
    display: flex;
  }
`;

export const Bar = styled.div`
  width: 25px;
  height: 3px;
  background-color: black;
  margin: 1px 0;
`;
