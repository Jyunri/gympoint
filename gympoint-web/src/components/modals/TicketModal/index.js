import React from 'react';
import Modal from 'react-modal';
import { Form, Input } from '@rocketseat/unform';
import { Content } from './styles';

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
        <Form>
          <label htmlFor="answer">
            <strong>SUA RESPOSTA</strong>
            <Input name="answer" />
          </label>
          <button type="submit">Responder aluno</button>
        </Form>
      </Content>
    </Modal>
  );
}
