import React from 'react';

import { BsPencil, BsTrash } from 'react-icons/bs';

import { teamsList } from '../../services/utils';

import './styles.scss';

export default function Card(props) {
  const { person, handleEdit, handleDelete } = props;
  return (
    <div className="card-container">
      <h5>{person.name}</h5>
      <p>E-mail: {person.email}</p>
      <p>
        Time:{' '}
        {person.team
          ? teamsList.find((e) => e.value === person.team).text
          : 'Não definido'}
      </p>
      <p>
        Data de início: {person.startDate && person.startDate.toDateString()}
      </p>

      <div className="icons-container">
        <button onClick={() => handleEdit(person)}>
          <BsPencil className="card-icon edit-icon" />
        </button>
        <button onClick={() => handleDelete(person)}>
          <BsTrash className="card-icon delete-icon" />
        </button>
      </div>
    </div>
  );
}
