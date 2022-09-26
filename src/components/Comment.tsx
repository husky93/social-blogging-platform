import React, { useState, useEffect } from 'react';
import { useAppSelector } from '../app/hooks';
import { format } from 'date-fns';
import Avatar from './Avatar';
import LikeToggler from './LikeToggler';
import type { Timestamp } from 'firebase/firestore';
import type { RootState } from '../app/store';

interface CommentProps {
  text: string;
  author: { uid: string; displayName: string; photoUrl: string };
  timestamp: Timestamp;
  id: number;
  likes: Array<string>;
}

const Comment: React.FC<CommentProps> = ({
  text,
  author,
  timestamp,
  id,
  likes,
}) => {
  const [likeActive, setLikeActive] = useState(false);
  const [likesCount, setLikesCount] = useState(likes.length);
  const user: RootState['user'] = useAppSelector((state) => state.user);

  const handleLikeToggle: React.MouseEventHandler<HTMLButtonElement> = (
    e
  ): void => {
    if (user.data !== null) {
      setLikeActive((prevState) => !prevState);
    }
  };

  return (
    <div className="flex items-center py-8 gap-4 min-w-16" data-id={id}>
      <Avatar imgLink={author.photoUrl} />
      <div className="w-full p-4 rounded border border-gray-200">
        <div className="flex items-center gap-2 mb-4">
          <span className="dark:text-white text-gray-600">
            {author.displayName}
          </span>
          <span className="dark:text-white text-gray-400">•</span>
          <span className="text-sm font-light dark:text-white text-gray-400">
            {format(new Date(timestamp.seconds * 1000), 'do MMM yy')}
          </span>
        </div>
        <p className="mb-4">{text}</p>
        <div className="text-xl">
          <LikeToggler
            id={id}
            handleToggle={handleLikeToggle}
            active={likeActive}
          />
        </div>
      </div>
    </div>
  );
};

export default Comment;
