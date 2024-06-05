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
  width: 549px;
  height: 112px;
  font-family: Poppins, sans-serif;
  font-size: 48px;
  font-weight: 700;
  line-height: 56px;
  text-align: left;
  letter-spacing: -0.02em;
  color: #010a03;
  margin: 0;
  position: absolute;
  top: 20px;
  left: 20px;

  @media (max-width: 768px) {
    width: 250px;
    font-size: 25px;
    line-height: 29px;
    position: absolute;
    top: 38px;
    left: 16px;
    color: #f2f7f4;
  }
`;

export const VideoClip = styled.img`
  width: 1232px;
  height: 705px;
  border-radius: 48px 0px 0px 0px;
  background: linear-gradient(180deg, rgba(1, 10, 3, 0.75) 61.5%, #010a03 100%);
  margin-top: 140px;

  @media (max-width: 768px) {
    width: 288px;
    height: 476px;
    margin-top: 0;
    position: relative;
    top: 0;
  }
`;

export const FormWrapper = styled.div`
  width: 412px;
  height: 60px;
  display: flex;
  align-items: center;
  border-radius: 14px;
  border: 2px solid #cee0d0;
  margin-top: 20px;

  @media (max-width: 768px) {
    width: 240px;
    height: 44px;
    padding: 4px 8px;
    border-radius: 12px;
    position: absolute;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
  }
`;

export const Input = styled.input`
  width: 208px;
  height: 16px;
  font-family: Poppins, sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 16px;
  text-align: left;
  color: #010a03;
  border: none;
  padding: 8px;
  flex-grow: 1;

  @media (max-width: 768px) {
    width: 173px;
    font-size: 12px;
    line-height: 16px;
  }
`;

export const Button = styled.button`
  width: 131px;
  height: 44px;
  padding: 4px 24px;
  font-family: Poppins, sans-serif;
  font-size: 14px;
  font-weight: 700;
  line-height: 16px;
  text-align: center;
  color: #f2f7f4;
  background: #1dbf38;
  border-radius: 12px;
  box-shadow: 1px 2px 6px rgba(64, 213, 88, 0.26),
    3px 10px 10px rgba(64, 213, 88, 0.21),
    6px 22px 14px rgba(64, 213, 88, 0.14),
    11px 39px 16px rgba(64, 213, 88, 0.05),
    17px 61px 18px rgba(64, 213, 88, 0.0);
  border: none;
  cursor: pointer;

  @media (max-width: 768px) {
    width: 131px;
    height: 44px;
    font-size: 14px;
    padding: 4px 24px;
  }
`;

export const StoreLinks = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    margin-top: 10px;
  }
`;

export const StoreButton = styled.a`
  display: flex;
  align-items: center;
  padding: 7.21px 14.43px;
  border: 2px solid #cee0d0;
  border-radius: 60.12px;
  text-decoration: none;
  color: #010a03;
  background-color: #f2f7f4;

  img {
    width: 16px;
    margin-right: 10px;
  }

  @media (max-width: 768px) {
    width: 100%;
    justify-content: center;
  }
`;

export const PlayButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 240px;
  height: 44px;
  padding: 4px 24px;
  border-radius: 12px;
  border: 1px solid #cee0d0;
  background: #ffffff33;
  position: absolute;
  bottom: 20px;
  right: 20px;

  @media (max-width: 768px) {
    width: 64px;
    height: 44px;
    justify-content: center;
    bottom: 10px;
    right: 10px;
  }
`;

export const PlayButtonIcon = styled.img`
  width: 16px;
  height: 16px;
  margin-right: 10px;
`;

export const PlayButtonText = styled.span`
  font-family: Poppins, sans-serif;
  font-size: 15px;
  font-weight: 600;
  line-height: 20px;
  color: #f2f7f4;

  @media (max-width: 768px) {
    display: none;
  }
`;
