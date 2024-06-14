// import styled from 'styled-components';
// import { colors, spacing, typography } from './';

// export const ContactWrapper = styled.div`
//   display: flex;
//   flex-direction: column;
//   min-height: 100vh;
// `;

// export const MainContent = styled.main`
//   flex: 1;
//   padding: 20px;
//   background-color: #f5f5f5;
// `;

// export const Section = styled.section`
//   max-width: 1200px;
//   max-height: 832px;
//   top: 501px;
//   left: 100;
//   margin: 0 auto;
//   padding: 20px;
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
// `;

// export const Title = styled.h1`
//   font-size: 2.85rem;
//   font-weight: 700;
//   font: Poppins;
//   color: #010A03;
//   position: absolute;
//   top: 23vh;
//   left: 31%;
//   width: 18vw;
//   height: 9vh;
//   transform: translateX(-85%);
//   text-align: left;

//   @media (max-width: 768px) {
//     left: 10%;
//     transform: none;
//     text-align: left;
//     width: 220px;
//     height: 123px;
//     top: 121px;
//     gap: 0px;
//     opacity: 0px;
//     font: Poppins;
//     font-size: 34px;
//     font-weight: 800;
//     line-height: 41px;
//     letter-spacing: -1px;
//     text-align: center;

//   }
// `;

// export const StyledImage = styled.img`
//   width: 100%;
//   max-width: 600px;
//   height: auto;
//   margin-top: -1%;
//   transform: translateY(38%);
//   margin-left: -1.4%;

//   // @media (max-width: 768px) {
//   //   width: 272px;
//   //   height: 209px;
//   //   top: 268px;
//   //   left: 196px;
//   //   gap: 0px;
//   //   border-radius: 24px 0px 0px 0px;
//   //   border: 2px 0px 0px 0px solid #CEE0D0;
//   //   opacity: 0px;
//   //   angle: -180 deg;
//   //   transform: translateY(38%);

//   @media (max-width: 768px) {
//     max-width: 272px;
//     padding: 20px;
//     margin-top: 20px;
//     left: 196px;
//     transform: translateY(38%);
//   }



//   }
// `;

// export const FormWrapper = styled.div`
//   background-color: #1AAE33;
//   padding: 24px;
//   border-radius: 24px;
//   display: flex;
//   flex-direction: column;
//   align-items: flex-start;
//   justify-content: flex-start;
//   max-width: 521px;
//   height: 389px;
//   gap: 8px;

//   @media (max-width: 768px) {
//     width: 272px;
//     height: 421px;
//     top: 525px;
//     left: 24px;
//     gap: 8px;
//     border-radius: 24px 0px 0px 0px;
//     opacity: 0px;
//     margin-top: 830px;
//     margin-right: 190px;
//     transform: translateX(38%);
//   }

// `;

// export const Input = styled.input`
//   width: 489px;
//   height: 34px;
//   padding: 4px 24px;
//   margin-bottom: 8px;
//   margin-left: -8px;
//   border-radius: 16px;
//   border: none;
//   font-size: 1rem;
//   background-color: white;
//   color: grey;

//   @media (max-width: 768px) {
//     padding: 12px;
//     font-size: 1rem;
//     max-width: 262px;
//   }
// `;

// export const TextArea = styled.textarea`
//   width: 489px;
//   height: 203px;
//   padding: 4px 24px;
//   margin-bottom: 8px;
//   margin-left: -8px;
//   border-radius: 16px;
//   border: none;
//   font-size: 1rem;
//   background-color: white;
//   color: grey;

//   @media (max-width: 768px) {
//     height: 120px;
//     padding: 12px;
//     font-size: 1rem;
//     max-width: 262px;
//   }
// `;

// export const SubmitButton = styled.button`
//   padding: ${spacing.small} ${spacing.large};
//   background-color: #F2F7F4;
//   color: #010A03;
//   border: 2px solid #CEE0D0;
//   border-radius: 20px;
//   font-weight: ${typography.fontWeight.bold};
//   cursor: pointer;
//   width: 106px;
//   height: 44px;

//   &:hover {
//     background-color: ${colors.secondary};
//     color: #F2F7F4;
//   }

//   @media (max-width: 768px) {
//     width: 100%;
//   }
// `;

// export const TeamImages = styled.div`
//   display: flex;
//   align-items: center;
//   margin-top: -45px;
//   margin-left: 50vw;
//   align-self: flex-end;
//   height: auto;
//   // transform: translateY(10%);
// `;

// export const TeamImage = styled.img`
//   width: 67.5px;
//   height: 67.5px;
//   border-radius: 33.75px;
//   border: 2.25px;
//   margin-right: -20px;
//   position: relative;
// `;

// export const ReplyText = styled.p`
//   font-size: 1rem;
//   color: black;
//   font-weight: ${typography.fontWeight.bold};
//   width: 334px;
//   height: 25px;
//   margin-left: 20px;
//   gap: 0px;
// `;

// export const FAQSection = styled.section`
//   max-width: 1200px;
//   margin: 40px auto;
//   padding: 20px;
//   transform: translateX(0%);
// `;

// export const FAQTitle = styled.h2`
//   font-size: 3rem;
//   font-weight: bold;
//   text-align: left;
//   font: poppins;
//   margin-bottom: 40px;
//   color: #010A03;
//   width: 98px;
//   height: 56px;
// `;

// export const FAQGrid = styled.div`
//   display: flex;
//   justify-content: space-around;
//   flex-wrap: wrap;
//   height: 421px;
//   gap: 10px;
// `;

// export const FAQItem = styled.div`
//   background-color: #19A530;
//   color: #F2F7F4;
//   padding: 24px;
//   border-radius: 24px;
//   margin: 10px;
//   flex: 1;
//   max-width: 366px;
//   font-family: poppins;
//   height: 350px;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;

//   @media (max-width: 768px) {
//     flex: none;
//     width: 300px;
//   }
// `;


// export const Question = styled.div`
//   font-size: 17px;
//   font-weight: bold;
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   cursor: pointer;
//   margin-bottom: 10px;
//   margin-left: 35px;
//   width: 240px;
//   height: 32px;
//   line-height: 22px;
//   letter: -0.43px;
// `;

// export const Answer = styled.div`
//   font-size: 0.9rem;
//   width: 240px;
//   height: 95px;
//   weight: 400;
//   size: 13px;
//   margin-left: 35px;
//   line-height: 18px;
//   letter: -0.08px;
//   display: none;
//   &.active {
//     display: block;
//   }
// `;

// export const Separator = styled.div`
//   height: 1px;
//   background-color: #F2F7F4;
//   margin-left: 35px;
//   margin-bottom: 10px;
//   width: 70%;
// `;


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
  margin: 0 auto;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const Title = styled.h1`
  font-size: 2.85rem;
  font-weight: 700;
  font-family: Poppins, sans-serif;
  color: #010A03;
  position: absolute;
  top: 23vh;
  left: 31%;
  width: 18vw;
  height: 9vh;
  transform: translateX(-85%);
  text-align: left;

  @media (max-width: 768px) {
    left: 50%;
    transform: translateX(-50%);
    text-align: center;
    width: auto;
    top: 20px;
    font-size: 2rem;
  }
`;

export const StyledImage = styled.img`
  width: 100%;
  max-width: 600px;
  height: auto;
  margin-top: -1%;
  transform: translateY(38%);
  margin-left: -1.4%;

  @media (max-width: 768px) {
    max-width: 272px;
    padding: 20px;
    margin-top: 60px;
    transform: translateY(0);
    margin-left: 0;
  }
`;

export const FormWrapper = styled.div`
  background-color: #1AAE33;
  padding: 24px;
  border-radius: 24px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  max-width: 521px;
  height: 389px;
  gap: 8px;

  @media (max-width: 768px) {
    width: 90%;
    max-width: 272px;
    height: auto;
    padding: 16px;
    border-radius: 24px;
    margin-top: 20px;
    align-items: center;
  }
`;

export const Input = styled.input`
  width: 100%;
  max-width: 489px;
  height: 34px;
  padding: 4px 24px;
  margin-bottom: 8px;
  border-radius: 16px;
  border: none;
  font-size: 1rem;
  background-color: white;
  color: grey;

  @media (max-width: 768px) {
    padding: 12px;
    font-size: 1rem;
    max-width: 100%;
  }
`;

export const TextArea = styled.textarea`
  width: 100%;
  max-width: 489px;
  height: 203px;
  padding: 4px 24px;
  margin-bottom: 8px;
  border-radius: 16px;
  border: none;
  font-size: 1rem;
  background-color: white;
  color: grey;

  @media (max-width: 768px) {
    height: 120px;
    padding: 12px;
    font-size: 1rem;
    max-width: 100%;
  }
`;

export const SubmitButton = styled.button`
  padding: ${spacing.small} ${spacing.large};
  background-color: #F2F7F4;
  color: #010A03;
  border: 2px solid #CEE0D0;
  border-radius: 20px;
  font-weight: ${typography.fontWeight.bold};
  cursor: pointer;
  width: 106px;
  height: 44px;

  &:hover {
    background-color: ${colors.secondary};
    color: #F2F7F4;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const TeamImages = styled.div`
  display: flex;
  align-items: center;
  margin-top: -45px;
  margin-left: 50vw;
  align-self: flex-end;
  height: auto;

  @media (max-width: 768px) {
    margin-top: 20px;
    margin-left: 0;
    justify-content: center;
  }
`;

export const TeamImage = styled.img`
  width: 67.5px;
  height: 67.5px;
  border-radius: 33.75px;
  border: 2.25px;
  margin-right: -20px;
  position: relative;

  @media (max-width: 768px) {
    margin-right: 10px;
  }
`;

export const ReplyText = styled.p`
  font-size: 1rem;
  color: black;
  font-weight: ${typography.fontWeight.bold};
  margin-left: 20px;

  @media (max-width: 768px) {
    margin-left: 0;
    text-align: center;
  }
`;

export const FAQSection = styled.section`
  max-width: 1200px;
  margin: 40px auto;
  padding: 20px;
`;

export const FAQTitle = styled.h2`
  font-size: 3rem;
  font-weight: bold;
  text-align: left;
  font-family: Poppins, sans-serif;
  margin-bottom: 40px;
  color: #010A03;

  @media (max-width: 768px) {
    font-size: 2rem;
    text-align: center;
  }
`;

export const FAQGrid = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 10px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const FAQItem = styled.div`
  background-color: #19A530;
  color: #F2F7F4;
  padding: 24px;
  border-radius: 24px;
  margin: 10px;
  flex: 1;
  max-width: 366px;
  font-family: Poppins, sans-serif;
  height: 350px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 768px) {
    flex: none;
    width: 300px;
  }
`;

export const Question = styled.div`
  font-size: 17px;
  font-weight: bold;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  margin-bottom: 10px;
  margin-left: 35px;
  width: 240px;
  height: 32px;
  line-height: 22px;
  letter: -0.43px;

  @media (max-width: 768px) {
    margin-left: 0;
  }
`;

export const Answer = styled.div`
  font-size: 0.9rem;
  width: 240px;
  height: 95px;
  weight: 400;
  size: 13px;
  margin-left: 35px;
  line-height: 18px;
  letter: -0.08px;
  display: none;
  &.active {
    display: block;
  }

  @media (max-width: 768px) {
    margin-left: 0;
  }
`;

export const Separator = styled.div`
  height: 1px;
  background-color: #F2F7F4;
  margin-left: 35px;
  margin-bottom: 10px;
  width: 70%;

  @media (max-width: 768px) {
    margin-left: 0;
  }
`;
