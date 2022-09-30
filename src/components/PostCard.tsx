import Skeleton from './Skeleton';
import { useNavigate } from 'react-router-dom';
import React, { Suspense } from 'react';
import type { DocumentData } from 'firebase/firestore';
import type { LazyExoticComponent } from 'react';

const Card: LazyExoticComponent<any> = React.lazy(() => import('./Card'));
const Author: LazyExoticComponent<any> = React.lazy(() => import('./Author'));
const Badge: LazyExoticComponent<any> = React.lazy(() => import('./Badge'));
const LikeToggler: LazyExoticComponent<any> = React.lazy(
  () => import('./LikeToggler')
);

interface PostCardProps {
  post: DocumentData;
}

const PostCard: React.FC<PostCardProps> = ({ post }) => {
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
      <Suspense fallback={<Skeleton />}>
        <Card customClasses="p-4 my-6">
          <Author
            avatarUrl={photoUrl}
            displayName={displayName}
            timestamp={post.timestamp}
            xs
          />
          <h2 className="my-5 text-xl font-extrabold text-gray-900 hover:text-green-700 md:text-3xl md:ml-12">
            {post.title}
          </h2>
          <div className="flex flex-wrap gap-2 md:ml-12">
            {post.tags.map((tag: string, i: number) => (
              <Badge key={`badge-${i}`}>#{tag}</Badge>
            ))}
          </div>
          <div className="my-2 text-xl flex items-center md:ml-12">
            <LikeToggler active={false} handleToggle={() => {}} id={post.id} />
            <span className="font-light text-sm">
              {post.likesCount} {post.likesCount > 1 ? 'reactions' : 'reaction'}
            </span>
          </div>
        </Card>
      </Suspense>
    </div>
  );
};

export default PostCard;
