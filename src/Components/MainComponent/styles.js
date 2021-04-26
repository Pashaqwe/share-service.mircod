import styled from 'styled-components';

export const StyledMainComponent = styled.div`
  width: 100%;
  height: 100%;
  margin: 0;
  display: flex;
`;

export const BackgrounParallax = styled.div`
  background-color: #1e252b;
  background-image: url('/Pattern.svg');
  background-size: 100%;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  position: absolute;
  transition: all 0.1s ease;
  overflow: hidden;
  width: 110%;
  height: 110%;
  z-index: -1;
  @media (max-width: 600px) {
    transition: none;
    width: 120%;
    height: 120%;
  }
`;

export const StyledContainer = styled.div`
  max-width: 914px;
  height: 100%;
  position: realative;
  display flex;
  justify-content: center;
`;

export const AuthComponent = styled.div`
  width: 100%;
  height: 100%;
  margin: 0;
  display: flex;
  justify-content: center;
  position: absolute;
  overflow: hidden;
`;
