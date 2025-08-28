import { createSlice } from '@reduxjs/toolkit';
import { customersData, merchantsData, purchasesData } from './usersData';

const initialState = {
  usersData:merchantsData,
  purchasesData:purchasesData,
  customersData: customersData, 
};

const dataSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {

  },
});

export const { loginSuccess, logout } = dataSlice.actions;
export default dataSlice.reducer;