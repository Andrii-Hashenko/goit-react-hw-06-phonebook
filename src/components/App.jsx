import Form from './Form';
import ContactList from './ContactList';
import Spinner from './Spinner/Spinner';
import Filter from './Filter';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './container.css';
import { useDispatch, useSelector } from 'react-redux';
import { updateFilter } from '../redux/filterSlice';
import {
  useFetchContactsQuery,
  useDeleteContactsMutation,
  useCreateContactsMutation,
} from 'redux/itemsSlice';

export default function App() {
  const value = useSelector(state => state.filter);
  const dispatch = useDispatch();

  const { data, isFetching } = useFetchContactsQuery();
  const [deleteItem] = useDeleteContactsMutation();
  const [newContact] = useCreateContactsMutation();

  const addContact = ({ name, phone }) => {
    const contact = {
      name,
      phone,
    };

    if (data.some(contact => contact.name === name)) {
      return toast.info(`${contact.name}   is   already in contacts`);
    }

    newContact(contact);
  };

  const changeFilter = e => {
    dispatch(updateFilter(e.currentTarget.value));
  };

  const getVisibleContacts = () => {
    const normalizedFilter = value.toLowerCase();
    return data.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  return (
    <div className="Container">
      <h1>Phonebook</h1>
      <Form onSubmit={addContact} />
      <ToastContainer
        position={'top-center'}
        autoClose={3000}
        theme={'colored'}
      />
      <h2> Contacts : </h2>
      <Filter value={value} onChange={changeFilter} />
      {}
      {isFetching && <Spinner />}
      {}
      {data && (
        <ContactList
          contacts={getVisibleContacts()}
          onDeleteContact={deleteItem}
        />
      )}
    </div>
  );
}
