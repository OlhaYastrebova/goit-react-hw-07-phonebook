import axios from 'axios';

const baseURL = axios.create({
  baseURL: 'https://648c19418620b8bae7ec39e6.mockapi.io/contacts/',
});

export const getContacts = async () => {
  const { data } = await baseURL.get();
  return data;
};

export const deleteContact = async id => {
  const { data } = await baseURL.delete(id);
  return data;
};

export const addContact = async contact => {
  const { data } = await baseURL.post('', contact);
  return data;
};
