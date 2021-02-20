import { SubmissionError } from 'redux-form';
import { onlyNumbersFormat, teamObjectToValue, dateToJSON } from './utils';

export function PeopleFormValidation(values, dispatch, props) {
  const errors = {};
  let hasErrors = false;
  const fields = [
    { fieldName: 'name', isRequired: true },
    { fieldName: 'birthday', isRequired: true, validateFunction: dateToJSON },
    { fieldName: 'gender', isRequired: true },
    {
      fieldName: 'email',
      isRequired: true,
      validateFunction: validateEmail,
      validationErrorMessage: 'Email Inválido',
    },
    {
      fieldName: 'cpf',
      isRequired: true,
      validateFunction: validateCPF,
      validationErrorMessage: 'CPF Inválido',
      formatFunction: onlyNumbersFormat,
    },
    { fieldName: 'startDate', isRequired: true, validateFunction: dateToJSON },
    {
      fieldName: 'team',
      isRequired: false,
      formatFunction: teamObjectToValue,
    },
  ];

  for (let field in fields) {
    let fieldName = fields[field].fieldName;
    if (fields[field].isRequired && !values[fieldName]) {
      errors[fieldName] = 'Campo Obrigatório';
      hasErrors = true;
      continue;
    }
    if (fields[field].validateFunction) {
      if (!fields[field].validateFunction(values[fieldName])) {
        errors[fieldName] = fields[field].validationErrorMessage;
        hasErrors = true;
      }
    }
  }

  if (hasErrors) {
    throw new SubmissionError(errors);
  } else {
    for (let field in fields) {
      let fieldName = fields[field].fieldName;
      if (fields[field].formatFunction)
        values[fieldName] = fields[field].formatFunction(values[fieldName]);
    }
    props.onSubmit(values);
  }
}

function validateCPF(cpf) {
  cpf = cpf.replace(/[^\d]+/g, '');
  if (cpf == '') {
    return false;
  }

  if (
    cpf.length != 11 ||
    cpf == '00000000000' ||
    cpf == '11111111111' ||
    cpf == '22222222222' ||
    cpf == '33333333333' ||
    cpf == '44444444444' ||
    cpf == '55555555555' ||
    cpf == '66666666666' ||
    cpf == '77777777777' ||
    cpf == '88888888888' ||
    cpf == '99999999999'
  )
    return false;

  let add = 0;
  for (let i = 0; i < 9; i++) add += parseInt(cpf.charAt(i)) * (10 - i);
  let rev = 11 - (add % 11);
  if (rev == 10 || rev == 11) rev = 0;
  if (rev != parseInt(cpf.charAt(9))) return false;

  add = 0;
  for (let i = 0; i < 10; i++) add += parseInt(cpf.charAt(i)) * (11 - i);
  rev = 11 - (add % 11);
  if (rev == 10 || rev == 11) rev = 0;
  if (rev != parseInt(cpf.charAt(10))) return false;
  return true;
}

export function validateEmail(email) {
  return /\S+@\S+\.\S+/.test(email);
}
