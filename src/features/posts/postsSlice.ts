import { createSlice } from '@reduxjs/toolkit';
import { DocumentData } from 'firebase/firestore';
import { RootState } from '../../app/store';

type InitialState = {
  data: Array<DocumentData>;
};

const initialState: InitialState = {
  data: [],
};

export const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    addPost: (state, action) => {
      const isPostAdded = state.data.find(
        (post) => post.id === action.payload.id
      );
      if (!isPostAdded) {
        state.data.push(action.payload);
      }
    },
  },
});

export const { addPost } = postsSlice.actions;

export const selectAlert = (state: RootState) => state.posts.data;

export default postsSlice.reducer;
