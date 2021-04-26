import styled from 'styled-components';
import CommunicationBG from '../common/CommunicationBackground';
import { Link } from '@reach/router';

export const Wrapper = styled.div`
position: realative;
height: 100%;
align-items: center;
display flex;
`;

export const StyledCommunicationBG = styled(CommunicationBG)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 300px;
  @media (max-width: 600px) {
    width: 320px;
  }
`;

export const Heading = styled.h2`
  margin: 0 auto;
  font-family: Gilroy;
  font-style: normal;
  font-weight: normal;
  font-size: 40px;
  line-height: 46px;
  color: #fff;
  @media (max-width: 914px) {
    font-size: 26px;
  }
  @media (max-width: 600px) {
    font-size: 20px;
  }
`;

export const Paragraph = styled.p`
  font-family: Gilroy;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  margin: 20px auto;
  color: #fff;
  @media (max-width: 914px) {
    margin: 10px 40px 20px 40px;
    text-align: center;
  }
  @media (max-width: 600px) {
    margin-top: 5px;
    font-size: 14px;
  }
`;

export const StyledBlueButton = styled.button`
  border: 1px solid #2c353d;
  width: 200px;
  color: #2c353d;
  padding: 9px 44px;
  margin-top: 0px;
  background: #5063ee;
  border-radius: 5px;
  font-family: Gilroy;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  cursor: pointer;
  outline: none;
`;

export const StyledLink = styled(Link)``;
