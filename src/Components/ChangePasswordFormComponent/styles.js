import styled from 'styled-components';
import CommunicationBackground from '../common/CommunicationBackground';

export const StyledCommunicationBG = styled(CommunicationBackground)`
  dispaly: flex;
  margin: 0;
  height: 425px;
  justify-content: center;
  align-items: center;
  @media (max-width: 600px) {
    width: 320px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  @media (max-width: 914px) {
    width: 720px;
  }
`;

export const FormWrapper = styled.div`
  width: 85%;
  @media (max-width: 914px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

export const StyledHeading = styled.h2`
  font-family: Gilroy;
  font-style: normal;
  font-weight: normal;
  font-size: 40px;
  line-height: 46px;
  color: #eeeeee;
  margin: 0 0 50px 0;

  @media (max-width: 914px) {
    width: 100%;
    text-align: center;
    margin-bottom: 30px;
  }
  @media (max-width: 600px) {
    margin-bottom: 30px;
  }
`;

export const InputsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  @media (max-width: 914px) {
    display: flex;
    flex-direction: column;
    height: 120px;
  }
`;

export const StyledButton = styled.input`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 9px 44px;
  width: 300px;
  height: 37px;
  background: #2c353d;
  border-radius: 5px;
  margin-top: 50px;
  right: 0;
  font-family: Gilroy;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  color: #fff;
  outline: none;
  border: none;
  cursor: pointer;
  @media (max-width: 914px) {
    margin-top: 30px;
  }

  @media (max-width: 600px) {
    width: 210px;
  }
`;

export const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  @media (max-width: 914px) {
    justify-content: center;
  }
`;
