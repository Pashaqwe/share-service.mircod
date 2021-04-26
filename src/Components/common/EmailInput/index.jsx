import React, { useEffect, useRef } from 'react';
import { ErrorWrapper, ErrorMessage } from '../FormComponent';
import { FormInput } from '../../common/StyleFormInput';

function EmailInput(props) {
  const firstRender = useRef(true);

  const { setInputValid, inputValue, inputValid } = props;

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }
    if (inputValue.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)) {
      setInputValid(true);
    } else {
      setInputValid(false);
    }
  }, [inputValue, setInputValid]);

  return (
    <div>
      <ErrorWrapper>
        <ErrorMessage invalid={inputValid}>enter valid email</ErrorMessage>
      </ErrorWrapper>
      <FormInput
        onChange={e => props.setInputValue(e.target.value)}
        invalid={inputValid}
        type="email"
        placeholder="Email"
      />
    </div>
  );
}

export default EmailInput;
