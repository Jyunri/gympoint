import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';

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

// Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement('#root');

export default function TicketModal({ modalIsOpen, onClose, ticket }) {
  let subtitle;

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#f00';
  }

  return (
    <Modal
      isOpen={modalIsOpen}
      onAfterOpen={afterOpenModal}
      onRequestClose={onClose}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <h2 ref={_subtitle => (subtitle = _subtitle)}>Hello</h2>
      <button type="button" onClick={onClose}>
        close
      </button>
      <div>{ticket.student && ticket.student.name}</div>
      <form>
        <input />
        <button type="button">tab navigation</button>
        <button type="button">stays</button>
        <button type="button">inside</button>
        <button type="button">the modal</button>
      </form>
    </Modal>
  );
}
