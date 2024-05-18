import styled from 'styled-components';
import { colors, spacing, typography } from './';

export const FooterWrapper = styled.footer`
  background-color: ${colors.primary};
  color: white;
  padding: ${spacing.large};
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  position: relative;
  min-height: 300px; /* Adjust height as needed */
`;

export const FooterContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: ${spacing.large};
`;

export const FooterTopText = styled.h3`
  font-size: 2rem; /* Adjust size as needed */
  font-weight: ${typography.fontWeight.bold};
  text-align: center;
  margin-bottom: ${spacing.medium};
`;

export const FooterSectionContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
`;

export const FooterSection = styled.div`
  flex: 1;
  margin: ${spacing.medium};
`;

export const FooterTitle = styled.h4`
  font-size: ${typography.fontSize};
  font-weight: ${typography.fontWeight.bold};
  margin-bottom: ${spacing.small};
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

export const DownloadButtons = styled.div`
  display: flex;
  gap: ${spacing.small};
`;

export const DownloadButton = styled.img`
  height: 40px; /* Adjust the height as needed */
`;

export const SubscribeLinks = styled.div`
  display: flex;
  gap: ${spacing.small};
`;

export const SubscribeLink = styled.a`
  color: white;
  font-size: 1.5rem; /* Adjust the font size as needed */
`;

export const Form = styled.form`
  display: flex;
  align-items: center;
  border: 6px solid black; /* Thin black border */
  border-radius: 20px;
  overflow: hidden;
  margin-bottom: ${spacing.large};
`;

export const Input = styled.input`
  padding: ${spacing.small};
  border: none;
  outline: none;
  font-size: ${typography.fontSize};
  width: 300px; /* Adjust width as needed */
`;

export const SubmitButton = styled.button`
  padding: ${spacing.small} ${spacing.large};
  background-color: ${colors.secondary};
  color: white;
  border: none;
  border-radius: 20px;
  font-weight: ${typography.fontWeight.bold};
  cursor: pointer;

  &:hover {
    background-color: darken(${colors.secondary}, 10%);
  }
`;
