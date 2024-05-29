import styled from 'styled-components';
import { colors, spacing, typography } from './';

export const FooterWrapper = styled.footer`
  background-color: ${colors.primary};
  color: white;
  padding: ${spacing.large};
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  position: relative;
  min-height: 300px;
`;

export const FooterLogo = styled.img`
  width: 100px;
  margin-bottom: ${spacing.medium};
`;

export const FooterTitle = styled.h4`
  font-size: 2rem;
  font-weight: ${typography.fontWeight.bold};
  text-align: left;
  margin-bottom: ${spacing.medium};
`;

export const FooterFormWrapper = styled.div`
  display: flex;
  align-items: center;
  background-color: white;
  border-radius: 30px;
  padding: ${spacing.small};
  margin-bottom: ${spacing.large};
  width: 100%;
  max-width: 500px;
  box-shadow: 0 0 0 5px black;
`;

export const FooterForm = styled.form`
  display: flex;
  align-items: center;
  width: 100%;
  border-radius: 30px;
`;

export const FooterInput = styled.input`
  padding: ${spacing.small};
  border: none;
  outline: none;
  font-size: ${typography.fontSize};
  flex: 1;
  border-radius: 30px 0 0 30px;
  margin: 0 ${spacing.small};
  &::placeholder {
    color: black;
  }
`;

export const FooterSubmitButton = styled.button`
  padding: ${spacing.small} ${spacing.large};
  background-color: black;
  color: white;
  border: none;
  font-weight: ${typography.fontWeight.bold};
  cursor: pointer;
  border-radius: 30px;
`;

export const PhoneIcon = styled.img`
  width: 24px;
  margin-right: ${spacing.small};
`;

export const AppComingSoon = styled.p`
  font-size: 1.2rem;
  font-weight: ${typography.fontWeight.bold};
  text-align: left;
  margin-bottom: ${spacing.medium};
`;

export const NavLinks = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: ${spacing.large};
`;

export const FooterLink = styled.a`
  color: white;
  text-decoration: none;
  margin-bottom: ${spacing.small};
  display: block;

  &:hover {
    text-decoration: underline;
  }
`;

export const SubscribeIcons = styled.div`
  display: flex;
  gap: ${spacing.small};
  position: absolute;
  bottom: ${spacing.small};
  right: ${spacing.small};
`;

export const SubscribeIcon = styled.a`
  color: white;
  font-size: 1.5rem;
`;

export const SubscribeLink = styled.a`
  color: white;
  font-size: 1.5rem;
`;
