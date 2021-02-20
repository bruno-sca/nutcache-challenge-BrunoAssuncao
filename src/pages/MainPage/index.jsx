import React, { useState, useEffect } from 'react';

import Header from '../../components/Header';
import Card from '../../components/Card';
import PeopleModal from '../../components/Modal/PeopleModal';
import ConfirmDeleteModal from '../../components/Modal/ConfirmDeleteModal';

import { fetchPeople, deletePeople } from '../../store/actions/people';

import './styles.scss';

export default function MainPage() {
  const [listData, setListData] = useState([]);
  const [peopleModalShow, setPeopleModalShow] = useState(false);
  const [confirmDeleteModalShow, setConfirmDeleteModalShow] = useState(false);
  const [selectedCard, setSelectedCard] = useState({});

  // useEffect(async () => {
  //   const res = await fetchPeople();
  //   setListData(res);
  // }, []);

  function handlePeopleEdit(person) {
    setSelectedCard(person);
    setPeopleModalShow(true);
  }

  function handlePeopleDelete(person) {
    setSelectedCard(person);
    setConfirmDeleteModalShow(true);
  }

  return (
    <>
      <Header />
      <section className="app-container">
        <div className="people-cards-header-container d-flex justify-content-between">
          <h4>Pessoas</h4>

          <button
            onClick={() => setPeopleModalShow(true)}
            className="add-people-btn btn btn-large btn-primary"
          >
            Adicionar Pessoa
          </button>
        </div>
        <div className="people-cards-container">
          {listData &&
            listData.map((person) => {
              return (
                <Card
                  key={person._id}
                  person={person}
                  handleEdit={handlePeopleEdit}
                  handleDelete={handlePeopleDelete}
                />
              );
            })}
        </div>
      </section>
      <PeopleModal
        show={peopleModalShow}
        onHide={() => setPeopleModalShow(false)}
        initialValues={selectedCard}
        resetInitialValues={setSelectedCard}
      />
      <ConfirmDeleteModal
        show={confirmDeleteModalShow}
        onHide={() => {
          setConfirmDeleteModalShow(false);
          setSelectedCard({});
        }}
        confirmMessage={'Deseja remover ' + selectedCard.name + '?'}
        confirmFunction={() => {
          if (deletePeople(selectedCard)) {
            location.reload();
          }
        }}
        resetSelectedCard={setSelectedCard}
      />
    </>
  );
}
