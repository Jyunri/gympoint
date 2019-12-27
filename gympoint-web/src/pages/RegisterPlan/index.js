import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';
import { Container, ConfirmButton, CancelButton } from './styles';
import history from '~/services/history';
import { registerPlanRequest } from '~/store/modules/plans/actions';

export default function RegisterPlan() {
  const dispatch = useDispatch();
  const [duration, setDuration] = useState(0);
  const [price, setPrice] = useState(0);

  function handleSubmit(data) {
    dispatch(registerPlanRequest(data));
  }

  return (
    <Container>
      <header>
        <strong>Cadastro de plano</strong>
        <div>
          <CancelButton type="button" onClick={() => history.push('/plans')}>
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
            <Input
              name="duration"
              onChange={e => setDuration(e.target.value)}
            />
          </label>

          <label htmlFor="price">
            <strong>PREÇO MENSAL</strong>
            <Input name="price" onChange={e => setPrice(e.target.value)} />
          </label>

          <label htmlFor="totalPrice">
            <strong>PREÇO TOTAL</strong>
            <Input readOnly name="totalPrice" value={price * duration} />
          </label>
        </div>
      </Form>
    </Container>
  );
}
