import React, { useState, useCallback } from 'react';
import { TextInputProps } from 'react-native';

import { Container, TextInput, Icon } from './styles';

interface IInputProps extends TextInputProps {
  icon: string;
  name: string;
}

// prop name vai para o useField do unform/core
const Input: React.FC<IInputProps> = ({ icon, name, ...rest }) => {
  const [isFilled, setIsFilled] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);

    // Unform
    // setIsFilled(!!inputValueRef.current.value);
  }, []);

  return (
    <Container isFocused={isFocused}>
      <Icon name={icon} size={20} color={isFocused ? '#29c872' : '#7D7D7D'} />

      <TextInput
        placeholderTextColor="#7D7D7D"
        keyboardAppearance="dark"
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        {...rest}
      />
    </Container>
  );
};

export default Input;
