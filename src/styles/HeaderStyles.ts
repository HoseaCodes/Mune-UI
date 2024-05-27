import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { colors, spacing, typography } from './';

export const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${spacing.small} ${spacing.large};
  background-color: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const Logo = styled.img`
  height: 40px; /* Adjust the height as needed */
  margin-right: ${spacing.large};
  width: 131px;
  radius: 4px;
  padding; 4px, 24px, 4px, 24px;
  gap; 10px;
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
`;

export const NavLinks = styled.div`
  display: flex;
  align-items: center;
  margin-right: ${spacing.large};
`;

export const NavLink = styled(Link)`
  margin: 0 ${spacing.medium};
  color: black;
  text-decoration: none;
  font-weight: ${typography.fontWeight.bold};

  &:hover {
    text-decoration: underline;
  }
`;

export const Button = styled(Link)`
  padding: ${spacing.small} ${spacing.large};
  background-color: ${colors.secondary};
  color: white;
  text-decoration: none;
  border-radius: 20px;
  font-weight: ${typography.fontWeight.bold};
  margin-left: ${spacing.medium};
  margin-top: ${spacing.navTop};
  display: flex;
  align-items: center;
  height: 100%;
`;
