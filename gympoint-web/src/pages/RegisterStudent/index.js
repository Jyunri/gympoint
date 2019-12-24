import React from 'react';
import { Form, Input } from '@rocketseat/unform';
import { Container, ConfirmButton, CancelButton } from './styles';
import history from '~/services/history';

export default function RegisterStudent() {
  return (
    <Container>
      <header>
        <strong>Cadastro do aluno</strong>
        <div>
          <CancelButton type="button" onClick={() => history.push('/students')}>
            Voltar
          </CancelButton>
          <ConfirmButton type="button" onClick={() => console.log(1)}>
            Salvar
          </ConfirmButton>
        </div>
      </header>
      <Form>
        <label htmlFor="name">
          <strong>NOME COMPLETO</strong>
          <Input name="name" placeholder="John Doe" />
        </label>

        <label htmlFor="email">
          <strong>ENDEREÇO DE EMAIL</strong>
          <Input name="email" placeholder="exemplo@email.com" />
        </label>

        <div>
          <label htmlFor="age">
            <strong>IDADE</strong>
            <Input name="age" />
          </label>

          <label htmlFor="weight">
            <strong>PESO (em kg)</strong>
            <Input name="weight" />
          </label>

          <label htmlFor="height">
            <strong>ALTURA</strong>
            <Input name="height" />
          </label>
        </div>
      </Form>
    </Container>
  );
}
