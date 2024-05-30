import styled from 'styled-components';
import { colors, spacing, typography } from './';

export const SubscribeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  padding: 20px;
  background-color: white;
`;

export const TitleSection = styled.section`
  width: 534.96px;
  height: 262px;
  padding: 24px 0 0 0;
  border-radius: 16px 0 0 0;
  text-align: left;
`;

export const Title = styled.h1`
  width: 486.96px;
  height: 46px;
  font-family: 'SF-Pro';
  font-size: 38px;
  font-weight: 700;
  line-height: 46px;
  text-align: left;
  color: black;
`;

export const Paragraph = styled.p`
  width: 486.96px;
  height: 84px;
  font-family: 'SF-Pro';
  font-size: 22px;
  font-weight: 400;
  line-height: 28px;
  letter-spacing: -0.26px;
  text-align: left;
  color: black;
`;

export const FormWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 432px;
  height: 36px;
  padding: 4px 0 0 0;
  border-radius: 30px;
  border: 2px solid black;
  background-color: white;
  margin: 20px 0;
`;

export const Input = styled.input`
  padding: 10px;
  margin-right: 10px;
  border-radius: 20px;
  border: none;
  flex: 1;
  font-size: 1rem;
  color: grey;
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
    background-color: darken(${colors.secondary}, 10%);
  }
`;

export const LessonWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  margin: 40px 0;
`;

export const LessonCard = styled.div`
  width: 272px;
  height: 421px;
  padding: 16px;
  border-radius: 24px;
  background-color: ${colors.primary};
  color: white;
  text-align: left;
  margin: 10px;
`;

export const LessonTitle = styled.h2`
  width: 240px;
  height: 84px;
  font-family: 'Poppins';
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

export const StayTunedSection = styled.section`
  text-align: center;
  margin: 40px 0;
`;

export const StayTunedTitle = styled.h2`
  width: 297px;
  height: 28px;
  font-family: 'SF Pro';
  font-size: 22px;
  font-weight: 700;
  line-height: 28px;
  letter-spacing: -0.26px;
  color: black;
  margin-bottom: 10px;
`;

export const StayTunedText = styled.p`
  width: 476px;
  height: 21px;
  font-family: 'SF Pro';
  font-size: 16px;
  font-weight: 400;
  line-height: 21px;
  letter-spacing: -0.31px;
  color: black;
  margin-bottom: 20px;
`;

export const TrendingSection = styled.section`
  width: 100%;
  text-align: left;
  margin-top: 40px;
`;

export const TrendingTitle = styled.h2`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 20px;
`;

export const TrendingWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;

export const TrendingCard = styled(LessonCard)`
  max-width: 220px;
`;
