import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';
import logo from '~/assets/images/logo.svg';

import { Container, Content } from './styles';
import { signInRequest } from '~/store/modules/auth/actions';

export default function SignIn() {
  const dispatch = useDispatch();
  const loading = useSelector(state => state.auth.loading);

  function handleSubmit({ email, password }) {
    dispatch(signInRequest(email, password));
  }

  return (
    <Container>
      <Content>
        <img src={logo} alt="GoBarber" />

        <Form onSubmit={handleSubmit}>
          <Input name="email" type="email" placeholder="exemplo@email.com" />

          <Input
            name="password"
            type="password"
            placeholder="Sua senha secreta"
          />

          <button type="submit">
            {loading ? 'Carregando...' : 'Entrar no sistema'}
          </button>
        </Form>
      </Content>
    </Container>
  );
}
