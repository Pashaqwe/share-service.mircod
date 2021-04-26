import React from 'react';
import SignInFormComponent from './SignInFormComponent';
import {
  Wrapper,
  StyledAuthorizationBG,
  StyledHeading,
  StyledInformationWrapper,
  StyledParagraph,
  StyledCommunicationBG,
  StyledButton,
} from './styles';
import { Link } from '@reach/router';

function SingIn() {
  return (
    <Wrapper>
      <StyledAuthorizationBG>
        <StyledHeading>Let’s make a party tonight.</StyledHeading>
        <SignInFormComponent />
      </StyledAuthorizationBG>
      <StyledCommunicationBG>
        <StyledInformationWrapper>
          <StyledHeading>Welcome back!</StyledHeading>
          <StyledParagraph>
            To keep connected with us please login with your personal info.
          </StyledParagraph>
          <Link to="/auth/sign_up/">
            <StyledButton>Sing up</StyledButton>
          </Link>
        </StyledInformationWrapper>
      </StyledCommunicationBG>
    </Wrapper>
  );
}

export default SingIn;
