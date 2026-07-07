import axios from 'axios';

// axios.defaults.baseURL = 'https://connections-api.goit.global';
axios.defaults.baseURL = 'http://localhost:3210/api';

export async function getFetchContacts() {
  const { data } = await axios.get('/contacts');
  return data;
}

export async function postFetchContact(postData) {
  const { data } = await axios.post('/contacts', postData);
  return data;
}

export async function deleteFetchContact(id) {
  const { data } = await axios.delete(`/contacts/${id}`);
  return data;
}
