import styled from 'styled-components';
import { colors, spacing, typography } from './';

export const ContactWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

export const MainContent = styled.main`
  flex: 1;
  padding: 20px;
  background-color: #f5f5f5;
`;

export const Section = styled.section`
  max-width: 1200px;
  max-height: 832px;
  top: 501px;
  left: 100;
  margin: 0 auto;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Title = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  color: black;
  text-align: left;
`;

export const FormWrapper = styled.div`
  background-color: ${colors.primary};
  padding: 24px;
  border-radius: 24px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  max-width: 521px;
  height: 389px;
  gap: 8px;
`;

export const Input = styled.input`
  width: 489px;
  height: 34px;
  padding: 4px 24px;
  margin-bottom: 8px;
  margin-left: -8px;
  border-radius: 16px;
  border: none;
  font-size: 1rem;
  background-color: white;
  color: grey;
`;

export const TextArea = styled.textarea`
  width: 489px;
  height: 203px;
  padding: 4px 24px;
  margin-bottom: 8px;
  margin-left: -8px;
  border-radius: 16px;
  border: none;
  font-size: 1rem;
  background-color: white;
  color: grey;
`;

export const SubmitButton = styled.button`
  padding: ${spacing.small} ${spacing.large};
  background-color: white;
  color: ${colors.primary};
  border: none;
  border-radius: 20px;
  font-weight: ${typography.fontWeight.bold};
  cursor: pointer;

  &:hover {
    background-color: ${colors.secondary};
    color: white;
  }
`;

export const TeamImages = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
  margin-left: 880px;
  align-self: flex-end;
`;

export const TeamImage = styled.img`
  width: 67.5px;
  height: 67.5px;
  border-radius: 33.75px;
  border: 2.25px;
  margin-right: -20px;
  position: relative;
`;

export const ReplyText = styled.p`
  font-size: 1rem;
  color: black;
  font-weight: ${typography.fontWeight.bold};
  width: 334px;
  height: 25px;
  margin-left: 20px;
  gap: 0px;
`;

export const FAQSection = styled.section`
  max-width: 1200px;
  margin: 40px auto;
  padding: 20px;
`;

export const FAQTitle = styled.h2`
  font-size: 2rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 40px;
`;

export const FAQGrid = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;

export const FAQItem = styled.div`
  background-color: ${colors.primary};
  color: white;
  padding: 20px;
  border-radius: 20px;
  margin: 10px;
  flex: 1;
  max-width: 300px;
`;

export const Question = styled.div`
  font-size: 1rem;
  font-weight: bold;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  margin-bottom: 10px;
`;

export const Answer = styled.div`
  font-size: 0.9rem;
  display: none;
  &.active {
    display: block;
  }
`;
