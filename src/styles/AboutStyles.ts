import styled from 'styled-components';
import { colors, spacing, typography } from './';

export const AboutWrapper = styled.div`
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
  background-color: white;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
`;

export const TextContent = styled.div`
  flex: 1;
  margin-right: 20px;
`;

export const Title = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  text-align: left;
  margin-bottom: 20px;
`;

export const Paragraph = styled.p`
  font-size: 1rem;
  line-height: 1.5;
  margin-bottom: 20px;
  text-align: left;
`;

export const GetStartedButton = styled.button`
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

export const Image = styled.img`
  flex: 1;
  max-width: 600px;
  border-radius: 10px;
`;

export const TeamSection = styled.section`
  max-width: 1200px;
  margin: 40px auto;
  padding: 20px;
`;

export const TeamTitle = styled.h2`
  font-size: 2rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 40px;
`;

export const TeamGrid = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;

export const TeamMember = styled.div`
  text-align: center;
  margin: 10px;
  cursor: pointer;
  position: relative;

  &:hover .bio {
    display: block;
  }
`;

export const TeamImage = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  margin-bottom: 10px;
`;

export const TeamName = styled.div`
  font-weight: bold;
  margin-bottom: 5px;
`;

export const Bio = styled.div`
  display: none;
  position: absolute;
  background: white;
  color: black;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 10px;
  width: 200px;
  z-index: 1;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
`;

export const MissionSection = styled.section`
  position: relative;
  text-align: left;
`;

export const MissionImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 10px;
`;

export const MissionText = styled.div`
  position: absolute;
  top: 20%;
  left: 10%;
  background: rgba(255, 255, 255, 0.8);
  padding: 20px;
  border-radius: 10px;
`;

export const MissionTitle = styled.h2`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 20px;
`;

export const MissionParagraph = styled.p`
  font-size: 1rem;
  line-height: 1.5;
  margin-bottom: 20px;
`;

export const MissionButton = styled.button`
  padding: ${spacing.small} ${spacing.large};
  background-color: white;
  color: ${colors.secondary};
  border: 2px solid ${colors.secondary};
  border-radius: 20px;
  font-weight: ${typography.fontWeight.bold};
  cursor: pointer;

  &:hover {
    background-color: ${colors.secondary};
    color: white;
  }
`;
