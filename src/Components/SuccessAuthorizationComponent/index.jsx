import React from 'react';
import {
  Wrapper,
  ConfirmIconBackground,
  Ellipse,
  Tick,
  InformationWrapper,
  InformationHeader,
  InformationParagraph,
  StyledCommunicationBG,
} from './styles';

function SuccessAuthorization() {
  return (
    <Wrapper>
      <StyledCommunicationBG>
        <InformationWrapper>
          <InformationHeader>You successfully authorizied!</InformationHeader>
          <InformationParagraph>
            Instructions was sent to you email. Follow the instractions.
          </InformationParagraph>
        </InformationWrapper>
      </StyledCommunicationBG>
      <ConfirmIconBackground>
        <Ellipse>
          <Tick />
        </Ellipse>
      </ConfirmIconBackground>
    </Wrapper>
  );
}

export default SuccessAuthorization;
