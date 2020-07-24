import React from 'react';
import {
  Image,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import logoImg from '../../assets/logo.png';

import Button from '../../components/Button';
import Input from '../../components/Input';

import {
  Container,
  ContentTitle,
  SignInButton,
  SignInButtonText,
} from './styles';

const SignUp: React.FC = () => {
  const navigation = useNavigation();

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

            <ContentTitle>Faça seu cadastro</ContentTitle>

            <Input
              icon="user"
              name="name"
              placeholder="Digite seu nome"
              autoCorrect={false}
              autoCapitalize="words"
            />
            <Input
              icon="mail"
              name="email"
              placeholder="Digite seu e-mail"
              keyboardType="email-address"
              autoCorrect={false}
              autoCapitalize="none"
            />
            <Input
              icon="smartphone"
              name="phone"
              placeholder="Digite seu telefone"
              keyboardType="numeric"
              autoCorrect={false}
            />
            <Input
              icon="lock"
              name="password"
              placeholder="Digite sua senha"
              returnKeyType="next"
              secureTextEntry
            />

            <Button>Cadastrar</Button>
          </Container>
        </ScrollView>
      </KeyboardAvoidingView>

      <SignInButton onPress={() => navigation.navigate('SignIn')}>
        <SignInButtonText>Login</SignInButtonText>
      </SignInButton>
    </>
  );
};

export default SignUp;
