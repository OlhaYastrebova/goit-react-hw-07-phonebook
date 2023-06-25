import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import {
  selectContacts,
  selectError,
  selectIsLoading,
} from 'redux/selectors/selectors';
import { fetchContacts } from 'redux/operation/operation';

import Container from './Container/Container';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';

const App = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Container>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      {isLoading && !error && <b>Request in progress...</b>}
      {contacts.length > 0 && <Filter />}
      {contacts.length > 0 ? <ContactList /> : <p>Your phonebook is empty.</p>}
    </Container>
  );
};

export default App;
