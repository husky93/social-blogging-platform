import { Icon } from '@ricons/utils';
import {
  HeartOutline,
  Heart,
  BookmarkOutline,
  Bookmark,
} from '@ricons/ionicons5';
import React, { useState, useEffect } from 'react';

interface PostUIProps {
  likes: number;
  bookmarks: number;
}

const PostUI: React.FC<PostUIProps> = ({ likes = 0, bookmarks = 0 }) => {
  const [likesActive, setLikesActive] = useState(false);
  const [bookmarksActive, setBookmarksActive] = useState(false);
  const [likesCount, setLikesCount] = useState(likes);
  const [bookmarksCount, setBookmarksCount] = useState(bookmarks);

  const handleUiItemClick: Function = (
    active: boolean,
    setCount: React.Dispatch<React.SetStateAction<number>>,
    setActive: React.Dispatch<React.SetStateAction<boolean>>,
    databaseQueryInactive: Function,
    databaseQueryActive: Function
  ) => {
    if (active) {
      setCount((prevState) => prevState - 1);
    } else {
      setCount((prevState) => prevState + 1);
    }
    setActive((prevState) => !prevState);
  };

  const likeClasses: string = likesActive
    ? 'flex items-center transition-all p-1 text-green-500 rounded cursor-pointer hover:text-green-800 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600'
    : 'flex items-center transition-all p-1 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600';
  const bookmarkClasses: string = bookmarksActive
    ? 'flex items-center transition-all p-1 text-green-500 rounded cursor-pointer hover:text-green-800 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600'
    : 'flex items-center transition-all p-1 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600';

  return (
    <div className="hidden min-w-16 py-4 pr-6 sm:flex sm:flex-col sm:gap-8 text-2xl">
      <div className="flex flex-col justify-center items-center">
        <button
          className={likeClasses}
          onClick={() => {
            handleUiItemClick(likesActive, setLikesCount, setLikesActive);
          }}
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
              setBookmarksActive
            );
          }}
        >
          <Icon>{bookmarksActive ? <Bookmark /> : <BookmarkOutline />}</Icon>
        </button>
        <span className="text-gray-500 text-sm">{bookmarksCount}</span>
      </div>
    </div>
  );
};

export default PostUI;
