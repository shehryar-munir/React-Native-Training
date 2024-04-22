import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  data: [
    {
      name: 'Ahmed',
      phone: '+92 332 4133761',
      city: 'Lahore',
    },
    {
      name: 'Fatima',
      phone: '+92 332 4133762',
      city: 'Karachi',
    },
    {
      name: 'Ali',
      phone: '+92 332 4133763',
      city: 'Islamabad',
    },
    {
      name: 'Ayesha',
      phone: '+92 332 4133764',
      city: 'Faisalabad',
    },
    {
      name: 'Sana',
      phone: '+92 332 4133765',
      city: 'Multan',
    },
    {
      name: 'Bilal',
      phone: '+92 332 4133766',
      city: 'Rawalpindi',
    },
    {
      name: 'Zainab',
      phone: '+92 332 4133767',
      city: 'Lahore',
    },
  ],
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
