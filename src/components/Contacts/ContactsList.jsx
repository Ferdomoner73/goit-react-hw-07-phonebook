import React from 'react';
import { nanoid } from 'nanoid';
import { EachContact } from './EachContact';
import { Filter } from './Filter';
import {
  ContactsListContainer,
  ContactsListTitle,
  List,
} from './contacts.styled';
import { useSelector } from 'react-redux';
import { getContacts, getFilter } from 'redux/selectors';
import { getIsLoading } from 'redux/selectors';

export const ContactsList = ({ handleChange }) => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const isLoading = useSelector(getIsLoading);

  const filterContactsList = contactsList => {
    return contactsList.filter(({ name }) =>
      name.toLowerCase().includes(filter)
    );
  };

  return (
    <ContactsListContainer>
      <ContactsListTitle>Contacts</ContactsListTitle>
      <Filter handleChange={handleChange} />
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <List>
          {filterContactsList(contacts).map(contact => (
            <EachContact key={nanoid(10)} contact={contact} />
          ))}
        </List>
      )}
    </ContactsListContainer>
  );
};
