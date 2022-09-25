import type { Timestamp } from 'firebase/firestore';
import { format } from 'date-fns';
import React from 'react';
import Avatar from './Avatar';

interface AuthorProps {
  avatarUrl: string;
  displayName: string;
  timestamp: Timestamp;
}

const Author: React.FC<AuthorProps> = ({
  avatarUrl,
  displayName,
  timestamp,
}) => {
  const date = new Date(timestamp.seconds * 1000);
  return (
    <div className="flex items-center space-x-4">
      <Avatar imgLink={avatarUrl} />
      <div className="font-medium dark:text-white">
        <div>{displayName}</div>
        <div className="text-sm font-light text-gray-500 dark:text-gray-400">
          Posted on {format(date, 'do MMMMMMM y')}
        </div>
      </div>
    </div>
  );
};

export default Author;
