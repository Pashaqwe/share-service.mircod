import React, { useState, useEffect, useRef } from 'react';
import { FormInput, StyledLabel, TextFieldWrapper } from './styled';

function FloatingLabelInput(props) {
  const [labelInInput, setLabelInInput] = useState(true);
  const { inputValue, setInputValue, label, inputValid, setInputValid } = props;
  const firstRender = useRef(true);

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }

    if (inputValue.length >= 8) {
      setInputValid(true);
    } else {
      setInputValid(false);
    }
  }, [inputValue, setInputValid]);

  function floatToggler(input) {
    if (input === '') {
      setLabelInInput(prev => !prev);
    } else {
      return;
    }
  }

  return (
    <StyledLabel>
      <FormInput
        onBlur={e => floatToggler(inputValue)}
        onFocus={e => floatToggler(inputValue)}
        onChange={e => setInputValue(e.target.value)}
        type="text"
        invalid={inputValid}
      ></FormInput>
      <TextFieldWrapper invalid={inputValid} inInput={labelInInput}>
        {label}
      </TextFieldWrapper>
    </StyledLabel>
  );
}

export default FloatingLabelInput;
