import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  data: [],
};

export const contactSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact: (state, action) => {
      state.data.push(action.payload);
    },
  },
});

export const {addContact} = contactSlice.actions;
export default contactSlice.reducer;

