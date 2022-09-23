import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

type InitialState = {
  data: null | object;
};

const initialState: InitialState = {
  data: null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, action) => {
      state.data = action.payload;
    },
    logout: (state) => {
      state.data = null;
    },
  },
});

export const { login, logout } = userSlice.actions;

// selectors
export const selectUser = (state: RootState) => state.user.data;

export default userSlice.reducer;
