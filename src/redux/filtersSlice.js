import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: '',
};

const filterSlice = createSlice({
  name: 'filter',
  initialState: initialState,
  reducers: {
    changeFilter(state, action) {
      state.name = action.payload;
    },
  },
});

//to store
const filterReducer = filterSlice.reducer;
export default filterReducer;

// to Search Box
export const { changeFilter } = filterSlice.actions;

// to contactSlice
export const selectNameFilter = state => state.filters.name;
