import * as contactsAPI from '../services/api-service';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async (_, { rejectWithValue }) => {
    try {
      const contacts = await contactsAPI.getFetchContacts();
      return contacts;
    } catch (error) {
      return rejectWithValue(error.response?.data ?? error.message);
    }
  }
);

export const postContact = createAsyncThunk(
  'contacts/addContact',
  async (contact, { rejectWithValue }) => {
    try {
      const contacts = await contactsAPI.postFetchContact(contact);
      return contacts;
    } catch (error) {
      return rejectWithValue(error.response?.data ?? error.message);
    }
  }
);

export const removeContact = createAsyncThunk(
  'contacts/removeContact',
  async (id, { rejectWithValue }) => {
    try {
      const contact = await contactsAPI.deleteFetchContact(id);
      return contact.id;
    } catch (error) {
      return rejectWithValue(error.response?.data ?? error.message);
    }
  }
);
