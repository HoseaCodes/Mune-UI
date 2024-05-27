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
  padding: 20px;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 10px;
  border: none;
  font-size: 1rem;
  background-color: white;
  color: grey;
`;

export const TextArea = styled.textarea`
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 10px;
  border: none;
  font-size: 1rem;
  background-color: white;
  color: grey;
  height: 100px;
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
`;

export const TeamImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 10px;
`;

export const ReplyText = styled.p`
  font-size: 1rem;
  color: black;
  font-weight: ${typography.fontWeight.bold};
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
