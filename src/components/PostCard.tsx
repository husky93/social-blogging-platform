import Card from './Card';
import Author from './Author';
import { Link, useNavigate } from 'react-router-dom';
import React from 'react';
import type { DocumentData } from 'firebase/firestore';

interface PostCardProps {
  post: DocumentData;
}

const PostCard: React.FC<PostCardProps> = ({ post }) => {
  console.log(post);
  const { displayName, photoUrl } = post.author;
  const navigate = useNavigate();

  const handleCardClick: React.MouseEventHandler<HTMLDivElement> = (
    e
  ): void => {
    e.preventDefault();
    e.stopPropagation();
    navigate(`/post/${post.id}`);
  };

  return (
    <div onClick={handleCardClick} className="cursor-pointer">
      <Card customClasses="p-4 m-4">
        <Author
          avatarUrl={photoUrl}
          displayName={displayName}
          timestamp={post.timestamp}
          xs
        />
      </Card>
    </div>
  );
};

export default PostCard;
