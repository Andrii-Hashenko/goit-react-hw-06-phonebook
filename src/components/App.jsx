// import { useState } from 'react';
// import { Component } from 'react';
// import { nanoid } from 'nanoid';
import Form from './Form';
import ContactList from './ContactList';
import Filter from './Filter';
import './container.css';
import { useDispatch, useSelector } from 'react-redux';

import { addItems, deleteItems } from '../redux/itemsSlice';
import { updateFilter } from '../redux/filterSlice';



export default function App() {
  
  const { items } = useSelector(state => state.items);
  
  const value = useSelector(state => state.filter);
  

  const dispatch = useDispatch();
  
  const changeFilter = e => {
    dispatch(updateFilter(e.currentTarget.value));
    
  };

  const getVisibleContacts = () => {
    
    const normalizedFilter = value.toLowerCase();
    
    return items.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const deleteContact = contactId => {
    
    dispatch(deleteItems(contactId));
    
    dispatch(updateFilter(''));
  };

  return (
    <div className="Container">
      <h1>Phonebook</h1>
      {}
      <Form onSubmit={contact => dispatch(addItems(contact))} />
      <h2> Contacts : </h2>
      {}
      <Filter value={value} onChange={changeFilter} />
      <ContactList
        contacts={getVisibleContacts()}
        onDeleteContactList={deleteContact}
      />
    </div>
  );
}
