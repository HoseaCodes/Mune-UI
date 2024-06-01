import styled from 'styled-components';
import { colors, spacing } from './';

export const FooterWrapper = styled.footer`
  background-color: ${colors.secondary};
  padding: ${spacing.large};
  text-align: center;
`;

export const Nav = styled.nav`
  margin-top: ${spacing.medium};
`;

export const NavLink = styled.a`
  color: white;
  text-decoration: none;
  margin: ${spacing.medium};

  &:hover {
    text-decoration: underline;
  }
`;
