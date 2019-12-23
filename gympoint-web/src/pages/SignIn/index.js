import React from 'react';
import { Form, Input } from '@rocketseat/unform';
import logo from '~/assets/images/logo.svg';

import { Container, Content } from './styles';

function handleSubmit(data) {
  console.tron.log(data);
}

export default function SignIn() {
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

          <button type="submit">Entrar no sistema</button>
        </Form>
      </Content>
    </Container>
  );
}
