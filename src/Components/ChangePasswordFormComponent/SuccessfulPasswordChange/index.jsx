import React from 'react';
import {
  Wrapper,
  StyledCommunicationBG,
  StyledParagraph,
  StyledButton,
  StyledCloseMark,
} from './styles';
import { Link } from '@reach/router';

function SuccessfulPasswordChange() {
  return (
    <Wrapper>
      <StyledCommunicationBG>
        <StyledParagraph>Successfuly changed your password!</StyledParagraph>
        <Link to="/auth/sign_in">
          <StyledButton>
            <StyledCloseMark />
          </StyledButton>
        </Link>
      </StyledCommunicationBG>
    </Wrapper>
  );
}

export default SuccessfulPasswordChange;
