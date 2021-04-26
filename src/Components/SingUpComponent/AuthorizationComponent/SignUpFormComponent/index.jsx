import React, { useState } from 'react';
import {
  StyledCheckboxWrapper,
  StyledCheckbox,
  StyledLabel,
  StyledGoogleButton,
  FakeCheckbox,
  ButtonsWrapper,
  CheckMark,
  ForgetPasswordWrapper,
  StyledForm,
} from '../../../common/FormComponent';
import { BlueButton } from '../../../common/BlueButton';
import EmailInput from '../../../common/EmailInput';
import PasswordInput from '../../../common/PasswordInput';
import StringInput from '../../../common/StringInput';
import { registerUser } from '../../../../redux/actions';
import { useDispatch } from 'react-redux';

function FormComponent(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [emailValid, setEmailValid] = useState(true);
  const [passwordValid, setPasswordValid] = useState(true);
  const [firstNameValid, setFirstNameValid] = useState(true);
  const [lastNameValid, setLastNameValid] = useState(true);
  const [isChecked, setIsChecked] = useState(false);
  const dispath = useDispatch();
  function validationAuthorization(e) {
    e.preventDefault();
    function validateInput(state, setState) {
      if (state.length === 0) {
        setState(false);
      }
    }
    validateInput(email, setEmailValid);
    validateInput(password, setPasswordValid);
    validateInput(firstName, setFirstNameValid);
    validateInput(lastName, setLastNameValid);

    dispath(
      registerUser(firstName, lastName, email, password, () =>
        props.onSuccessRegistration(),
      ),
    );
  }

  function responseGoogle(response) {
    console.log(response.profileObj);
    setEmail(response.profileObj.email);
    setPassword(response.profileObj.googleId);
    setFirstName(response.profileObj.familyName);
    setLastName(response.profileObj.givenName);
  }

  return (
    <div>
      <StyledForm onSubmit={validationAuthorization}>
        <StringInput
          placeholder="Name"
          inputValue={firstName}
          setInputValue={setFirstName}
          inputValid={firstNameValid}
          setInputValid={setFirstNameValid}
        />
        <StringInput
          placeholder="Surname"
          inputValue={lastName}
          setInputValue={setLastName}
          inputValid={lastNameValid}
          setInputValid={setLastNameValid}
        />
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
          <StyledCheckboxWrapper onClick={e => setIsChecked(prev => !prev)}>
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
        </ForgetPasswordWrapper>
        <ButtonsWrapper>
          <BlueButton
            onSubmit={validationAuthorization}
            type="submit"
            value="Sign Up"
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
    </div>
  );
}

export default FormComponent;
