import styled from 'styled-components';
import AuthorizationBackground from '../../common/AuthorizationBackground';
import CommunicationBackground from '../../common/CommunicationBackground';

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

export const StyledAuthorizationBG = styled(AuthorizationBackground)`
  display: flex;
  flex-direction: column;
  width: 155px;
  margin-left: 43px;
  @media (max-width: 600px) {
    display: none;
  }
`;

export const InformationWrapper = styled.div`
  width: 480px;
  position: relative;
  margin-right: 160px;
  @media (max-width: 914px) {
    margin-right: 20px;
    width: 350px;
  }
  @media (max-width: 600px) {
    margin: 0 20px;
    text-align: center;
  }
`;

export const StyledParagraph = styled.p`
  font-family: Gilroy;
  color: #fff;
  font-weight: 500;
  font-size: 16px;
  margin-top: 0;
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
    font-size: 26px;
  }
`;
