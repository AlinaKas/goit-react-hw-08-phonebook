import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import {
  filterContact,
} from './contacts-actions';
import {
  fetchContacts,
  addContact,
  deleteContact,
} from './contacts-operations';

// const initialContacts = [
//   { id: 'id-1', name: 'Rosie Simpson', phone: '459-12-56' },
//   { id: 'id-2', name: 'Hermione Kline', phone: '443-89-12' },
//   { id: 'id-3', name: 'Eden Clements', phone: '645-17-79' },
//   { id: 'id-4', name: 'Annie Copeland', phone: '227-91-26' },
// ];

const items = createReducer([], {
  [fetchContacts.fulfilled]: (_, { payload }) => payload,

  [addContact.fulfilled]: (state, { payload }) => [...state, payload],

  [deleteContact.fulfilled]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

const filter = createReducer('', {
  [filterContact]: (_, { payload }) => payload,
});

const loading = createReducer(false, {
  [fetchContacts.pending]: () => true,
  [fetchContacts.fulfilled]: () => false,
  [fetchContacts.rejected]: () => false,

  [addContact.pending]: () => true,
  [addContact.fulfilled]: () => false,
  [addContact.rejected]: () => false,

  [deleteContact.pending]: () => true,
  [deleteContact.fulfilled]: () => false,
  [deleteContact.rejected]: () => false,
});

export default combineReducers({
  items,
  filter,
  loading,
});

