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
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
