import styled from 'styled-components';
import { Link } from '@reach/router';
import GoogleLogin from 'react-google-login';

export const StyledForm = styled.form`
  width: 100%;
  @media (max-width: 914px) {
    width: 200px;
  }
`;

export const ButtonsWrapper = styled.div`
  margin-top: 10px;
  display: flex;
`;

export const StyledCheckboxWrapper = styled.label`
  margin-top: 10px;
  display: flex;
  position: relative;
  width: 115px;
`;

export const StyledCheckbox = styled.input`
  margin: 2px 0 0 0;
  opacity: 0;
  @media (max-width: 914px) {
    margin: 1px 0 0 -13px;
  }
`;

export const ForgetPasswordWrapper = styled.div`
  display: flex;
`;
export const FakeCheckbox = styled.span`
  border: 1px solid #c6c6c6;
  box-sizing: border-box;
  border-radius: 4px;
  width: 14px;
  height: 14px;
  position: relative;
  cursor: pointer;
`;

export const CheckMark = styled.p`
  color: #c6c6c6;
  margin: 0;
  position: absolute;
  top: -3px;
  display: ${props => (props.checkedMark ? 'block' : 'none')};
  cursor: pointer;
`;

export const StyledLabel = styled.label`
  corsor: pointer;
  font-family: Gilroy;
  font-size: 14px;
  margin: 0 0 0 5px;
  color: rgb(255, 255, 255, 0.5);
  position: absolute;
  left 15px;
  @media (max-width: 914px) {
    font-size: 12px;
  }
`;

export const StyledGoogleButton = styled(GoogleLogin)`
  width: 43px;
  height: 43px;
  border: none;
  border-radius: 5px;
  background: #eeeeee;
  outline: none;
  cursor: pointer;
  margin: 30px 0 0 20px;
  padding: 0;
  @media (max-width: 914px) {
    margin: 10px 0 0 10px;
  }
`;

export const ErrorMessage = styled.p`
  font-family: Gilroy;
  font-size: 12px;
  color: #eb5757;
  margin: 0;
  display: ${props => (props.invalid ? 'none' : 'block')};
`;

export const ErrorWrapper = styled.div`
  height: 20px;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
`;

export const StyledLink = styled(Link)`
  width: 100%;
  color: #5063ee;
  font-family: Gilroy;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 17px;
  text-align: right;
`;

export const ForgetPassword = styled(Link)`
  display: block;
  color: #5063ee;
  font-family: Gilroy;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 17px;
  text-align: right;
  margin: 10px 0 0 84px;
  text-decoration: none;
  @media (max-width: 914px) {
    font-size: 12px;
    margin: 5px 0 0 10px;
  }
`;

export const StyledSignInBlock = styled.div`
  display: none;
  justify-content: center;
  margin-top: 15px;
  @media (max-width: 600px) {
    display: flex;
  }
`;

export const StyledSignInParagraph = styled.p`
  color: #fff;
  margin: 0;
  font-size: 14px;
`;

export const StyledSignInLink = styled(Link)`
  margin: 0 0 0 5px;
  height: 14px;
  color: #fff;
  font-size: 14px;
`;
