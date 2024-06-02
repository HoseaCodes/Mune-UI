import styled from 'styled-components';
import { colors, spacing, typography } from './';

export const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  padding: 20px;
  background-color: white;
`;

export const TitleSection = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1200px;
  margin-bottom: 40px;
`;

export const Title = styled.h1`
  width: 432px;
  height: 168px;
  font-family: 'Poppins', sans-serif;
  font-size: 48px;
  font-weight: 700;
  line-height: 56px;
  text-align: left;
  color: black;
`;

export const FormWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 432px;
  height: 36px;
  padding: 4px 0;
  border-radius: 30px;
  border: 2px solid #2C2C2E;
  margin-top: 20px;
`;

export const Input = styled.input`
  flex: 1;
  padding: 10px;
  border: none;
  font-family: 'Poppins', sans-serif;
  font-size: 12px;
  font-weight: 400;
  color: black;
  border-radius: 20px;
`;

export const PhoneIcon = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 10px;
`;

export const GetStartedButton = styled.button`
  width: 69px;
  height: 16px;
  background-color: ${colors.secondary};
  color: white;
  border: none;
  border-radius: 15px;
  font-family: 'Poppins', sans-serif;
  font-size: 12px;
  font-weight: 500;
  cursor: pointer;

  &:hover {
    background-color: darken(${colors.secondary}, 10%);
  }
`;

export const StoreButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

export const StoreButton = styled.a`
  display: flex;
  align-items: center;
  padding: 7.21px 14.43px;
  border-radius: 60.12px;
  border: 2px solid #2C2C2E;
  text-decoration: none;
  color: black;
  margin-right: 10px;

  &:last-child {
    margin-right: 0;
  }
`;

export const StoreLogo = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 10px;
`;

export const StoreTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StoreText = styled.span`
  font-size: 10px;
  font-weight: 400;
`;

export const StoreTitle = styled.span`
  font-size: 12px;
  font-weight: 500;
`;

export const EasyPaymentsImage = styled.img`
  max-width: 50%;
  height: auto;
  border-radius: 24px;
`;

export const SectionWrapper = styled.section`
  width: 100%;
  max-width: 1200px;
  margin: 40px 0;
`;

export const SectionTitle = styled.h2`
  width: 486.96px;
  font-family: 'Poppins', sans-serif;
  font-size: 38px;
  font-weight: 700;
  line-height: 46px;
  text-align: left;
  color: white;
`;

export const SectionParagraph = styled.p`
  width: 487px;
  font-family: 'Poppins', sans-serif;
  font-size: 22px;
  font-weight: 400;
  line-height: 28px;
  letter-spacing: -0.26px;
  text-align: left;
  color: white;
`;

export const SectionButton = styled.button`
  width: 127px;
  height: 34px;
  padding: 4px 24px;
  border-radius: 12px;
  background-color: white;
  color: ${colors.primary};
  border: none;
  font-family: 'Poppins', sans-serif;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  margin-top: 20px;

  &:hover {
    background-color: ${colors.secondary};
    color: white;
  }
`;

export const ImageWrapper = styled.div`
  max-width: 50%;
`;

export const Image = styled.img`
  width: 100%;
  height: auto;
  border-radius: 24px;
`;

export const GridWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
  max-width: 1200px;
  margin-top: 40px;
`;

export const GridItem = styled.div`
  width: calc(50% - 20px);
  background-color: ${colors.primary};
  border-radius: 24px;
  padding: 24px;
  margin-bottom: 20px;
  color: white;
`;

export const GridItemTitle = styled.h3`
  font-family: 'Poppins', sans-serif;
  font-size: 28px;
  font-weight: 700;
  line-height: 34px;
  text-align: left;
  margin-bottom: 10px;
`;

export const GridItemParagraph = styled.p`
  font-family: 'Poppins', sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 21px;
  text-align: left;
  margin-bottom: 20px;
`;

export const GridItemButton = styled.button`
  width: 133px;
  height: 34px;
  padding: 4px 24px;
  border-radius: 12px;
  background-color: white;
  color: ${colors.primary};
  border: none;
  font-family: 'Poppins', sans-serif;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;

  &:hover {
    background-color: ${colors.secondary};
    color: white;
  }
`;
