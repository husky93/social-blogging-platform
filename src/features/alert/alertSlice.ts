import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from '../../app/store';
import type { AlertVariant } from '../../components/Alert';

type InitialState = {
  data: {
    isShown: boolean;
    title: string;
    text: string;
    variant: AlertVariant;
  };
};

const initialState: InitialState = {
  data: {
    isShown: false,
    title: '',
    text: '',
    variant: 'info',
  },
};

export const alertSlice = createSlice({
  name: 'alert',
  initialState,
  reducers: {
    activate: (state, action) => {
      state.data = action.payload;
    },
    deactivate: (state) => {
      state.data = initialState.data;
    },
  },
});

export const { activate, deactivate } = alertSlice.actions;

// selectors
export const selectAlert = (state: RootState) => state.alert.data;

export default alertSlice.reducer;
