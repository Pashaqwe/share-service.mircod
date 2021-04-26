import styled from 'styled-components';
import MenuBadgeSvg from './svg/Menu.svg';

export const Wrapper = styled.div`
  width: 5%;
  display: flex;
  position: relative;
  @media (max-width: 992px) {
    width: 0;
  }
`;

export const MenuBadge = styled.div`
  background-image: url(${MenuBadgeSvg});
  width: 30px;
  height: 24px;
  position: absolute;
  left: 35px;
  top: 35px;
  display: none;
  z-index: 30;
  @media (max-width: 992px) {
    display: ${props => (props.visible ? 'none' : 'block')};
  }
`;

export const Menu = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  @media (max-width: 992px) {
    position: fixed;
    z-index: 30;
    width: 100vw;
    transform: translateX(${props => (props.visible ? '0' : '-100%')});
    transition: all 0.2s;
  }
`;

export const MenuContent = styled.div`
  width: 100%;
  height: 100%;
  background-color: #2c353d;
  display: flex;
  align-items: center;
  flex-direction: column;
  @media (max-width: 992px) {
    width: 100px;
  }
`;

export const CatalogLogo = styled.img`
  margin-top: 35px;
  cursor: pointer;
`;

export const Union = styled.img`
  margin-top: 200px;
  cursor: pointer;
  @media (max-height: 480px) {
    margin-top: 100px;
  }
`;

export const MaskGroup = styled.img`
  margin-top: 45px;
  cursor: pointer;
`;
