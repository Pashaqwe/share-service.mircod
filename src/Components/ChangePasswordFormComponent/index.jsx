import React, { useState } from 'react';
import {
  StyledCommunicationBG,
  Wrapper,
  FormWrapper,
  StyledHeading,
  InputsWrapper,
  StyledButton,
  ButtonWrapper,
} from './styles';
import SuccessfulPasswordChange from './SuccessfulPasswordChange';
import FloatingLabelInput from '../common/FloatingLabelInput';
import baseUrl from '../../Api/baseUrl';

function ChangePasswordForm() {
  const [NewPasswordField, setNewPasswordField] = useState('');
  const [ConfirmPasswordField, setConfirmPasswordField] = useState('');
  const [NewPasswordValidate, setNewPasswordValidate] = useState(true);
  const [ConfirmPasswordValidate, setConfirmPasswordValidate] = useState(true);
  const [FormValidate, setFormValidate] = useState(false);

  const FormValidinoField = e => {
    e.preventDefault();

    const url = window.location.href.toString();
    const token = url.substr(43, 36);
    console.log(token);
    function isValidateInput(input, setValidateInput) {
      if (input.length === 0) {
        setValidateInput(false);
      }
    }

    if (NewPasswordField !== ConfirmPasswordField) {
      setNewPasswordValidate(false);
      setConfirmPasswordValidate(false);
    } else {
      setNewPasswordValidate(true);
      setConfirmPasswordValidate(true);
    }
    isValidateInput(NewPasswordField, setNewPasswordValidate);
    isValidateInput(ConfirmPasswordField, setConfirmPasswordValidate);

    baseUrl
      .post(`/auth/set_new_password/`, {
        token: token,
        password: NewPasswordField,
      })
      .then(res => {
        console.log(res);
        console.log(res.data);
        setFormValidate(true);
      });
  };

  if (!FormValidate) {
    return (
      <Wrapper>
        <StyledCommunicationBG>
          <FormWrapper>
            <StyledHeading>Enter new password</StyledHeading>
            <form onSubmit={FormValidinoField}>
              <InputsWrapper>
                <FloatingLabelInput
                  inputValue={NewPasswordField}
                  setInputValue={setNewPasswordField}
                  inputValid={NewPasswordValidate}
                  setInputValid={setNewPasswordValidate}
                  label="New Password"
                />
                <FloatingLabelInput
                  inputValue={ConfirmPasswordField}
                  setInputValue={setConfirmPasswordField}
                  inputValid={ConfirmPasswordValidate}
                  setInputValid={setConfirmPasswordValidate}
                  label="Confirm Password"
                />
              </InputsWrapper>
              <ButtonWrapper>
                <StyledButton
                  onSubmit={FormValidinoField}
                  type="submit"
                  value="Change my password"
                />
              </ButtonWrapper>
            </form>
          </FormWrapper>
        </StyledCommunicationBG>
      </Wrapper>
    );
  } else {
    return <SuccessfulPasswordChange />;
  }
}

export default ChangePasswordForm;
