import React from 'react';
import { useDispatch } from 'react-redux';
import Modal from 'react-modal';
import { Form, Input } from '@rocketseat/unform';
import { Content } from './styles';
import { answerTicketRequest } from '~/store/modules/tickets/actions';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

Modal.setAppElement('#root');

export default function TicketModal({ modalIsOpen, onClose, ticket }) {
  const dispatch = useDispatch();

  function handleSubmit(data) {
    dispatch(
      answerTicketRequest({
        ...data,
        id: ticket.id,
      })
    );
    onClose();
  }

  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={onClose}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <Content>
        <strong>PERGUNTA DO ALUNO</strong>
        <span>{ticket.question}</span>
        <Form onSubmit={handleSubmit}>
          <label htmlFor="answer">
            <strong>SUA RESPOSTA</strong>
            <Input multiline name="answer" />
          </label>
          <button type="submit">Responder aluno</button>
        </Form>
      </Content>
    </Modal>
  );
}
