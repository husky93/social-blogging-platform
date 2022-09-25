import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/user/userSlice';
import alertReducer from '../features/alert/alertSlice';

const store = configureStore({
  reducer: {
    user: userReducer,
    alert: alertReducer,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
