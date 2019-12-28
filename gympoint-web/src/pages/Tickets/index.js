import React, { useState, useEffect } from 'react';

import { Container, Row, Cell } from './styles';
import api from '~/services/api';
import TicketModal from '~/components/modals/TicketModal';
import Pagination from '~/components/Pagination';

export default function Tickets() {
  const [tickets, setTickets] = useState([]);
  const [currentTicket, setCurrentTicket] = useState({});
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [currentPage, setPage] = useState(1);

  async function loadTickets() {
    const response = await api.get(`help-orders?page=${currentPage}`);
    setTickets(response.data);
  }

  useEffect(() => {
    loadTickets();
  }, [currentPage]); // eslint-disable-line

  function handleAnswerTicket(ticket) {
    setCurrentTicket(ticket);
    setModalIsOpen(true);
  }

  function closeModal() {
    setModalIsOpen(false);
  }

  function renderTicket(ticket) {
    return (
      <Row key={ticket.id}>
        <Cell size={80}>
          <span>{ticket.student.name}</span>
        </Cell>
        <Cell size={20}>
          <button
            type="button"
            onClick={() => handleAnswerTicket(ticket)}
            ticket={ticket}
          >
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

      <TicketModal
        modalIsOpen={modalIsOpen}
        onClose={closeModal}
        onSubmit={() => {
          closeModal();
          loadTickets();
        }}
        ticket={currentTicket}
      />
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

      <Pagination
        currentPage={currentPage}
        onPrev={() => setPage(currentPage - 1)}
        onNext={() => setPage(currentPage + 1)}
      />
    </Container>
  );
}
