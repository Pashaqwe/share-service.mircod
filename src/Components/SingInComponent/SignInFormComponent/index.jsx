import React, { useState } from 'react';
import {
  StyledCheckboxWrapper,
  StyledCheckbox,
  StyledLabel,
  StyledGoogleButton,
  ForgetPassword,
  FakeCheckbox,
  ButtonsWrapper,
  CheckMark,
  ForgetPasswordWrapper,
  StyledForm,
  StyledSignInBlock,
  StyledSignInParagraph,
  StyledSignInLink,
} from '../../common/FormComponent';
import { BlueButton } from '../../common/BlueButton';
import EmailInput from '../../common/EmailInput';
import PasswordInput from '../../common/PasswordInput';
import { logInUser } from '../../../redux/actions';
import { useDispatch } from 'react-redux';
import { useNavigate } from '@reach/router';

function SignInFormComponent(props) {
  const [emailValid, setEmailValid] = useState(true);
  const [passwordValid, setPasswordValid] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isChecked, setIsChecked] = useState(false);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  function navigateOnGoals() {
    navigate('/goal/');
  }

  function isValidatAuthorization(e) {
    e.preventDefault();
    function validateInput(state, setState) {
      if (state.length === 0) {
        setState(false);
      }
    }
    validateInput(email, setEmailValid);
    validateInput(password, setPasswordValid);
    if (!emailValid || !passwordValid) {
      return;
    } else {
      dispatch(logInUser(email, password, navigateOnGoals));
    }
  }

  function responseGoogle(response) {
    setEmail(response.profileObj.email);
    setPassword(response.profileObj.googleId);
  }

  return (
    <div>
      <StyledForm onSubmit={isValidatAuthorization}>
        <EmailInput
          inputValid={emailValid}
          setInputValid={setEmailValid}
          inputValue={email}
          setInputValue={setEmail}
        />
        <PasswordInput
          inputValue={password}
          setInputValue={setPassword}
          inputValid={passwordValid}
          setInputValid={setPasswordValid}
        />
        <ForgetPasswordWrapper>
          <StyledCheckboxWrapper>
            <FakeCheckbox>
              <CheckMark checkedMark={isChecked}>&#10003;</CheckMark>
            </FakeCheckbox>
            <StyledCheckbox
              checked={isChecked}
              type="checkbox"
              id="checkbox"
              onChange={e => setIsChecked(prev => !prev)}
            />
            <StyledLabel htmlFor="checkbox">Запомни меня</StyledLabel>
          </StyledCheckboxWrapper>
          <ForgetPassword to="/auth/forgot_password/">
            Forget password?
          </ForgetPassword>
        </ForgetPasswordWrapper>
        <ButtonsWrapper>
          <BlueButton
            onSubmit={isValidatAuthorization}
            type="submit"
            value={'Sign In'}
          ></BlueButton>
          <StyledGoogleButton
            clientId="830977500409-jhv1amdsu98kh5igvetoe0a4t6ug3c0t.apps.googleusercontent.com"
            buttonText=""
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={'single_host_origin'}
          />
        </ButtonsWrapper>
      </StyledForm>
      <StyledSignInBlock>
        <StyledSignInParagraph>You dont have account?</StyledSignInParagraph>
        <StyledSignInLink to="/auth/sign_up/">Sign up</StyledSignInLink>
      </StyledSignInBlock>
    </div>
  );
}

export default SignInFormComponent;
