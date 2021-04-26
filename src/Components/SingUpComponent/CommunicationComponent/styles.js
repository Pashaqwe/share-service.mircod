import styled, { keyframes } from 'styled-components';
import CommunicationBackground from '../../common/CommunicationBackground';

const OutgoingAnimation = keyframes`{
  0%{
    transform: translateX(-100%)
  }

  100%{
    transform: translateX(0%)
  }
}`;

export const Wrapper = styled.div`
  width: 250px;
  height: 220px;
  position: relative;
  margin-right: 75px;
  @media (max-width: 914px) {
    margin-right: 35px;
    width: 200px;
    height: 180px;
  }
  @media (max-width: 600px) {
    display: none;
  }
`;

export const StyledCommunicationBG = styled(CommunicationBackground)`
  animation: ${OutgoingAnimation} 1s;
  @media (max-width: 600px) {
    display: none;
  }
`;

export const StyledHeading = styled.h2`
  font-family: Gilroy;
  color: #fff;
  font-size: 40px;
  margin-top: 0;
  margin-bottom: 28px;
  font-weight: 400;
  @media (max-width: 914px) {
    width: 200px;
    font-size: 26px;
    text-align: center;
    margin-bottom: 10px;
  }
`;

export const StyledParagraph = styled.p`
  font-family: Gilroy;
  color: #fff;
  font-weight: 500;
  font-size: 16px;
  margin-top: 0;
`;

export const StyledButton = styled.button`
  width: 100%;
  position: absolute;
  bottom: 0;
  font-family: Gilroy;
  padding: 9px 44px;
  border: 1px solid #2c353d;
  background-color: #5063ee;
  box-sizing: border-box;
  border-radius: 5px;
  color: #2c353d;
  font-weight: 500;
  font-size: 20px;
  cursor: pointer;
  &:focus {
    outline: none;
  }
`;
