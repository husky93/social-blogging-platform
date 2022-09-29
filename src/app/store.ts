import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/user/userSlice';
import alertReducer from '../features/alert/alertSlice';
import postsReducer from '../features/posts/postsSlice';

const store = configureStore({
  reducer: {
    user: userReducer,
    alert: alertReducer,
    posts: postsReducer,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
