import styled from 'styled-components';
import CommunicationBackground from '../../common/CommunicationBackground';

export const Wrapper = styled.div`
  width: 1130px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

export const StyledCommunicationBG = styled(CommunicationBackground)`
  width: 710px;
  height: 140px;
  display: flex;
  color: #fff;
  justify-content: center;
  @media (max-width: 914px) {
    width: 600px;
  }
  @media (max-width: 600px) {
    width: 320px;
  }
`;

export const StyledParagraph = styled.p`
  font-family: Gilroy;
  font-style: normal;
  font-weight: normal;
  font-size: 25px;
  line-height: 29px;
  @media (max-width: 600px) {
    width: 320px;
    font-size: 20px;
    text-align: center;
    margin-left: 20px;
  }
`;

export const StyledButton = styled.button`
  position: relative;
  width: 32px;
  height: 34px;
  background-color: #5063ee;
  border: none;
  outline: none;
  margin-left: 50px;
  cursor: pointer;
  @media (max-width: 600px) {
    margin-right: 20px;
  }
`;

export const StyledCloseMark = styled.span`
  cursor: pointer;
  position: absolute;
  right: -2px;
  top: -2px;
  width: 32px;
  height: 32px;
  &:before {
    position: absolute;
    left: 15px;
    content: ' ';
    height: 40px;
    width: 2px;
    background-color: #fff;
    transform: rotate(45deg);
  }
  &:after {
    position: absolute;
    left: 15px;
    content: ' ';
    height: 40px;
    width: 2px;
    background-color: #fff;
    transform: rotate(-45deg);
  }
`;
