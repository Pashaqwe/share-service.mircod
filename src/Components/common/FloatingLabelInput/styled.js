import styled from 'styled-components';

export const FormInput = styled.input`
  background-color: #56f;
  width: 350px;
  color: #fff;
  font-family: Gilroy;
  font-size: 16px;
  height: 35px;
  display: block;
  border-radius: 5px;
  border: ${props =>
    props.invalid ? '1px solid #c6c6c6' : '1px solid #eb5757'};
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

  @media (max-width: 600px) {
    width: 250px;
  }
`;

export const StyledLabel = styled.label`
display: block
padding-top: 20px
transition: height 2s;
height:40px;
transition-duration:0.3s;
cursor:text;
`;

export const TextFieldWrapper = styled.div`
  transform: ${props =>
    props.inInput ? 'translateY(-30px)' : 'translateY(-60px)'};
  font-family: Gilroy;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;
  color: ${props => (props.invalid ? '#fff' : '#eb5757')};
  margin-left: 5px;
  transition-duration: 0.2s;
`;
