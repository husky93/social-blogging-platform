import React from 'react';
import Avatar from './Avatar';
import { format } from 'date-fns';
import { useNavigate } from 'react-router-dom';
import type { NavigateFunction } from 'react-router-dom';
import type { DocumentData } from 'firebase/firestore';

interface TrendingItemProps {
  post: DocumentData;
  index: number;
}

const TrendingItem: React.FC<TrendingItemProps> = ({ post, index }) => {
  const navigate: NavigateFunction = useNavigate();

  const handleClick: React.MouseEventHandler<HTMLDivElement> = (): void => {
    navigate(`/post/${post.id}`);
  };

  return (
    <div
      className="flex items-center p-3 gap-4 cursor-pointer xl:basis-1/4"
      onClick={handleClick}
    >
      <span className="text-5xl font-bold text-gray-400">{index + 1}.</span>
      <div>
        <div className="flex items-center font-medium gap-1 text-sm">
          <Avatar sm imgLink={post.author.photoUrl} />
          <span>{post.author.displayName}</span>
        </div>
        <h4 className="transition-all my-3 font-extrabold text-lg line-clamp-2 hover:text-green-700">
          {post.title}
        </h4>
        <span className="font-light text-gray-500 text-sm">
          {format(new Date(post.timestamp.seconds * 1000), 'dd MMM')}
        </span>
      </div>
    </div>
  );
};

export default TrendingItem;
