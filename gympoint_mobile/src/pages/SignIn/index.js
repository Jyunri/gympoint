import React, { useState } from 'react';
import { Image } from 'react-native';

import { useDispatch, useSelector } from 'react-redux';
import Background from '~/components/Background';
import logo from '~/assets/logo.png';

import { Container, Form, FormInput, SubmitButton } from './styles';
import { signInRequest } from '~/store/modules/user/actions';

export default function SignIn() {
  const dispatch = useDispatch();
  const [studentId, setStudentId] = useState(null);
  const loading = useSelector(state => state.user.loading);

  function handleSubmit() {
    dispatch(signInRequest(studentId));
  }

  return (
    <Background>
      <Container>
        <Image source={logo} size={120} />
        <Form>
          <FormInput
            icon="person"
            keyboardType="numeric"
            autoCorrect={false}
            placeholder="Informe seu ID de cadastro"
            returnKeyType="send"
            onSubmitEditing={handleSubmit}
            onChangeText={setStudentId}
          />

          <SubmitButton loading={loading} onPress={handleSubmit}>
            Entrar no sistema
          </SubmitButton>
        </Form>
      </Container>
    </Background>
  );
}
