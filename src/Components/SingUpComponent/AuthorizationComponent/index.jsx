import React from 'react';
import {
  Wrapper,
  StyledHeading,
  StyledAuthorizationBG,
  StyledSignUpBlock,
  StyledSignUpParagraph,
  StyledLink,
} from './styles';
import FormComponent from './SignUpFormComponent';

function AuthorizationComponent(props) {
  return (
    <StyledAuthorizationBG>
      <Wrapper>
        <StyledHeading>Create account</StyledHeading>
        <FormComponent
          onSuccessRegistration={props.onSuccessRegistration}
        ></FormComponent>
        <StyledSignUpBlock>
          <StyledSignUpParagraph>You have account?</StyledSignUpParagraph>
          <StyledLink to="/auth/sign_in/">Sign in</StyledLink>
        </StyledSignUpBlock>
      </Wrapper>
    </StyledAuthorizationBG>
  );
}

export default AuthorizationComponent;
