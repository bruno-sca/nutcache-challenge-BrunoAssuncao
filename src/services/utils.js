export function onlyNumbersFormat(string) {
  return string.replace(/[^\d]+/g, '');
}

export function teamObjectToValue(maybeObject) {
  if (!maybeObject) return 'not defined';
  if (typeof maybeObject === 'object') return maybeObject.value;
  return maybeObject;
}

export function dateToJSON(date) {
  return date.toJSON();
}

export const genderList = [
  'Masculino',
  'Feminino',
  'Outro',
  'Prefiro não responder',
];

export const teamsList = [
  { text: 'Não definido', value: 'not defined' },
  { text: 'Mobile', value: 'mobile' },
  { text: 'Front-end', value: 'frontend' },
  { text: 'Back-end', value: 'backend' },
];
