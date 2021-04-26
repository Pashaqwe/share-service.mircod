import React, { useEffect, useRef } from 'react';
import { ErrorWrapper, ErrorMessage } from '../../common/FormComponent';
import { FormInput } from '../../common/StyleFormInput';

function PasswordInput(props) {
  const { setInputValid, inputValue, inputValid } = props;

  const firstRender = useRef(true);

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }

    if (inputValue.trim().length >= 8) {
      setInputValid(true);
    } else {
      setInputValid(false);
    }
  }, [inputValue, setInputValid]);

  return (
    <div>
      <ErrorWrapper>
        <ErrorMessage invalid={inputValid}>enter valid password</ErrorMessage>
      </ErrorWrapper>
      <FormInput
        invalid={inputValid}
        onChange={e => props.setInputValue(e.target.value)}
        type="password"
        placeholder="Пароль"
      />
    </div>
  );
}
export default PasswordInput;
