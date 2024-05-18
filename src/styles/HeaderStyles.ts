import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { colors, spacing, typography } from './';

export const HeaderWrapper = styled.header`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: ${spacing.large};
  background-color: white;
`;

export const Nav = styled.nav`
  display: flex;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
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
