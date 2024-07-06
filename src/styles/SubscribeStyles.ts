import styled from 'styled-components';
import { colors, typography, spacing } from './';
import { Link } from 'react-router-dom';

export const SubscribeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  padding: 20px;
`;

export const TitleSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 1200px;
  padding: 24px 0;

  @media (max-width: 769px) {
    flex-direction: column;
    justify-content: center;
  }

  @media (min-width: 769px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const TextWrapper = styled.div`
  text-align: center;
  margin-top: -6rem;

  @media (max-width: 769px) {
    text-align: center;
    margin-right: 0px;
    margin-bottom: 0;
  }

  @media (min-width: 769px) {
    text-align: left;
    margin-right: 20px;
    margin-bottom: 0;
  }
`;

export const Title = styled.h1`
  font-family: Poppins, sans-serif;
  width: 486.96px;
  height: 46px;
  font: sf-pro;
  font-size: 2.4rem;
  font-weight: 700;
  line-height: 2.5rem;
  letter-spacing: -0.0625rem;
  text-align: left;
  color: #010a03;
  margin-bottom: 24px;

  @media (max-width: 769px) {
    white-space: pre-wrap; /* This will enable the text to break */
    width: 220px;
    font-size: 34px;
    line-height: 41px;
    margin: 6rem 0 3rem 4rem;
  }

  @media (min-width: 769px) {
    width: 40.58rem;
    height: 2.825rem;
    font-size: 1.375rem;
    line-height: 1.75rem;
    text-align: left;
  }
`;

export const Paragraph = styled.p`
  font-family: Poppins, sans-serif;
  width: 486.96px;
  height: 84px;
  font-size: 1.4rem;
  font-weight: 400;
  line-height: 1.8rem;
  letter-spacing: -0.01625rem;
  text-align: left;
  color: #010a03;
  margin-bottom: 24px;

  @media (max-width: 769px) {
    width: 20.58rem;
    height: 5.25rem;
    font-size: 1.375rem;
    line-height: 1.75rem;
    text-align: center;
  }

  @media (min-width: 769px) {
    width: 486.96px;
    height: 84px;
    font-size: 1.4rem;
    line-height: 1.8rem;
    text-align: left;
  }
`;

export const GreenMuneButton = styled(Link)`
  padding: ${spacing.small} ${spacing.medium};
  background-color: #19a530;
  color: #f2f7f4;
  text-decoration: none;
  border-radius: 12px;
  margin-left: ${spacing.xsmall};
  display: flex;
  align-items: center;
  height: 100%;
  width: 6rem;
  white-space: nowrap;
  box-shadow: 0 0 10px 0 rgba(26, 174, 51, 0.8);
  margin-bottom: 20px;

  @media (max-width: 768px) {
    margin: 3rem 0 2rem 6.4rem;
    text-align: center;
    justify-content: center;
    align-self: flex-start;
  }

  @media (min-width: 769px) {
    margin-bottom: 0;
    height: auto;
    padding: 8px 24px;
    align-self: flex-start;
  }

  &:hover {
    background-color: ${colors.primary};
    color: #f2f7f4;
    box-shadow: 0 0 10px 0 rgba(26, 174, 51, 1);
  }
`;

export const FormWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 432px;
  height: 25px;
  padding: 6px;
  border-radius: 30px;
  border: 2px solid black;
  background-color: white;
  margin-bottom: 20px;
`;

export const Input = styled.input`
  padding: 9px;
  margin-right: 10px;
  border-radius: 20px;
  border: none;
  flex: 1;
  font-size: 12px;
  outline: none;
  color: black;
`;

export const PhoneIcon2 = styled.img`
  width: 24px;
  margin-right: ${spacing.small};
`;

export const SubmitButton = styled.button`
  width: 109px;
  height: 24px;
  padding: 4px 24px;
  border-radius: 15px;
  background-color: ${colors.secondary};
  color: white;
  border: none;
  font-weight: ${typography.fontWeight.bold};
  cursor: pointer;

  &:hover {
    background-color: white;
    color: ${colors.secondary};
  }
`;

export const LessonWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  margin: -10rem -6rem 0 0;

  @media (max-width: 769px) {
    display: flex;
    justify-content: flex-start;
    flex-direction: row;
    flex-wrap: wrap; /* Allows wrapping on larger screens */
    overflow-x: visible; /* Makes sure horizontal scroll is only for mobile */
    margin: -8rem 0 0 6rem;
  }
`;

export const LessonCard = styled.div`
  width: 272px;
  height: 421px;
  padding: 16px;
  border-radius: 24px;
  background-color: ${colors.primary};
  color: white;
  text-align: left;
  margin: 0 6rem 0 0;
  flex-direction: row;

  @media (max-width: 768px) {
    margin: 7rem 1rem;
  }

  @media (min-width: 769px) {
    margin-right: 6rem;
  }
`;

export const LessonTitle = styled.h2`
  width: 240px;
  height: 84px;
  font: poppins;
  font-size: 22px;
  font-weight: 700;
  line-height: 28px;
  letter-spacing: -0.26px;
  color: white;
  margin-bottom: 10px;
`;

export const LessonDescription = styled.p`
  width: 240px;
  height: 54px;
  font-family: 'Poppins';
  font-size: 13px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: -0.08px;
  color: white;
  margin-bottom: 10px;
`;

export const LessonButton = styled.button`
  width: 139px;
  height: 34px;
  padding: 4px 24px;
  border-radius: 12px;
  background-color: white;
  color: ${colors.primary};
  border: none;
  font-weight: ${typography.fontWeight.bold};
  cursor: pointer;
  margin-bottom: 20px;

  &:hover {
    background-color: ${colors.secondary};
    color: white;
  }
`;

export const LessonImage = styled.img`
  width: 242px;
  height: 141px;
  border-radius: 24px;
  margin-top: 16px;
`;

export const SubscribeImage = styled.img`
  width: 50%;
  height: auto;
  border-radius: 16px;
`;

export const StayTunedSection = styled.section`
  text-align: center;
  margin: 40px;
`;

export const StayTunedTitle = styled.h2`
  width: 397px;
  height: 28px;
  font: sf-pro;
  font-size: 22px;
  font-weight: 700;
  line-height: 28px;
  letter-spacing: -0.26px;
  color: black;
  margin-bottom: -10px;
  margin-left: 28px;
`;

export const StayTunedText = styled.p`
  width: 476px;
  height: 21px;
  font: sf-pro;
  font-size: 16px;
  font-weight: 400;
  line-height: 21px;
  letter-spacing: -0.31px;
  color: black;
  margin-bottom: 20px;
  text-align: justified-center;
  padding: 0px, 10px, 0px, 10px;
`;

export const StayTunedFormWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 240px;
  height: 26px;
  padding: 6px;
  border-radius: 30px;
  border: 2px solid black;
  background-color: white;
  margin-bottom: 20px;
  margin-left: 105px;
  margin-top: -10px;
`;

export const StayTunedInput = styled.input`
  padding: 9px;
  margin-right: 10px;
  border-radius: 20px;
  border: none;
  flex: 1;
  font-size: 12px;
  outline: none;
  color: black;
`;

export const TrendingSection = styled.section`
  width: 1256px;
  text-align: left;
  margin: 0 1rem 0 0;
  padding: 0px, 24px, 0px, 24px;
`;

export const TrendingTitle = styled.h2`
  font-size: 34px;
  font-weight: bold;
  margin-bottom: 20px;
  margin-left: 30px;
`;

export const TrendingWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;

export const TrendingCard = styled.div`
  max-width: 246px;
  height: 300px;
  width: 272px;
  padding: 16px;
  border-radius: 24px;
  background-color: ${colors.primary};
  color: white;
  text-align: left;
  margin: 0 2.2rem 0 0;

  @media (max-width: 768px) {
    margin-right: 10px; /* Adjust margin for better spacing on mobile */
  }
`;

export const TrendingImage = styled.img`
  width: 238px;
  height: 128px;
  border-radius: 24px;
  margin-top: -30px;
  margin-bottom: 30px;
`;
