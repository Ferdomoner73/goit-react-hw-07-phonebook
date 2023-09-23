import { createSlice } from '@reduxjs/toolkit';

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: { list: [] },
  reducers: {
    add: (state, action) => {
      const { name, number } = action.payload;
      // if (state.list) {
      //   if (state.list.find(contact => contact.name === name)) {
      //     return state;
      //   }
      // }
      state.list = [...state.list, { name, number }];
      return state;
    },
    remove: (state, action) => {
      if (state.list) {
        const remainingContacts = state.list.filter(
          contact => contact.name !== action.payload
        );
        state.list = [...remainingContacts];
        return state;
      }
      return state;
    },
  },
});

export const { add, remove } = contactsSlice.actions;
