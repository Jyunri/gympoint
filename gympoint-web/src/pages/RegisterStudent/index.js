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
        <Input name="name" placeholder="John Doe" />
        <Input name="email" placeholder="exemplo@email.com" />
        <div>
          <Input name="age" />
          <Input name="weight" />
          <Input name="height" />
        </div>
      </Form>
    </Container>
  );
}
