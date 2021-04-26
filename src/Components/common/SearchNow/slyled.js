import styled, { keyframes } from 'styled-components';
import { headShake } from 'react-animations';
import { Link } from '@reach/router';

const headShakeAnimation = keyframes`${headShake}`;

export const SearchNowItems = styled.div`
  width: 100%;
  display: grid;
  font-family: Gilroy;
  grid-template-columns: repeat(8, 1fr);
  grid-template-rows: repeat(5, 1fr);
  grid-gap: 20px;
  grid-auto-flow: dense;

  div:nth-child(1) {
    grid-column: 1 / 4;
    grid-row: 1 / 3;
  }
  div:nth-child(2) {
    grid-column: 4 / 6;
    grid-row: 1 / 4;
    height: 361px;
  }
  div:nth-child(3) {
    grid-column: 6 / 9;
    grid-row: 1 / 3;
  }

  div:nth-child(4) {
    grid-column: 2 / 4;
    grid-row: 3 / 7;
  }

  div:nth-child(5) {
    grid-column: 4 / 7;
    grid-row: 4 / 7;
  }
  div:nth-child(6) {
    grid-column: 7 / 9;
    grid-row: 3 / 7;
  }
  div:nth-child(7) {
    grid-column: 1 / 2;
    grid-row: 3 / 7;
    background-color: #50b5ee;
  }
  div:nth-child(8) {
    grid-column: 6 / 7;
    grid-row: 3 / 4;
    background-color: #5063ee;
  }
  @media (max-width: 1320px) {
    grid-template-columns: 1fr 1fr 1fr;
    div:nth-child(1n) {
      grid-column: initial !important;
      grid-row: initial !important;
      height: 300px;
    }

    div:nth-child(7) {
      display: none;
    }
    div:nth-child(8) {
      display: none;
    }
  }
  @media (max-width: 1060px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

export const StyledLink = styled(Link)`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-end;
  cursor: pointer;
  text-decoration: none;
`;

export const Item = styled.div`
  border-radius: 19px;
  background-size: cover;
  border: none;
  background-repeat: no-repeat;
  background-image: url(${props => props.background});
  &:hover {
    animation: 1s ${headShakeAnimation};
  }

  @media (max-width: 1320px) {
  }
`;

export const SearchNowItemWrapper = styled.span`
  display: flex;
  margin-left: 30px;
  margin-bottom: 20px;
  width: 100%;
  flex-wrap: wrap;
`;

export const SearchNowItemLogo = styled.img`
  margin-right: 20px;
  margin-bottom: 10px;
  width: 82px;
  height: 82px;
`;

export const DescriptionWrapper = styled.span`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  margin-top: 5px;
  justify-content: center;
`;

export const Heading = styled.h3`
  font-style: normal;
  font-weight: 600;
  font-size: 30px;
  line-height: 36px;
  color: #eeeeee;
  margin: 0 15px 0 0;
  word-wrap: break-word;
`;

export const StyledParagraph = styled.p`
  font-size: 16px;
  line-height: 19px;
  color: #868686;
  margin: 0 20px 20px 0;
`;

export const StyledSecretImg = styled.img`
  width: 100%;
`;

export const SecretWrapper = styled.span`
  height: 100%;
  margin: 5px;
  display: ${props => (props.secretActive ? 'flex' : 'none')};
  align-items: center;
`;

export const StyledSpinnerWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 600px;
`;
