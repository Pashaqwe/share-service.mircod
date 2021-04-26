import styled from 'styled-components';
import GoalsHeader from '../common/GoalsHeader';

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  margin: 0;
  background-color: #1e252b;
  display: flex;
  position: absolute;
  right: 0;
  overflow: auto;
`;
export const MainStage = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const StyledGoalsHeader = styled(GoalsHeader)`
  width: 100%;
  position: absolute;
  right: 0;
`;

export const StyledFamilyHeader = styled.div`
  background-size: 100%;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url(${props => props.background});
  width: 100%;
  height: 350px;
  @media (max-width: 992px) {
    width: 100%;
    height: 300px;
  }
  @media (max-width: 700px) {
    height: 250px;
  }
  @media (max-width: 480px) {
    flex-direction: column;
  }
`;

export const LogoNameButtonWrapper = styled.div`
  margin-top: -165px;
  width: 100%;
  align-items: center;
  display: flex;

  @media (max-width: 1540px) {
    margin-top: -150px;
  }

  @media (max-width: 1150px) {
    margin-top: -120px;
  }

  @media (max-width: 700px) {
    margin-top: -80px;
  }
  justify-content: space-between;
  @media (max-width: 480px) {
    flex-direction: column;
    margin-top: -170px;
  }
`;

export const StyledLogo = styled.img`
  width: 240px;
  height: 240px;
  @media (max-width: 1540px) {
    width: 200px;
    height: 200px;
  }

  @media (max-width: 1150px) {
    width: 150px;
    height: 150px;
  }

  @media (max-width: 700px) {
    width: 100px;
    height: 100px;
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 75%;
  margin: 0 auto;
  @media (max-width: 992px) {
    width: 90%;
  }
`;

export const NameAndLogoWrapper = styled.div`
  display: flex;
  align-items: center;
  @media (max-width: 480px) {
    flex-direction: column;
  }
`;

export const StyledHeading = styled.h1`
  color: #fff;
  font-family: Gilroy;
  font-style: normal;
  font-weight: 600;
  font-size: 45px;
  line-height: 55px;
  margin-left: 70px;
  @media (max-width: 1540px) {
    margin-left: 40px;
  }
  @media (max-width: 1150px) {
    margin-left: 20px;
    font-size: 35px;
  }
  @media (max-width: 700px) {
    font-size: 27px;
  }
  @media (max-width: 480px) {
    margin: 15px 0;
  }
`;

export const StyledButton = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 9px 44px;
  background: #5063ee;
  border-radius: 5px;
  color: #fff;
  border: none;
  outline: none;
  font-family: Gilroy;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  cursor: pointer;
  @media (max-width: 1150px) {
    font-size: 15px;
  }
  @media (max-width: 700px) {
    padding: 5px 22px;
  }
`;

export const StyledDiscription = styled.div`
  font-family: Gilroy;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 24px;
  color: #868686;
  margin: 55px 20px 0;
  @media (max-width: 700px) {
    font-size: 17px;
    margin: 25px 20px 0;
  }
  @media (max-width: 480px) {
    text-align: center;
  }
`;
