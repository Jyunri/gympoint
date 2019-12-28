import React from 'react';
import { useDispatch } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';
import { Container, ConfirmButton, CancelButton } from './styles';
import history from '~/services/history';
import { registerStudentRequest } from '~/store/modules/students/actions';

const schema = Yup.object().shape({
  name: Yup.string('Valor inválido').required('O email é obrigatório'),
  email: Yup.string('Valor inválido').required('O email é obrigatório'),
  age: Yup.string('Valor inválido').required('A idade é obrigatória'),
  weight: Yup.string('Valor inválido').required('O peso é obrigatório'),
  height: Yup.string('Valor inválido').required('A altura é obrigatório'),
});

export default function RegisterStudent() {
  const dispatch = useDispatch();

  function handleSubmit(data) {
    dispatch(registerStudentRequest(data));
  }

  return (
    <Container>
      <header>
        <strong>Cadastro de aluno</strong>
        <div>
          <CancelButton type="button" onClick={() => history.push('/students')}>
            Voltar
          </CancelButton>
          <ConfirmButton type="submit" form="form">
            Salvar
          </ConfirmButton>
        </div>
      </header>
      <Form id="form" schema={schema} onSubmit={handleSubmit}>
        <label htmlFor="name">
          <strong>NOME COMPLETO</strong>
          <Input name="name" placeholder="John Doe" />
        </label>

        <label htmlFor="email">
          <strong>ENDEREÇO DE EMAIL</strong>
          <Input name="email" type="email" placeholder="exemplo@email.com" />
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
