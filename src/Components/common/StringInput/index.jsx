import React, { useEffect, useRef } from 'react';
import { ErrorWrapper, ErrorMessage } from '../../common/FormComponent';
import { FormInput } from '../../common/StyleFormInput';

function StringInput(props) {
  const { setInputValid, inputValue, inputValid } = props;

  const firstRender = useRef(true);

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }
    if (inputValue.trim().length >= 3) {
      setInputValid(true);
    } else {
      setInputValid(false);
    }
  }, [inputValue, setInputValid]);

  return (
    <div>
      <ErrorWrapper>
        <ErrorMessage invalid={inputValid}>
          enter valid {props.placeholder.toLowerCase()}
        </ErrorMessage>
      </ErrorWrapper>
      <FormInput
        onChange={e => props.setInputValue(e.target.value)}
        invalid={inputValid}
        type="text"
        placeholder={props.placeholder}
      />
    </div>
  );
}

export default StringInput;
