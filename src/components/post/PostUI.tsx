import { Icon } from '@ricons/utils';
import {
  HeartOutline,
  Heart,
  BookmarkOutline,
  Bookmark,
} from '@ricons/ionicons5';
import {
  doc,
  updateDoc,
  arrayUnion,
  arrayRemove,
  db,
} from '../../app/firebase';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { toggleLike } from '../../features/posts/postsSlice';
import { showAlert } from '../Alert';
import React, { useState, useEffect } from 'react';
import type { DocumentData, DocumentReference } from 'firebase/firestore';
import type { RootState, AppDispatch } from '../../app/store';

interface PostUIProps {
  likes: Array<string>;
  bookmarks: Array<string>;
  postID: string | undefined;
}

const PostUI: React.FC<PostUIProps> = ({
  likes = [],
  bookmarks = [],
  postID,
}) => {
  const [likesActive, setLikesActive] = useState(false);
  const [bookmarksActive, setBookmarksActive] = useState(false);
  const [likesCount, setLikesCount] = useState(likes.length);
  const [bookmarksCount, setBookmarksCount] = useState(bookmarks.length);
  const user: RootState['user'] = useAppSelector((state) => state.user);
  const dispatch: AppDispatch = useAppDispatch();

  useEffect(() => {
    if (user.data !== null) {
      const userID = user.data.uid;
      const isLiked = likes.find((id) => id === userID);
      const isBookmarked = bookmarks.find((id) => id === userID);
      if (isLiked !== undefined) setLikesActive(true);
      if (isBookmarked !== undefined) setBookmarksActive(true);
    }
  }, [user]);

  const toggleArrayDatabase: Function = async (
    active: boolean,
    arrayName: string,
    payload: string | null | undefined,
    path: string,
    document: string | null | undefined,
    isLikes?: boolean,
    isUserDbQuery?: boolean
  ) => {
    if (document && payload) {
      const ref: DocumentReference<DocumentData> = doc(db, path, document);
      if (!active) {
        const likeCount = isLikes ? { likesCount: likesCount + 1 } : {};
        await updateDoc(ref, {
          [arrayName]: arrayUnion(payload),
          ...likeCount,
        });
        user.data && !isUserDbQuery
          ? dispatch(
              toggleLike({
                postID,
                userID: user.data.uid,
                isBookmark: !isLikes,
              })
            )
          : null;
      }
      if (active) {
        const likeCount = isLikes ? { likesCount: likesCount - 1 } : {};
        await updateDoc(ref, {
          [arrayName]: arrayRemove(payload),
          ...likeCount,
        });
        user.data && !isUserDbQuery
          ? dispatch(
              toggleLike({
                postID,
                userID: user.data.uid,
                isBookmark: !isLikes,
              })
            )
          : null;
      }
    }
  };

  const toggleBookmarkDatabase: Function = async (
    active: boolean,
    arrayName: string,
    payload: string | null | undefined,
    path: string,
    document: string | null | undefined
  ) => {
    toggleArrayDatabase(
      active,
      arrayName,
      payload,
      path,
      document,
      false,
      true
    );
    toggleArrayDatabase(active, arrayName, document, 'posts', payload);
  };

  const handleUiItemClick: Function = (
    active: boolean,
    setCount: React.Dispatch<React.SetStateAction<number>>,
    setActive: React.Dispatch<React.SetStateAction<boolean>>,
    databaseQuery: Function,
    payload: string | null | undefined,
    path: string,
    document: string | null | undefined,
    arrayName: string,
    isLikes?: boolean
  ) => {
    if (user.data === null) {
      showAlert(
        'Error!',
        'You must be logged in to like / bookmark your favorite posts!',
        'warning',
        dispatch
      );
      return;
    }
    if (active) {
      setCount((prevState) => prevState - 1);
    } else {
      setCount((prevState) => prevState + 1);
    }
    setActive((prevState) => !prevState);
    databaseQuery(active, arrayName, payload, path, document, isLikes);
  };

  const likeClasses: string = likesActive
    ? 'flex items-center transition-all p-1 text-green-500 rounded cursor-pointer hover:text-green-800 hover:bg-gray-100'
    : 'flex items-center transition-all p-1 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100';
  const bookmarkClasses: string = bookmarksActive
    ? 'flex items-center transition-all p-1 text-green-500 rounded cursor-pointer hover:text-green-800 hover:bg-gray-100'
    : 'flex items-center transition-all p-1 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100';

  return postID === undefined ? (
    <div></div>
  ) : (
    <div className="hidden min-w-16 py-4 pr-6 sm:flex sm:flex-col sm:gap-8 text-2xl">
      <div className="flex flex-col justify-center items-center">
        <button
          className={likeClasses}
          onClick={() => {
            handleUiItemClick(
              likesActive,
              setLikesCount,
              setLikesActive,
              toggleArrayDatabase,
              user.data?.uid,
              'posts',
              postID,
              'likes',
              true
            );
          }}
          aria-label="Like post"
        >
          <Icon>{likesActive ? <Heart /> : <HeartOutline />}</Icon>
        </button>
        <span className="text-gray-500 text-sm">{likesCount}</span>
      </div>
      <div className="flex flex-col justify-center items-center">
        <button
          className={bookmarkClasses}
          onClick={() => {
            handleUiItemClick(
              bookmarksActive,
              setBookmarksCount,
              setBookmarksActive,
              toggleBookmarkDatabase,
              postID,
              'users',
              user.data?.uid,
              'bookmarks'
            );
          }}
          aria-label="Bookmark post"
        >
          <Icon>{bookmarksActive ? <Bookmark /> : <BookmarkOutline />}</Icon>
        </button>
        <span className="text-gray-500 text-sm">{bookmarksCount}</span>
      </div>
    </div>
  );
};

export default PostUI;
