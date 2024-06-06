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
  color: #F2F7F4;
  margin: 0;
  position: absolute;
  top: 40.8vh; /* Adjusted for better vertical alignment */
  left: 16.2vw; /* Adjusted for better horizontal alignment */
  z-index: 1;
  white-space: normal; /* Allow text to wrap */

  @media (max-width: 768px) {
    max-width: 45vw; /* Adjust for smaller screens */
    font-size: 4.9vw; /* Using vw for responsive font size */
    line-height: 7vw; /* Using vw for responsive line height */
    top: 5vh; /* Adjusted for smaller screens */
    left: 25vw; /* Adjusted for smaller screens */
    color: #f2f7f4;
  }
`;

export const VideoClip = styled.img`
  width: 1232px;
  height: 705px;
  border-radius: 48px;
  background: linear-gradient(180deg, rgba(1, 10, 3, 0.75) 61.5%, #010a03 100%);
  margin-top: 140px;
  position: relative;

  @media (max-width: 768px) {
    width: 288px;
    height: 476px;
    margin-top: 0;
    position: relative;
    top: 0;
  }
`;

export const FormWrapper = styled.div`
  position: relative;
  max-width: 37vw;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 14px;
  border: 2px solid #cee0d0;
  padding: 30px;


  @media (max-width: 1024px) {
    max-width: 50vw;
  }

  @media (max-width: 768px) {
    width: 90%;
    height: auto;
    padding: 4px 8px;
    border-radius: 12px;
  }

  @media (max-width: 480px) {
    width: 95%;
  }
`;

export const Input = styled.input`
  position: absolute;
  top: -234%;
  left: -100%;
  transform: translate(-50%, -50%);
  max-width: 37vw;
  font-family: Poppins, sans-serif;
  font-size: 1.5vw;
  font-weight: 400;
  color: #F2F7F4;
  line-height: 1;
  text-align: left;
  padding: 1vw;
  margin-bottom: 20px;
  // background: #010A0340;
  border-radius: 14px;
  border: 4px solid #CEE0D0;

  ::placeholder {
    color: #F2F7F4;
  }

  @media (max-width: 768px) {
    font-size: 3vw;
    padding: 1vw;
  }
`;

export const Button = styled.button`
  width: 12vw;
  height: 4vw;
  padding: 1vw 2vw;
  font-family: Poppins, sans-serif;
  font-size: 1.5vw;
  font-weight: 700;
  line-height: 1;
  text-align: center;
  color: #f2f7f4;
  background: #1dbf38;
  border-radius: 1.5vw;
  box-shadow: 1px 2px 6px rgba(64, 213, 88, 0.26),
    3px 10px 10px rgba(64, 213, 88, 0.21),
    6px 22px 14px rgba(64, 213, 88, 0.14),
    11px 39px 16px rgba(64, 213, 88, 0.05),
    17px 61px 18px rgba(64, 213, 88, 0.0);
  border: none;
  cursor: pointer;

  @media (max-width: 768px) {
    width: 20vw;
    height: 6vw;
    font-size: 3vw;
    padding: 1vw 2vw;
  }
`;

export const StoreLinks = styled.div`
  display: flex;
  gap: 1vw;
  margin-top: 2vw;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    margin-top: 3vw;
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

  img {
    width: 2vw;
    margin-right: 1vw;
  }

  @media (max-width: 768px) {
    width: 90%;
    justify-content: center;
  }
`;

export const PlayButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 20vw;
  height: 4vw;
  padding: 1vw 2vw;
  border-radius: 1.5vw;
  border: 0.2vw solid #cee0d0;
  background: #ffffff33;
  position: absolute;
  bottom: 2vw;
  right: 2vw;

  @media (max-width: 768px) {
    width: 15vw;
    height: 6vw;
    justify-content: center;
    bottom: 1vw;
    right: 1vw;
  }
`;

export const PlayButtonIcon = styled.img`
  width: 2vw;
  height: 2vw;
  margin-right: 1vw;
`;

export const PlayButtonText = styled.span`
  font-family: Poppins, sans-serif;
  font-size: 1.5vw;
  font-weight: 600;
  line-height: 1;
  color: #f2f7f4;

  @media (max-width: 768px) {
    display: none;
  }
`;
