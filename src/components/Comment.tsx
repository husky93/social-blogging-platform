import React from 'react';
import { format } from 'date-fns';
import Avatar from './Avatar';
import type { Timestamp } from 'firebase/firestore';

interface CommentProps {
  text: string;
  author: { uid: string; displayName: string; photoUrl: string };
  timestamp: Timestamp;
}

const Comment: React.FC<CommentProps> = ({ text, author, timestamp }) => {
  console.log(timestamp);
  return (
    <div className="flex items-center py-8 gap-4 min-w-16">
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
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Comment;
