import React, { useCallback, useRef } from 'react';
import {
  Image,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
  Alert,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/mobile';
import * as Yup from 'yup';

import { getValidationErrors } from '../../utils/getValidationErrors';
import { api } from '../../services/api';
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
  const formRef = useRef<FormHandles>(null);
  const navigation = useNavigation();

  const handleSubmit = useCallback(
    async (data, { reset }) => {
      try {
        const schema = Yup.object().shape({
          name: Yup.string().required('Campo obrigatório'),
          email: Yup.string()
            .email('Digite um email válido')
            .required('Campo obrigatório'),
          phone: Yup.string().min(10).required('Campo obrigatório'),
          password: Yup.string().required('Campo obrigatório'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        await api.post('/user', {
          name: data.name,
          email: data.email,
          phone: Number(data.phone),
          password: data.password,
        });

        navigation.navigate('SignIn');

        reset();
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);

          formRef.current?.setErrors(errors);
        }

        Alert.alert(
          'Erro ao efetuar o cadastro',
          'Verifique os dados informados',
        );
      }
    },
    [navigation],
  );

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

            <Form ref={formRef} onSubmit={handleSubmit}>
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
                placeholder="Digite seu telefone com DDD"
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
            </Form>

            <Button onPress={() => formRef.current?.submitForm()}>
              Cadastrar
            </Button>
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
