import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';
import logo from '~/assets/images/logo.svg';

import { Container, Content } from './styles';
import { signInRequest } from '~/store/modules/auth/actions';

const schema = Yup.object().shape({
  email: Yup.string()
    .email(`Insira um email válido`)
    .required('O email é obrigatório'),
  password: Yup.string().required('A senha é obrigatória'),
});

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

        <Form schema={schema} onSubmit={handleSubmit}>
          <label htmlFor="email">
            <strong>SEU E-MAIL</strong>
            <Input name="email" type="email" placeholder="exemplo@email.com" />
          </label>

          <label htmlFor="email">
            <strong>SUA SENHA</strong>
            <Input
              name="password"
              type="password"
              placeholder="Sua senha secreta"
            />
          </label>

          <button type="submit">
            {loading ? 'Carregando...' : 'Entrar no sistema'}
          </button>
        </Form>
      </Content>
    </Container>
  );
}
