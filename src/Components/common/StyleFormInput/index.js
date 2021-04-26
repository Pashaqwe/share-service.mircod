import styled from 'styled-components';

export const FormInput = styled.input`
  color: #fff;
  font-family: Gilroy;
  font-size: 16px;
  height: 35px;
  display: block;
  width: 95%;
  border-radius: 5px;
  border: ${props =>
    props.invalid ? '1px solid #c6c6c6' : '1px solid #eb5757'};
  background-color: #2c353d;
  outline: none;
  padding-left: 10px;
  &::placeholder {
    color: ${props => (props.invalid ? '#c6c6c6' : '#eb5757')};
    font-family: Gilroy;
    font-size: 16px;
  }
  &:focus::placeholder {
    color: transparent;
  }
`;
