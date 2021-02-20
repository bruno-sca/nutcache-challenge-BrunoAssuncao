import api from '../../services/api';

const headers = {
  'Content-Type': 'application/json',
};

export async function fetchPeople() {
  let response = [];
  await api
    .get('/people')
    .then((res) => {
      response = res.data.map((e) => {
        return {
          ...e,
          birthday: new Date(e.birthday),
          startDate: new Date(e.startDate),
        };
      });
    })
    .catch((e) => {
      console.log(e);
    });

  return response;
}

export async function addPeople(people) {
  const body = people;
  await api
    .post('/people', body)
    .then(() => {
      return true;
    })
    .catch((e) => {
      console.log(e);
      return false;
    });
}

export async function updatePeople(people) {
  const url = `/people/${people._id}`;
  console.log(url);
  const body = people;
  delete body._id;

  await api
    .put(url, body, headers)
    .then(() => {
      return true;
    })
    .catch((e) => {
      console.log(e);
      return false;
    });
}

export async function deletePeople(people) {
  const url = `/people/${people._id}`;

  await api
    .delete(url, headers)
    .then((res) => {
      console.log(res);
      return true;
    })
    .catch((e) => {
      console.log(e);
      return false;
    });
}
