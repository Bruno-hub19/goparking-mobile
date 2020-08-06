import React, { useState, useCallback } from 'react';
import { TouchableOpacityProps } from 'react-native';

import { Container, ButtonText, Icon } from './styles';

interface IButtonProps extends TouchableOpacityProps {
  children: string;
  iconName: string;
}

const SelectButton: React.FC<IButtonProps> = ({
  children,
  iconName,
  ...rest
}) => {
  const [isSelected, setIsSelected] = useState(false);

  const handleSetIsSelected = useCallback(() => {
    setIsSelected(!isSelected);
  }, [isSelected]);

  return (
    <Container isSelected={isSelected} onPress={handleSetIsSelected} {...rest}>
      <Icon name={iconName} size={20} isSelected={isSelected} />

      <ButtonText isSelected={isSelected}>{children}</ButtonText>
    </Container>
  );
};

export { SelectButton };
