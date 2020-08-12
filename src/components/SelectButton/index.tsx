import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import { Container, BaseRadio, CheckRadio, ButtonText } from './styles';

interface ISelectButtonProps extends TouchableOpacityProps {
  title: string;
  isSelected: boolean;
  iconName?: string | undefined;
}

const SelectButton: React.FC<ISelectButtonProps> = ({
  title,
  isSelected,
  iconName,
  ...rest
}) => {
  return (
    <Container isSelected={isSelected} {...rest}>
      <BaseRadio>
        <CheckRadio isSelected={isSelected} />
      </BaseRadio>

      {iconName && <Icon name={iconName} size={20} color="#29c872" />}

      <ButtonText>{title}</ButtonText>
    </Container>
  );
};

export { SelectButton };
