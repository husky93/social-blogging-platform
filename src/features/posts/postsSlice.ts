import { createSlice, current } from '@reduxjs/toolkit';
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
      const currentState = current(state);
      const isPostAdded = currentState.data.find(
        (post) => post.id === action.payload.id
      );

      if (!isPostAdded) {
        state.data.push(action.payload);
      }
    },
    toggleLike: (state, action) => {
      const { postID, userID, isBookmark } = action.payload;
      const currentState = current(state);
      const post = currentState.data.find((item) => item.id === postID);
      const postIndex = currentState.data.findIndex(
        (item) => item.id === postID
      );
      const propName = isBookmark ? 'bookmarks' : 'likes';
      console.log(propName);
      if (post !== undefined) {
        const isClicked = post[propName].find(
          (item: string) => item === userID
        );
        console.log(isClicked);
        if (isClicked) {
          const index = post[propName].findIndex((x: string) => x === userID);
          console.log(post[propName], index);
          state.data[postIndex][propName].splice(index, 1);
        }
        if (!isClicked) {
          state.data[postIndex][propName].push(userID);
        }
      }
    },
  },
});

export const { addPost, toggleLike } = postsSlice.actions;

export const selectAlert = (state: RootState) => state.posts.data;

export default postsSlice.reducer;
