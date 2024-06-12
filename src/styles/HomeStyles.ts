import styled from 'styled-components';

export const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #f2f7f4;
  position: relative;
`;

export const Title = styled.h1`
  max-width: 37vw; /* Adjusted for better wrapping */
  font-family: Poppins, sans-serif;
  font-size: 3.8vw; /* Using vw for responsive font size */
  font-weight: 700;
  line-height: 4.8vw; /* Adjusted line height for better spacing */
  text-align: left;
  letter-spacing: -0.02em;
  color: #f2f7f4;
  margin: 0;
  position: absolute;
  top: 40.8vh; /* Adjusted for better vertical alignment */
  left: 6.2vw; /* Adjusted for better horizontal alignment */
  z-index: 1;
  white-space: normal; /* Allow text to wrap */

  @media (max-width: 903px) {
    max-width: 45vw; /* Adjust for smaller screens */
    font-size: 4.9vw; /* Using vw for responsive font size */
    line-height: 7vw; /* Using vw for responsive line height */
    top: 5vh; /* Adjusted for smaller screens */
    left: 25vw; /* Adjusted for smaller screens */
    color: #f2f7f4;
  }
`;

export const VideoClip = styled.img`
  width: 1584px;
  height: 836px;
  border-radius: 48px;
  background: linear-gradient(
    180deg,
    rgba(1, 10, 3, 0.75) 61.5%,
    #010a03 100%
  );
  margin-top: 140px;
  position: relative;

  @media (max-width: 903px) {
    width: 288px;
    height: 476px;
    margin-top: 0;
    position: relative;
    top: 0;
  }
`;

export const FormWrapper = styled.div`
  display: flex;
  align-items: center;
  border-radius: 14px;
  border: 2px solid #cee0d0;
  background-color: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  position: absolute;
  top: 63vh;
  left: 6.3vw;
  max-width: 28vw;
  width: 28vw;
  height: 44px;
  color: #f2f7f4;
  padding: 05px;

  @media (max-width: 903px) {
    top: 48vh;
    left: 30vw;
    height: auto;
    flex-direction: column;
    background-color: #f2f7f4;
    border: 2px solid #cee0d0;
  }
`;

export const Input = styled.input`
  flex: 1;
  font-family: Poppins, sans-serif;
  font-size: 14px;
  font-weight: 400;
  color: #f2f7f4;
  width: 208px;
  height: 16px;
  border: none;
  outline: none;
  background: transparent;

  ::placeholder {
    color: #f2f7f4;
    text-align: left;
  }

  @media (max-width: 903px) {
    font-size: 4vw;
    padding: 2vw;
    color: #010a03; /* Black font color for mobile */
    ::placeholder {
      color: #010a03;
    }
  }
`;

export const Button = styled.button`
  width: 6.823vw;
  height: 4vh;
  font-family: Poppins, sans-serif;
  font-size: 0.781vw;
  font-weight: 600;
  color: #f2f7f4;
  background: #1dbf38;
  border-radius: 1.5vw;
  border: none;
  cursor: pointer;

  @media (max-width: 903px) {
    width: 20vw;
    height: 6vw;
    font-size: 3vw;
    padding: 1vw 2vw;
  }
`;

export const StoreLinks = styled.div`
  display: flex;
  gap: 1vw;
  position: absolute;
  top: 73vh; /* Adjust as needed */
  left: 6.3vw; /* Adjust as needed */
  z-index: 2;

  @media (max-width: 903px) {
    flex-direction: row;
    align-items: center;
    justify-content: center;
    top: 75vh; /* Adjust as needed */
    left: 25vw; /* Adjust as needed */
    font-size: 12px;
    width: 46.99vw;
  }
`;

export const StoreButton = styled.a`
  display: flex;
  align-items: center;
  padding: 0.5vw 1.5vw;
  border: 0.2vw solid #cee0d0;
  border-radius: 5vw;
  text-decoration: none;
  color: #010a03;
  background-color: #f2f7f4;
  top: -45vh;

  img {
    width: 2vw;
    margin-right: 1vw;
  }

  @media (max-width: 903px) {
    width: 90%;
    justify-content: center;
  }
`;

export const PlayButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 13vw;
  height: 2.292vw;
  padding: 4px, 24px, 4px, 24px;
  border-radius: 0.625vw;
  border: 0.2vw solid #cee0d0;
  background: #ffffff33;
  position: absolute;
  bottom: 227vh;
  right: 8vw;

  @media (max-width: 903px) {
    width: 15vw;
    height: 6vw;
    justify-content: center;
    top: 58vh;
    bottom: 1vw;
    right: 1vw;
    transform: translateX(-50%);
    background: #ffffff33; /* Light background for play button */
    border: 2px solid #cee0d0;
  }
`;

export const PlayButtonIcon = styled.img`
  width: 0.833vw;
  height: 0.833vw;
  margin-right: 0.97vw;
  margin-left: 0.699vw;

  @media (max-width: 903px) {
    width: 6vw;
    height: 6vw;
    margin-right: 0;
  }
`;

export const PlayButtonText = styled.span`
  font-family: Poppins, sans-serif;
  font-size: 0.899vw;
  font-weight: 600;
  line-height: 20;
  color: #f2f7f4;

  @media (max-width: 903px) {
    display: none;
  }
`;

export const SectionWrapper = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 60px 0;
  background-color: #f2f7f4;

  @media (max-width: 903px) {
    flex-direction: column;
    padding: 30px 0;
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 45%;
  padding-right: 20px;

  @media (max-width: 903px) {
    max-width: 100%;
    text-align: center;
    padding-right: 0;
  }
`;

export const Title2 = styled.h2`
  font-family: Poppins, sans-serif;
  font-size: 2.25rem;
  font-weight: 700;
  line-height: 1.2;
  color: #010a03;
  margin-bottom: -8px;
`;

export const Description = styled.p`
  font-family: Poppins, sans-serif;
  font-size: 1.375rem;
  font-weight: 400;
  line-height: 1.5;
  color: #010a03;
  margin-bottom: 15px;
  max-width: 49vw;
`;

export const GetMunEButton = styled.button`
  padding: 10px 20px;
  font-family: Poppins, sans-serif;
  font-size: 0.938rem;
  font-weight: 700;
  color: #f2f7f4;
  background-color: #1dbf38;
  border: none;
  border-radius: 12px;
  width: 7vw;
  box-shadow:
    1px 2px 6px rgba(64, 213, 88, 0.26),
    3px 10px 10px rgba(64, 213, 88, 0.21),
    6px 22px 14px rgba(64, 213, 88, 0.14),
    11px 39px 16px rgba(64, 213, 88, 0.05),
    17px 61px 18px rgba(64, 213, 88, 0);
  cursor: pointer;

  @media (max-width: 903px) {
    margin: 0 auto;
  }
`;

export const ImageWrapper = styled.div`
  position: relative;
  max-width: 50%;

  @media (max-width: 903px) {
    max-width: 100%;
    margin-bottom: 30px;
  }
`;

export const PhoneImage = styled.img`
  width: 464px;
  height: 923px;
  border-radius: 24px;
`;

export const FloatingImage = styled.img`
  position: absolute;
  border-radius: 12px;
  &.image1 {
    top: 30%;
    left: -10%;
    width: 45%;
  }

  &.image2 {
    top: 10%;
    right: -10%;
    width: 37%;
  }

  &.image3 {
    bottom: 10%;
    left: 5%;
    width: 60%;
  }
`;

export const FeatureList = styled.ul`
  position: absolute;
  list-style: none;
  padding: 10px;
  margin: 0;
  background-color: #f2f7f4; /* Add background color */
  border: 2px solid #cee0d0; /* Add thin border */
  border-radius: 24px; /* Optional: Add border radius */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Optional: Add shadow for better visibility */
  left: 35%; /* Move to the left */
  bottom: -5vh;
  display: flex;
  width: 22rem;
  height: 233px;
  flex-direction: column;
  padding: 1% 1.5%;
`;

export const FeatureItem = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 25px;
  margin-top: 8px;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const FeatureIcon = styled.div<{ bgColor: string }>`
  width: 40px;
  height: 40px;
  background-color: ${({ bgColor }) => bgColor};
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
  transform: translateY(-6px);

  img {
    width: 18px;
    height: 18px;
  }
`;

export const FeatureText = styled.div`
  font-family: Poppins, sans-serif;
  font-size: 1rem;
  font-weight: 400;
  color: #010a03 65%;
  margin-bottom: 15px;

  .feature-title {
    font-weight: 700;
    margin-bottom: 5px;
  }
`;

export const LearnTogetherSection = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 40px;
  background-color: #f2f7f4;
  border-radius: 24px;
  position: relative;
  overflow: hidden; /* Ensure the content is clipped */
  margin-top: 60px;

  @media (max-width: 903px) {
    flex-direction: column;
    padding: 20px;
  }
`;

export const LearnTogetherContent = styled.div`
  position: absolute;
  left: 9%;
  top: 13.253vw;
  max-width: 21.563vw;
  max-height: 33.5vh;
  background: #f2f7f4 95%;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  z-index: 2;

  @media (max-width: 903px) {
    position: relative;
    left: 0;
    top: 0;
    width: 100%;
    background: #f2f7f4 95%;
    margin-bottom: 20px;
  }
`;

export const LearnTogetherTitle = styled.h2`
  font-family: Poppins, sans-serif;
  font-size: 2.25rem;
  font-weight: 700;
  line-height: 1.2;
  color: #010a03;
  margin-bottom: 10px;
`;

export const LearnTogetherDescription = styled.p`
  font-family: Poppins, sans-serif;
  font-size: 1.125rem;
  font-weight: 400;
  line-height: 1.5;
  color: #010a03;
  margin-bottom: 20px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 10px;
`;

export const StartLessonButton = styled.button`
  padding: 10px 20px;
  font-family: Poppins, sans-serif;
  font-size: 0.938rem;
  font-weight: 700;
  color: #f2f7f4;
  background-color: #19a530;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  max-height: 4.567vh;
`;

export const LearnMoreButton = styled.button`
  padding: 10px 20px;
  font-family: Poppins, sans-serif;
  font-size: 1rem;
  font-weight: 700;
  color: #010a03;
  background-color: #f2f7f4;
  border: 2px solid #cee0d0;
  border-radius: 12px;
  cursor: pointer;
  max-height: 4.567vh;
`;

export const LearnTogetherImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 24px;
  object-fit: cover; /* Ensure the image covers the entire container */
`;
