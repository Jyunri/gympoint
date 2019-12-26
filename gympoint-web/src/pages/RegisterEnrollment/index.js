import React from 'react';
import { useDispatch } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';
import { Container, ConfirmButton, CancelButton } from './styles';
import history from '~/services/history';
import { registerPlanRequest } from '~/store/modules/plans/actions';

export default function RegisterEnrollment() {
  const dispatch = useDispatch();

  function handleSubmit(data) {
    alert('Em construção');
    // dispatch(registerPlanRequest(data));
  }

  return (
    <Container>
      <header>
        <strong>Cadastro de matrícula</strong>
        <div>
          <CancelButton
            type="button"
            onClick={() => history.push('/enrollments')}
          >
            Voltar
          </CancelButton>
          <ConfirmButton type="submit" form="form">
            Salvar
          </ConfirmButton>
        </div>
      </header>
      <Form id="form" onSubmit={handleSubmit}>
        <label htmlFor="student">
          <strong>ALUNO</strong>
          <Input name="student" placeholder="Buscar aluno" />
        </label>

        <div>
          <label htmlFor="plan">
            <strong>PLANO</strong>
            <Input name="plan" placeholder="Buscar plano" />
          </label>

          <label htmlFor="startDate">
            <strong>DATA DE INÍCIO</strong>
            <Input name="startDate" />
          </label>

          <label htmlFor="endDate">
            <strong>DATA DE TÉRMINO</strong>
            <Input name="endDate" />
          </label>

          <label htmlFor="totalPrice">
            <strong>VALOR FINAL</strong>
            <Input name="totalPrice" />
          </label>
        </div>
      </Form>
    </Container>
  );
}
