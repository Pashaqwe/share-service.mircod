import React, { useState } from 'react';
import AuthorizationComponent from './AuthorizationComponent';
import CommunicationComponent from './CommunicationComponent';
import { Wrapper } from './styles';
import SuccessAuthorization from '../SuccessAuthorizationComponent';

function SingUp() {
  const [successRegistration, setSuccessRegistration] = useState(false);

  const onSuccessRegistration = () => {
    setSuccessRegistration(true);
  };

  if (!successRegistration) {
    return (
      <Wrapper>
        <CommunicationComponent />
        <AuthorizationComponent onSuccessRegistration={onSuccessRegistration} />
      </Wrapper>
    );
  } else {
    return <SuccessAuthorization />;
  }
}

export default SingUp;
