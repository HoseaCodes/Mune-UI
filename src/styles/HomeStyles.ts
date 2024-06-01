import styled from 'styled-components';
import { colors, spacing } from './';

export const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

export const HeroSection = styled.section`
  background-color: ${colors.background};
  padding: ${spacing.large};
  text-align: center;
`;

export const FeaturesSection = styled.section`
  padding: ${spacing.large};
`;

export const FeaturesList = styled.ul`
  list-style: none;
  padding: 0;
`;

export const FeatureItem = styled.li`
  margin: ${spacing.medium} 0;
`;
