import React from 'react';
import { Link } from 'react-router-dom';
import logo from '~/assets/images/logo.svg';

import { Container, Content } from './styles';

export default function SignIn() {
  return (
    <Container>
      <Content>
        <img src={logo} alt="GoBarber" />

        <form>
          <input type="email" placeholder="exemplo@email.com" />

          <input type="password" placeholder="Sua senha secreta" />

          <button type="submit">Entrar no sistema</button>
          <Link to="/register">Criar conta gratuita</Link>
        </form>
      </Content>
    </Container>
  );
}
