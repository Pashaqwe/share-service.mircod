import styled, { keyframes } from 'styled-components';
import AuthorizationBackground from '../common/AuthorizationBackground';
import CommunicationBackground from '../common/CommunicationBackground';

const FallingAnimation = keyframes`{
  0%{
    transform: translateY(-100%)
  }

  100%{
    transform: translateY(0%)
  }
}`;

const OutgoingAnimation = keyframes`{
  0%{
    transform: translateX(100%)
  }

  100%{
    transform: translateX(0%)
  }
}`;

export const Wrapper = styled.div`
position: realative;
height: 100%;
align-items: center;
display flex;
flex-direction:row-reverse;
@media (max-width: 600px) {
  justify-content: center;
}
`;

export const StyledAuthorizationBG = styled(AuthorizationBackground)`
  display: flex;
  flex-direction: column;
  margin-right: 43px;
  animation: ${FallingAnimation} 1s;
  @media (max-width: 914px) {
    margin-right: 15px;
  }
`;

export const StyledHeading = styled.h2`
  width: 306px;
  font-family: Gilroy;
  font-style: normal;
  font-weight: normal;
  font-size: 36px;
  line-height: 42px;
  color: #fff;
  @media (max-width: 914px) {
    width: 200px;
    font-size: 26px;
    text-align: center;
    margin-bottom: 0;
  }
`;

export const StyledCommunicationBG = styled(CommunicationBackground)`
  justify-content: flex-start;
  animation: ${OutgoingAnimation} 1s;
  @media (max-width: 600px) {
    display: none;
  }
`;

export const StyledInformationWrapper = styled.div`
  width: 250px;
  position: relative;
  margin-left: 75px;
  @media (max-width: 914px) {
    margin-left: 35px;
    width: 200px;
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
