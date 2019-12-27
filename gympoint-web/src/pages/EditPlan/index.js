import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';
import { useParams } from 'react-router-dom';
import { Container, ConfirmButton, CancelButton } from './styles';
import history from '~/services/history';
import { updatePlanRequest } from '~/store/modules/plans/actions';
import api from '~/services/api';

export default function EditPlan() {
  const dispatch = useDispatch();

  // let access route from everywhere retrieving user data
  const { id } = useParams();

  const [plan, setPlan] = useState({});
  const [duration, setDuration] = useState(0);
  const [price, setPrice] = useState(0);

  useEffect(() => {
    async function loadPlan() {
      const response = await api.get(`plans/${id}`);
      const plan = response.data;
      setPlan(plan);
      setDuration(plan.duration);
      setPrice(plan.price);
    }

    loadPlan();
  }, [id]);

  function handleSubmit(data) {
    dispatch(
      updatePlanRequest({
        ...data,
        id: plan.id,
      })
    );
  }

  return (
    <Container>
      <header>
        <strong>Edição de plano</strong>
        <div>
          <CancelButton type="button" onClick={() => history.push('/plans')}>
            Voltar
          </CancelButton>
          <ConfirmButton type="submit" form="form">
            Salvar
          </ConfirmButton>
        </div>
      </header>
      <Form id="form" initialData={plan} onSubmit={handleSubmit}>
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
