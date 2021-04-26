import styled, { keyframes } from 'styled-components';
import AuthorizationBackground from '../../common/AuthorizationBackground';
import { Link } from '@reach/router';

const FallingAnimation = keyframes`{
  0%{
    transform: translateY(-100%)
  }

  100%{
    transform: translateY(0%)
  }
}`;

export const Wrapper = styled.div`
  width: 310px;
  @media (max-width: 914px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  @media (max-width: 600px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const StyledHeading = styled.h2`
  font-family: Gilroy;
  font-style: normal;
  font-weight: normal;
  font-size: 36px;
  line-height: 42px;
  color: #fff;
  text-align: center;
  margin-bottom: 25px;
  margin-top: 0;
  @media (max-width: 914px) {
    width: 200px;
    font-size: 26px;
    text-align: center;
    margin-bottom: 0;
  }
`;

export const StyledAuthorizationBG = styled(AuthorizationBackground)`
  animation: ${FallingAnimation} 1s;
  @media (max-width: 914px) {
    margin-left: 15px;
  }
  @media (max-width: 600px) {
    min-width: 320px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const StyledSignUpBlock = styled.div`
  display: none;
  margin-top: 15px;
  @media (max-width: 600px) {
    display: flex;
  }
`;

export const StyledSignUpParagraph = styled.p`
  color: #fff;
  margin: 0;
`;

export const StyledLink = styled(Link)`
  margin: 0 0 0 5px;
  height: 14px;
  color: #fff;
`;
