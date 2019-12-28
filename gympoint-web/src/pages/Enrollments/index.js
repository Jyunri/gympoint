import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ISOtoHumanDate } from '~/utils/formatters/date';
import { Container, Row, Cell } from './styles';
import history from '~/services/history';
import api from '~/services/api';

export default function Enrollments() {
  const [enrollments, setEnrollments] = useState([]);

  async function loadEnrollments() {
    const response = await api.get('enrollments');

    const parsedData = response.data.map(enrollment => ({
      ...enrollment,
      parsedStartDate: ISOtoHumanDate(enrollment.start_date),
      parsedEndDate: ISOtoHumanDate(enrollment.end_date),
    }));

    setEnrollments(parsedData);
  }

  useEffect(() => {
    loadEnrollments();
  }, []);

  function handleRegister() {
    history.push('/enrollments/register');
  }

  async function handleDelete(enrollment) {
    const confirmMessage = `Deseja realmente excluir o registro de ${enrollment.student.name}?`;

    // eslint-disable-next-line no-restricted-globals
    if (confirm(confirmMessage)) {
      await api.delete(`enrollments/${enrollment.id}`);
      loadEnrollments();
    }
  }

  function renderEnrollment(enrollment) {
    return (
      <Row key={enrollment.id}>
        <Cell size={20}>
          <span>{enrollment.student.name}</span>
        </Cell>
        <Cell size={10}>
          <span>{enrollment.plan.title}</span>
        </Cell>
        <Cell size={20}>
          <span>{enrollment.parsedStartDate}</span>
        </Cell>
        <Cell size={20}>
          <span>{enrollment.parsedEndDate}</span>
        </Cell>
        <Cell size={10}>
          <span>{enrollment.active ? 'SIM' : 'NÃO'}</span>
        </Cell>
        <Cell size={10}>
          {/* workaround to pass props through Link */}
          <Link
            to={{
              pathname: `/enrollments/${enrollment.id}/edit`,
              state: { enrollment },
            }}
          >
            editar
          </Link>
        </Cell>
        <Cell size={10}>
          <button
            type="button"
            onClick={() => handleDelete(enrollment)}
            enrollment={enrollment}
          >
            apagar
          </button>
        </Cell>
      </Row>
    );
  }

  return (
    <Container>
      <header>
        <strong>Gerenciando matrículas</strong>
        <div>
          <button type="button" onClick={handleRegister}>
            Cadastrar
          </button>
        </div>
      </header>

      <ul>
        <Row>
          <Cell size={20}>
            <strong>ALUNO</strong>
          </Cell>
          <Cell size={10}>
            <strong>PLANO</strong>
          </Cell>
          <Cell size={20}>
            <strong>INÍCIO</strong>
          </Cell>
          <Cell size={20}>
            <strong>TÉRMINO</strong>
          </Cell>
          <Cell size={10}>
            <strong>ATIVA</strong>
          </Cell>
          <Cell size={20}>
            <span />
          </Cell>
        </Row>
        {enrollments.map(enrollment => renderEnrollment(enrollment))}
      </ul>
    </Container>
  );
}
