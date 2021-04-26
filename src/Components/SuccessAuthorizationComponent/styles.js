import styled from 'styled-components';
import AuthorizationBackground from '../common/AuthorizationBackground';
import CommunicationBackground from '../common/CommunicationBackground';

export const Wrapper = styled.div`
position: realative;
height: 100%;
align-items: center;
display flex;
`;

export const StyledCommunicationBG = styled(CommunicationBackground)`
  @media (max-width: 600px) {
    width: 320px;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 300px;
  }
`;
export const ConfirmIconBackground = styled(AuthorizationBackground)`
  width: 155px;
  @media (max-width: 600px) {
    display: none;
  }
`;

export const Ellipse = styled.div`
  position: relative;
  width: 102px;
  height: 102px;
  border: 3px solid #6fcf97;
  box-sizing: border-box;
  border-radius: 52.2px;
  display: flex;
  justify-content: center;
`;

export const Tick = styled.div`
  width: 35px;
  height: 50px;
  border-right: 3px solid #6fcf97;
  border-bottom: 3px solid #6fcf97;
  position: absolute;
  top: 10px;
  transform: rotate(52deg) skew(22deg);
`;

export const InformationWrapper = styled.div`
  margin-right: 120px;
  color: #fff;
  @media (max-width: 914px) {
    margin-right: 20px;
    width: 350px;
  }
  @media (max-width: 600px) {
    margin: 0 20px;
    text-align: center;
  }
`;

export const InformationHeader = styled.h2`
  font-family: Gilroy;
  font-style: normal;
  font-weight: normal;
  font-size: 40px;
  line-height: 46px;
  margin-bottom: 17px;
  @media (max-width: 914px) {
    font-size: 26px;
  }
`;

export const InformationParagraph = styled.p`
  font-family: Gilroy;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
`;
