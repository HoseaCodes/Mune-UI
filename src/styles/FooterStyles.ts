import styled from 'styled-components';
import { colors, spacing, typography } from './';

export const FooterWrapper = styled.footer`
  background-color: ${colors.primary};
  color: white;
  padding: ${spacing.large};
  display: flex;
  flex-direction: column;
  align-items: center;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  position: relative;
  min-height: 500px;
`;

export const FooterContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: ${spacing.large};
`;

export const FooterLogo = styled.img`
  width: 191px;
  height: 90px;
  margin-bottom: 50px;
`;

export const PhoneIcon = styled.img`
  width: 24px;
  margin-right: ${spacing.small};
`;

export const FooterTopText = styled.h3`
  font-size: 3rem;
  font-weight: ${typography.fontWeight.bold};
  text-align: center;
  margin-bottom: ${spacing.medium};
`;

export const AppComingSoon = styled.p`
  font-size: 1.5rem;
  font-weight: ${typography.fontWeight.bold};
  text-align: left;
  margin-top: -2rem;
  margin-bottom: 1.5rem;
`;

export const FooterSectionContainer = styled.div`
  display: flex;
  justify-content: space-between; /* Changed to space-between to reduce space */
  width: 100%;
  padding-right: ${spacing.large};
  gap: ${spacing.small};
`;

export const FooterSection = styled.div`
  flex: 1;
  margin: 0 0 0 200px; /* Reduced margin */

  &:first-child {
    flex: 2;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  @media (max-width: 903px) {
    flex: none;
    margin-bottom: ${spacing.medium};
  }
`;

export const FooterTitle = styled.h4`
  font-size: ${typography.fontSize};
  font-weight: ${typography.fontWeight.bold};
  margin-bottom: ${spacing.small};
  color: #F2F7F4;
`;

export const FooterLink = styled.a`
  color: #F2F7F4;
  text-decoration: none;
  margin-bottom: ${spacing.large};
  
  display: block;
  &:hover {
    text-decoration: underline;
  }
`;

export const LegalSection = styled.div`
  flex: 1;
  margin-left: 38vw;
  
  @media (max-width: 903px) {
    flex: none;
    margin-bottom: ${spacing.medium};
  }
`;

export const NavigationSection = styled.div`
  flex: 1;
  margin-left: 5vw; /* Reduced margin */

  @media (max-width: 903px) {
    flex: none;
    margin-bottom: ${spacing.medium};
  }
`;

export const SubscribeSection = styled.div`
  flex: 1;
  margin-left: 5% ; /* Reduced margin */

  @media (max-width: 903px) {
    flex: none;
    margin-bottom: ${spacing.medium};
  }
`;

export const StoreLinks = styled.div`
  display: flex;
  gap: 1vw;
  margin-top: ${spacing.small};

  @media (max-width: 903px) {
    flex-direction: row;
    align-items: center;
    justify-content: center;
    top: 75vh;
    left: 25vw;
    transform: translateX(-50%);
  }
`;

export const StoreButton = styled.a`
  display: flex;
  align-items: center;
  padding: 4px;
  border: 2px solid #010A03;
  border-radius: 10px;
  text-decoration: none;
  color: #010a03;
  background-color: #f2f7f4;

  img {
    height: 20px;
    margin-right: 10px;
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    font-size: 10px;
    width: 81px;

    div {
      &:first-child {
        font-weight: bold;
      }
    }
  }
`;

export const SubscribeLinks = styled.div`
  display: flex;
  gap: ${spacing.small};
  margin-top: 20px;
`;

export const SubscribeLink = styled.a`
  color: #F2F7F4;
  font-size: 1.5rem;
`;

export const Form = styled.form`
  display: flex;
  align-items: center;
  border: 3px solid #CEE0D0;
  border-radius: 16px;
  overflow: hidden;
  margin-bottom: ${spacing.large};
  background-color: #F2F7F4;
`;

export const Input = styled.input`
  padding: ${spacing.small};
  border: none;
  outline: none;
  font-size: ${typography.fontSize};
  width: 300px;
  border-radius: 30px 0 0 30px;
  margin: ${spacing.small};
  background-color: #F2F7F4;
  color: #010A03;
`;

export const SubmitButton = styled.button`
  padding: ${spacing.small} ${spacing.large};
  background-color: ${colors.primary};
  color: #F2F7F4;
  border: none;
  font-weight: ${typography.fontWeight.bold};
  cursor: pointer;
  border-radius: 13px;
  margin-right: ${spacing.small};
`;
