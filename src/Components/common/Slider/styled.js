import styled, { keyframes } from 'styled-components';
import Slider from 'react-slick';
import prevArrow from './svg/prevArrow.svg';
import nextArrow from './svg/nextArrow.svg';

const OutgoingAnimation = keyframes`{
  0%{
    transform: translateX(100%)
  }

  100%{
    transform: translateX(0%)
  }
}`;

export const StyledSlider = styled(Slider)`
  .slick-list {
    margin: 0 -15px;
  }

  .slick-slide > div {
    margin: 0 15px;
  }

  animation: ${OutgoingAnimation} 1s;
`;

export const StyledPrevArrow = styled.div`
  width: 25px;
  height: 25px;
  cursor: pointer;
  fill: #ffffff;
  position: absolute;
  top: 50%;
  left: -25px;
  z-index: 10;
  opacity: 0.6;
  transform: translate(-50%, -50%);
  background-image: url(${prevArrow});
  &:hover {
    opacity: 1;
  }
`;

export const StyledNextArrow = styled.div`
  width: 25px;
  height: 25px;
  cursor: pointer;
  fill: #ffffff;
  font-size: 0px;
  position: absolute;
  opacity: 0.6;
  top: 50%;
  right: -50px;
  z-index: 10;
  transform: translate(-50%, -50%);
  background-image: url(${nextArrow});
  &:hover {
    opacity: 1;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  margin: 0 20px;
`;

export const StyledSliderCard = styled.div`
  height: 195px;
  align-items: center;
  justify-content: center;
  outline: none;
  display: flex;
  border-radius: 19px;
  cursor: pointer;
  background: ${props => props.background};
`;

export const StyledImage = styled.img`
  max-width: 80px;
  max-height: 90px;
`;

export const StyledTitle = styled.p`
  font-family: Gilroy;
  font-style: normal;
  font-weight: 500;
  font-size: 30px;
  line-height: 35px;
  color: #eeeeee;
  margin-left: 15px;
  max-width: 150px;
`;

export const StyledSpinnerWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
`;
