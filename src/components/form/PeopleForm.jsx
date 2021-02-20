import React from 'react';

import { Field, reduxForm } from 'redux-form';

import { PeopleFormValidation as validate } from '../../services/validation';

import Input from '../input/Input';
import DateInput from '../input/DateInput';
import Dropdown from '../input/Dropdown';
import { maskCPF } from '../input/masks';

import { genderList, teamsList } from '../../services/utils';

//Name (text) * Birth Date (date picker) * Gender (dropdown) * Email * CPF *
//Start Date (MM/YYYY) * Team (dropdown fixed data Mobile, Frontend, Backend - could be nullable)

function PeopleForm(props) {
  const { handleSubmit, submitting, closeFunction, reset } = props;

  function handleClose() {
    reset('peopleForm');
    closeFunction();
  }

  return (
    <form onSubmit={handleSubmit(validate)} className="row">
      <div className="col-lg-6 col-12">
        <Field
          component={Input}
          name="name"
          inputClass="form-control floating"
          inputLabel="Nome"
          type="text"
        />
      </div>
      <div className="col-lg-6 col-12">
        <Field
          component={DateInput}
          name="birthday"
          inputClass="form-control floating"
          fieldName="Data de Nascimento"
          type="text"
        />
      </div>

      <div className="col-lg-6 col-12">
        <Field
          component={Dropdown}
          name="gender"
          options={genderList}
          placeholder="Gênero"
        />
      </div>

      <div className="col-lg-6 col-12">
        <Field
          component={Input}
          name="email"
          inputClass="form-control floating"
          inputLabel="E-mail"
          type="text"
        />
      </div>
      <div className="col-lg-6 col-12">
        <Field
          component={Input}
          name="cpf"
          inputClass="form-control floating"
          inputLabel="CPF"
          type="text"
          format={maskCPF}
        />
      </div>

      <div className="col-lg-6 col-12">
        <Field
          component={DateInput}
          name="startDate"
          inputClass="form-control floating"
          fieldName="Data de início"
          customFormat="MM/yyyy"
          showMonthYearPicker
        />
      </div>

      <div className="col-lg-6 col-12">
        <Field
          component={Dropdown}
          name="team"
          options={teamsList}
          textField="text"
          valueField="value"
          placeholder="Equipe"
        />
      </div>

      <div className="col-12 row flex-row-reverse">
        <button
          disabled={submitting}
          className="btn btn-primary btn-lg ml-3"
          type="submit"
        >
          Confirmar
        </button>
        <button
          type="button"
          className="btn btn-outline-primary btn-lg"
          onClick={() => handleClose()}
        >
          Cancelar
        </button>
      </div>
    </form>
  );
}

PeopleForm = reduxForm({
  form: 'peopleForm',
  destroyOnUnmount: true,
  enableReinitialize: true,
})(PeopleForm);

export default PeopleForm;
