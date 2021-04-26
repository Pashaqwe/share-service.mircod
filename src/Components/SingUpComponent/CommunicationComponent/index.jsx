import React from 'react';
import {
  Wrapper,
  StyledHeading,
  StyledParagraph,
  StyledButton,
  StyledCommunicationBG,
} from './styles';
import { Link } from '@reach/router';

function CommunicationComponent() {
  return (
    <StyledCommunicationBG>
      <Wrapper>
        <StyledHeading>Hello, Friend!</StyledHeading>
        <StyledParagraph>
          let’s find some like-minded people.
          <br /> If you already had an account please sing in.
        </StyledParagraph>
        <Link to="/auth/sign_in/">
          <StyledButton>Sing in</StyledButton>
        </Link>
      </Wrapper>
    </StyledCommunicationBG>
  );
}

export default CommunicationComponent;
