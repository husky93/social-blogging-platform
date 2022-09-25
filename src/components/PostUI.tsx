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
  const [likesActive, setLikesActive] = useState(true);
  const [bookmarksActive, setBookmarksActive] = useState(false);

  const likeClasses: string = likesActive
    ? 'transition-all p-1 text-green-500 rounded cursor-pointer hover:text-green-800 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600'
    : 'transition-all p-1 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600';
  const bookmarkClasses: string = bookmarksActive
    ? 'transition-all p-1 text-green-500 rounded cursor-pointer hover:text-green-800 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600'
    : 'transition-all p-1 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600';

  return (
    <div className="hidden min-w-16 py-4 pr-6 sm:flex sm:flex-col sm:gap-8 text-2xl">
      <div>
        <button className={likeClasses}>
          <Icon>{likesActive ? <Heart /> : <HeartOutline />}</Icon>
        </button>
        <span className="text-sm">{likes}</span>
      </div>
      <div>
        <button className={bookmarkClasses}>
          <Icon>{bookmarksActive ? <Bookmark /> : <BookmarkOutline />}</Icon>
        </button>
        <span className="text-sm">{bookmarks}</span>
      </div>
    </div>
  );
};

export default PostUI;
