import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { withMonthSuffix } from '~/utils/formatters/date';
import { toBRL } from '~/utils/formatters/price';

import { Container, Row, Cell } from './styles';
import history from '~/services/history';
import api from '~/services/api';
import Pagination from '~/components/Pagination';

export default function Plans() {
  const [plans, setPlans] = useState([]);
  const [currentPage, setPage] = useState(1);

  async function loadPlans() {
    const response = await api.get(`plans?page=${currentPage}`);

    const parsedData = response.data.map(plan => ({
      ...plan,
      parsedDuration: withMonthSuffix(plan.duration),
      parsedPrice: toBRL(plan.price),
    }));

    setPlans(parsedData);
  }

  useEffect(() => {
    loadPlans();
  }, [currentPage]); // eslint-disable-line

  function handleRegister() {
    history.push('/plans/register');
  }

  async function handleDelete(plan) {
    const confirmMessage = `Deseja realmente excluir o registro ${plan.title}?`;

    // eslint-disable-next-line no-restricted-globals
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
          <span>{plan.parsedDuration}</span>
        </Cell>
        <Cell size={20}>
          <span>{plan.parsedPrice}</span>
        </Cell>
        <Cell size={20}>
          {/* workaround to pass props through Link */}
          <Link to={{ pathname: `/plans/${plan.id}/edit`, state: { plan } }}>
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

      <Pagination
        currentPage={currentPage}
        onPrev={() => setPage(currentPage - 1)}
        onNext={() => setPage(currentPage + 1)}
      />
    </Container>
  );
}
