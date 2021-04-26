import React from 'react';
import {
  Wrapper,
  StyledAuthorizationBG,
  StyledHeading,
  StyledParagraph,
  InformationWrapper,
  StyledCommunicationBG,
} from './styles';

function SuccessForgetPassword() {
  return (
    <Wrapper>
      <StyledAuthorizationBG></StyledAuthorizationBG>
      <StyledCommunicationBG>
        <InformationWrapper>
          <StyledHeading>We get your call.</StyledHeading>
          <StyledParagraph>
            Instructions was sent to you email. Please, follow the instractions.
          </StyledParagraph>
        </InformationWrapper>
      </StyledCommunicationBG>
    </Wrapper>
  );
}

export default SuccessForgetPassword;
