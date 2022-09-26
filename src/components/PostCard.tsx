import { useNavigate } from 'react-router-dom';
import React from 'react';
import Card from './Card';
import Author from './Author';
import Badge from './Badge';
import LikeToggler from './LikeToggler';
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
        <h2 className="my-4 ml-12 text-3xl font-extrabold text-gray-900 hover:text-green-700">
          {post.title}
        </h2>
        <div className="ml-12 flex gap-2">
          {post.tags.map((tag: string) => (
            <Badge>#{tag}</Badge>
          ))}
        </div>
        <div className="my-2 ml-12 text-xl flex items-center">
          <LikeToggler active={false} handleToggle={() => {}} id={post.id} />
          <span className="font-light text-sm">
            {post.likesCount} {post.likesCount > 1 ? 'reactions' : 'reaction'}
          </span>
        </div>
      </Card>
    </div>
  );
};

export default PostCard;
