import React, { useEffect } from 'react';
import {
  StyledCommunicationBG,
  Wrapper,
  Heading,
  Paragraph,
  StyledBlueButton,
  StyledLink,
} from './styles';
import baseUrl from '../../Api/baseUrl';

function EmailConfirmedComponent() {
  useEffect(() => {
    const url = window.location.href.toString();
    const token = url.substr(41, 36);
    baseUrl.post(`/auth/confirm_email/`, { token: token });
  }, []);

  return (
    <Wrapper>
      <StyledCommunicationBG>
        <Heading>Email address confirmed</Heading>
        <Paragraph>
          Congratulation! Your account email address has been successfully
          confirmed.
        </Paragraph>
        <StyledLink to="/auth/sign_in/">
          <StyledBlueButton>Sign In</StyledBlueButton>
        </StyledLink>
      </StyledCommunicationBG>
    </Wrapper>
  );
}

export default EmailConfirmedComponent;
