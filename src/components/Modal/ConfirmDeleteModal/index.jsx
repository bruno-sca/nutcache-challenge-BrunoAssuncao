import React from 'react';

import { Modal } from 'react-bootstrap';

export default function PeopleModal(props) {
  const { onHide, confirmMessage, confirmFunction } = props;

  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Remover Pessoa
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>{confirmMessage}</p>
        <div className="col-12 row flex-row-reverse mx-0">
          <button
            className="btn btn-primary ml-3"
            type="button"
            onClick={() => confirmFunction()}
          >
            Confirmar
          </button>
          <button
            type="button"
            className="btn btn-outline-primary"
            onClick={() => onHide()}
          >
            Cancelar
          </button>
        </div>
      </Modal.Body>
    </Modal>
  );
}
