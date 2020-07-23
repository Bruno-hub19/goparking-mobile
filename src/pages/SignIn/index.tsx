import React from 'react';
import {
  Image,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
} from 'react-native';

import logoImg from '../../assets/logo.png';

import Button from '../../components/Button';
import Input from '../../components/Input';

import {
  Container,
  ContentTitle,
  ForgotPassword,
  ForgotPasswordText,
  CreateAccountButton,
  CreateAccountButtonText,
} from './styles';

const SignIn: React.FC = () => {
  return (
    <>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        style={{ flex: 1 }}
      >
        <ScrollView
          contentContainerStyle={{ flex: 1 }}
          keyboardShouldPersistTaps="handled"
        >
          <Container>
            <Image source={logoImg} />

            <ContentTitle>Faça seu logon</ContentTitle>

            <Input icon="mail" name="mail" placeholder="Digite seu e-mail" />
            <Input icon="lock" name="password" placeholder="Digite sua senha" />

            <Button>Entrar</Button>

            <ForgotPassword>
              <ForgotPasswordText>Esqueci minha senha</ForgotPasswordText>
            </ForgotPassword>
          </Container>
        </ScrollView>
      </KeyboardAvoidingView>

      <CreateAccountButton onPress={() => console.log('Navigate to signIn')}>
        <CreateAccountButtonText>Cadastrar</CreateAccountButtonText>
      </CreateAccountButton>
    </>
  );
};

export default SignIn;
