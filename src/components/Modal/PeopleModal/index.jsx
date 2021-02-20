import React from 'react';

import PeopleForm from '../../form/PeopleForm';
import { Modal } from 'react-bootstrap';

import { addPeople, updatePeople } from '../../../store/actions/people';

export default function PeopleModal(props) {
  const { initialValues, resetInitialValues, onHide } = props;

  function handleAdd(values) {
    if (addPeople(values)) {
      location.reload();
    }
  }

  function handleEdit(values) {
    if (updatePeople(values)) {
      location.reload();
    }
  }

  return (
    <Modal
      {...props}
      size="xl"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {Object.getOwnPropertyNames(initialValues).length > 0
            ? 'Editar Pessoa'
            : 'Adicionar Pessoa'}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <PeopleForm
          onSubmit={
            Object.getOwnPropertyNames(initialValues).length > 0
              ? handleEdit
              : handleAdd
          }
          initialValues={initialValues ? initialValues : null}
          closeFunction={() => {
            props.onHide();
            props.resetInitialValues({});
          }}
        />
      </Modal.Body>
    </Modal>
  );
}
