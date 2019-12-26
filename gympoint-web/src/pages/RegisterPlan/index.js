import React from 'react';
import { useDispatch } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';
import { Container, ConfirmButton, CancelButton } from './styles';
import history from '~/services/history';
import { registerPlanRequest } from '~/store/modules/plans/actions';

export default function RegisterPlan() {
  const dispatch = useDispatch();

  function handleSubmit(data) {
    dispatch(registerPlanRequest(data));
  }

  return (
    <Container>
      <header>
        <strong>Cadastro de plano</strong>
        <div>
          <CancelButton type="button" onClick={() => history.push('/')}>
            Voltar
          </CancelButton>
          <ConfirmButton type="submit" form="form">
            Salvar
          </ConfirmButton>
        </div>
      </header>
      <Form id="form" onSubmit={handleSubmit}>
        <label htmlFor="title">
          <strong>TÍTULO DO PLANO</strong>
          <Input name="title" />
        </label>

        <div>
          <label htmlFor="duration">
            <strong>DURAÇÃO (em meses)</strong>
            <Input name="duration" />
          </label>

          <label htmlFor="price">
            <strong>PREÇO MENSAL</strong>
            <Input name="price" />
          </label>

          <label htmlFor="totalPrice">
            <strong>PREÇO TOTAL</strong>
            <Input name="totalPrice" />
          </label>
        </div>
      </Form>
    </Container>
  );
}
