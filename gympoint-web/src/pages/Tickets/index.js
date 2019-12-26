import React, { useState, useEffect } from 'react';

import { Container, Row, Cell } from './styles';
import api from '~/services/api';

export default function Tickets() {
  const [tickets, setTickets] = useState([]);

  async function loadTickets() {
    const response = await api.get('help-orders');
    setTickets(response.data);
  }

  useEffect(() => {
    loadTickets();
  }, []);

  function renderTicket(ticket) {
    return (
      <Row key={ticket.id}>
        <Cell size={80}>
          <span>{ticket.student.name}</span>
        </Cell>
        <Cell size={20}>
          <button type="button" onClick={() => console.log(1)} ticket={ticket}>
            responder
          </button>
        </Cell>
      </Row>
    );
  }

  return (
    <Container>
      <header>
        <strong>Pedidos de auxílio</strong>
      </header>

      <ul>
        <Row>
          <Cell size={80}>
            <strong>ALUNO</strong>
          </Cell>
          <Cell size={20}>
            <span />
          </Cell>
        </Row>
        {tickets.map(ticket => renderTicket(ticket))}
      </ul>
    </Container>
  );
}
