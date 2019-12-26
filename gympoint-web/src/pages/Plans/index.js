import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { withMonthSuffix } from '~/utils/formatters/date';
import { toBRL } from '~/utils/formatters/price';

import { Container, Row, Cell } from './styles';
import history from '~/services/history';
import api from '~/services/api';

export default function Plans() {
  const [plans, setPlans] = useState([]);

  async function loadPlans() {
    const response = await api.get('plans');
    setPlans(response.data);
  }

  useEffect(() => {
    loadPlans();
  }, []);

  function handleRegister() {
    history.push('/plans/register');
  }

  async function handleDelete(plan) {
    const confirmMessage = `Deseja realmente excluir o registro ${plan.title}?`;

    //eslint-disable-next-line no-restricted-globals
    if (confirm(confirmMessage)) {
      await api.delete(`plans/${plan.id}`);
      loadPlans();
    }
  }

  function renderPlan(plan) {
    return (
      <Row key={plan.id}>
        <Cell size={30}>
          <span>{plan.title}</span>
        </Cell>
        <Cell size={10}>
          <span>{withMonthSuffix(plan.duration)}</span>
        </Cell>
        <Cell size={20}>
          <span>{toBRL(plan.price)}</span>
        </Cell>
        <Cell size={20}>
          {/* workaround to pass props through Link */}
          <Link to={{ pathname: `/edit/${plan.id}`, state: { plan } }}>
            editar
          </Link>
        </Cell>
        <Cell size={20}>
          <button type="button" onClick={() => handleDelete(plan)} plan={plan}>
            apagar
          </button>
        </Cell>
      </Row>
    );
  }

  return (
    <Container>
      <header>
        <strong>Gerenciando planos</strong>
        <div>
          <button type="button" onClick={handleRegister}>
            Cadastrar
          </button>
        </div>
      </header>

      <ul>
        <Row>
          <Cell size={30}>
            <strong>TÍTULO</strong>
          </Cell>
          <Cell size={10}>
            <strong>DURAÇÃO</strong>
          </Cell>
          <Cell size={20}>
            <strong>VALOR P/ MÊS</strong>
          </Cell>
          <Cell size={40}>
            <span />
          </Cell>
        </Row>
        {plans.map(plan => renderPlan(plan))}
      </ul>
    </Container>
  );
}
