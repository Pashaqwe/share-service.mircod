import React, { useState } from 'react';
import {
  StyledMainComponent,
  BackgrounParallax,
  StyledContainer,
  AuthComponent,
} from './styles';
import { Router, Redirect } from '@reach/router';
import SingUp from '../SingUpComponent';
import SingIn from '../SingInComponent';
import ForgetPassword from '../ForgetPasswordComponent';
import ChangePasswordForm from '../ChangePasswordFormComponent';
import CatalogGoalsComponent from '../СatalogGoalsComponent';
import FamilyComponent from '../FamilyComponent';
import EmailConfirmedComponent from '../EmailConfirmedComponent';

function MainComponent() {
  const [onX, setOnX] = useState(0);
  const [onY, setOnY] = useState(0);

  function parallaxEffect(e) {
    let x = e.clientX / window.innerWidth;
    let y = e.clientY / window.innerHeight;
    setOnX(x);
    setOnY(y);
  }

  return (
    <StyledMainComponent>
      <AuthComponent onMouseMove={parallaxEffect}>
        <BackgrounParallax
          style={{
            transform: 'translate(-' + onX * 50 + 'px, -' + onY * 50 + 'px)',
          }}
        />
        <StyledContainer>
          <Router>
            <Redirect noThrow from="/" to="/auth/sign_in/" />
            <SingUp path="/auth/sign_up/" />
            <SingIn path="/auth/sign_in/" />
            <ForgetPassword path="/auth/forgot_password/" />
            <ChangePasswordForm path="/auth/forgot_password/:token" />
            <EmailConfirmedComponent path="/auth/confirm_email/:token" />
          </Router>
        </StyledContainer>
      </AuthComponent>
      <Router>
        <CatalogGoalsComponent path="/goal/" />
        <FamilyComponent path="/goal/:id" />
      </Router>
    </StyledMainComponent>
  );
}

export default MainComponent;
