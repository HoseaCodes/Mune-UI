import styled from 'styled-components';
import { colors, spacing, typography } from './';

export const FooterWrapper = styled.footer`
  background-color: ${colors.primary};
  color: white;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-top-left-radius: 1.25rem;
  border-top-right-radius: 1.25rem;
  position: relative;
  min-height: 31.25rem;
`;

export const FooterFormContainer = styled.div`
  background-color: white;
  border-radius: 80px;
  padding: 20px;
  margin-bottom: ${spacing.large};
  width: 100%;
  max-width: 559px;
  max-height: 92px;
  display: flex;
  justify-content: center; /* Center the content horizontally */
  align-items: center; /* Center the content vertically */
  gap: 10px;
`;

export const FooterFormWrapper = styled.div`
  padding: 7px;
  box-shadow: 0 0 0 2px black;
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 479px;
  max-height: 37px;
  border-radius: 24px;
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
  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

export const FooterContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    margin-bottom: 1rem;
  }
`;

export const FooterLogo = styled.img`
  width: 11.94rem;
  height: 5.63rem;
  margin-bottom: 3.13rem;

  @media (max-width: 768px) {
    width: 6rem;
    height: 3rem;
    margin-bottom: 1rem;
    align-self: flex-start;
  }
`;

export const PhoneIcon = styled.img`
  width: 1.5rem;
  margin-right: 0.5rem;
  display: none;

  @media (max-width: 768px) {
    display: block;
    width: 1rem;
    margin-right: 0.25rem;
    position: absolute;
    left: 1rem;
    top: 0.6rem;
  }
`;

export const FooterTopText = styled.h3`
  font-size: 3rem;
  font-weight: ${typography.fontWeight.bold};
  text-align: center;
  margin-bottom: 1.25rem;

  @media (max-width: 768px) {
    font-size: 1.5rem;
    margin-bottom: 1rem;
    text-align: left;
    align-self: flex-start;
  }
`;

export const AppComingSoon = styled.p`
  font-size: 1.5rem;
  font-weight: ${typography.fontWeight.bold};
  text-align: left;
  margin-top: -1.25rem;
  margin-bottom: 1.5rem;

  @media (max-width: 768px) {
    font-size: 1rem;
    margin-top: -0.5rem;
    margin-bottom: 1rem;
    align-self: flex-start;
  }
`;

export const FooterSectionContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding-right: 2rem;
  gap: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    padding-right: 0;
    gap: 0.5rem;
  }
`;

export const FooterSection = styled.div`
  flex: 1;
  margin: 0 1rem;

  &:first-child {
    flex: 2;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  @media (max-width: 768px) {
    flex: none;
    margin-bottom: 2rem;
    margin-left: 0;
    text-align: left;
    align-items: flex-start;
  }
`;

export const FooterTitle = styled.h4`
  font-size: 1rem;
  font-weight: ${typography.fontWeight.bold};
  margin-bottom: 0.5rem;
  color: #f2f7f4;

  @media (max-width: 768px) {
    font-size: 0.875rem;
    display: none;
  }
`;

export const FooterLink = styled.a`
  color: #f2f7f4;
  text-decoration: none;
  margin-bottom: 1rem;
  display: block;

  &:hover {
    text-decoration: underline;
  }

  @media (max-width: 768px) {
    margin-bottom: 1rem;
    font-size: 0.875rem;
  }
`;

export const LegalSection = styled.div`
  margin-right: 1vw;

  @media (max-width: 768px) {
    margin-left: 0;
    display: none;
  }
`;

export const NavigationSection = styled.div`
  // margin-left: -10vw;

  @media (max-width: 768px) {
    flex: none;
    margin-bottom: 1rem;
    margin-left: 0;
  }
`;

export const SubscribeSection = styled.div`
  margin-left: 1vw;

  @media (max-width: 768px) {
    flex: none;
    margin-bottom: 1rem;
    margin-left: 0;
  }
`;

export const StoreLinks = styled.div`
  display: flex;
  gap: 1vw;
  margin-top: 1rem;

  @media (max-width: 768px) {
    display: none;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }
`;

export const StoreButton = styled.a`
  display: flex;
  align-items: center;
  padding: 0.5rem;
  border: 0.125rem solid #010a03;
  border-radius: 0.625rem;
  text-decoration: none;
  color: #010a03;
  background-color: #f2f7f4;

  img {
    height: 1.25rem;
    margin-right: 0.625rem;
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    font-size: 0.625rem;
    width: 5.5rem;

    div {
      &:first-child {
        font-weight: bold;
      }
    }
  }
`;

export const SubscribeLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;

  @media (max-width: 768px) {
    justify-content: flex-start;
    align-self: flex-start;
  }
`;

export const SubscribeLink = styled.a`
  color: #f2f7f4;
  font-size: 1.5rem;

  @media (max-width: 768px) {
    font-size: 1.25rem;
  }
`;

export const Form = styled.form`
  display: flex;
  align-items: center;
  border: 0.2rem solid #cee0d0;
  border-radius: 1rem;
  overflow: hidden;
  margin-bottom: 2rem;
  background-color: #f2f7f4;
  position: relative;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: stretch;
    margin-bottom: 1rem;
    margin-top: 1rem;
    align-self: flex-start;
    border: 0.2rem solid #010a03;
    height: 2rem;
  }
`;

export const Input = styled.input`
  padding: 0.5rem;
  border: none;
  outline: none;
  font-size: 1rem;
  width: 20rem;
  border-radius: 1.5rem 0 0 1.5rem;
  margin: 0.5rem;
  background-color: #f2f7f4;
  color: #010a03;

  @media (max-width: 768px) {
    width: 100%;
    border-radius: 1rem 1rem 0 0;
    margin: 0.5rem 0;
    padding-top: 0.1rem;
    padding-bottom: 2rem;
    padding-left: 2.5rem;
  }
`;

export const SubmitButton = styled.button`
  padding: 0.5rem 1rem;
  background-color: ${colors.primary};
  color: #f2f7f4;
  border: none;
  font-weight: ${typography.fontWeight.bold};
  cursor: pointer;
  border-radius: 1rem;
  margin-right: 0.5rem;

  @media (max-width: 768px) {
    display: none;
  }
`;
