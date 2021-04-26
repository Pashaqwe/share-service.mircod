import React, { useState } from 'react';
import {
  Wrapper,
  StyledAuthorizationBG,
  StyledHeading,
  StyledInformationWrapper,
  StyledParagraph,
  StyledCommunicationBG,
  StyledBlueButton,
} from './styles';

import SuccessForgetPassword from './SuccessForgetPassword';
import EmailInput from '../common/EmailInput';
import baseUrl from '../../Api/baseUrl';

function ForgetPassword() {
  const [email, setEmail] = useState('');
  const [emailValid, setEmailValid] = useState(true);
  const [formValid, setFormValid] = useState(false);

  function onChangePassword(e) {
    e.preventDefault();
    if (email.length === 0) {
      setEmailValid(false);
      return;
    }

    baseUrl.post(`/auth/forgot_password/`, { email }).then(res => {
      console.log(res);
      console.log(res.data);
      setFormValid(true);
    });
  }

  if (!formValid) {
    return (
      <Wrapper>
        <StyledAuthorizationBG>
          <StyledHeading>Recover password</StyledHeading>
          <form onSubmit={onChangePassword}>
            <EmailInput
              inputValid={emailValid}
              setInputValid={setEmailValid}
              inputValue={email}
              setInputValue={setEmail}
            />
            <StyledBlueButton
              type="submit"
              value="send me email instructions"
            />
          </form>
        </StyledAuthorizationBG>
        <StyledCommunicationBG>
          <StyledInformationWrapper>
            <StyledHeading>No panic!</StyledHeading>
            <StyledParagraph>
              Sometimes it happens. We will go through it together
            </StyledParagraph>
          </StyledInformationWrapper>
        </StyledCommunicationBG>
      </Wrapper>
    );
  } else {
    return <SuccessForgetPassword />;
  }
}

export default ForgetPassword;
