import styled, { keyframes } from 'styled-components';
import AuthorizationBackground from '../common/AuthorizationBackground';
import CommunicationBackground from '../common/CommunicationBackground';
import { BlueButton } from '../common/BlueButton';

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
    transform: translateX(-100%)
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
  margin: 0 0 20px 0;
  @media (max-width: 914px) {
    width: 100%;
    font-size: 26px;
    text-align: center;
    margin-bottom: 10px;
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

export const StyledBlueButton = styled(BlueButton)`
  width: 315px;
  padding: 9px;
  margin-top: 20px;
  @media (max-width: 914px) {
    width: 101%;
    font-size: 14px;
  }
`;

export const ErrorMessage = styled.p`
  font-family: Gilroy;
  font-size: 12px;
  color: #eb5757;
  margin: 0;
  display: ${props => (props.invalid ? 'none' : 'block')};
`;

export const WrapperErrorMessage = styled.span`
  height: 20px;
  align-items: flex-end;
  justify-content: flex-end;
  display: flex;
`;
