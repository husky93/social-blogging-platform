import PostCard from './PostCard';
import { useInfiniteLoading } from '../app/hooks';
import React, { useCallback, useRef, RefObject } from 'react';
import {
  query,
  collection,
  orderBy,
  limit,
  startAfter,
  db,
} from '../app/firebase';
import Skeleton from './Skeleton';

interface BlogContentProps {}

const BlogContent: React.FC<BlogContentProps> = ({}) => {
  const { posts, hasMore, loading, loadItems, lastVisible } =
    useInfiniteLoading();
  const observer = useRef<IntersectionObserver>();
  const lastPostElementRef = useCallback(
    (node: HTMLDivElement | null) => {
      if (loading) return;

      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && entries[0].time > 3000 && hasMore) {
          const q = query(
            collection(db, 'posts'),
            orderBy('likesCount', 'desc'),
            startAfter(lastVisible),
            limit(5)
          );
          loadItems(q);
        }
      });
      if (node) observer.current.observe(node);
    },
    [loading, hasMore]
  );

  return (
    <>
      {posts.map((post, i) => {
        const isLastElement = posts.length === i + 1;
        return isLastElement ? (
          <div ref={lastPostElementRef} key={`post-${i}-ref`}>
            <PostCard post={post} key={`post-${i}`} />
          </div>
        ) : (
          <PostCard post={post} key={`post-${i}`} />
        );
      })}
      {loading && (
        <div>
          <Skeleton />
          <Skeleton />
          <Skeleton />
        </div>
      )}
    </>
  );
};

export default BlogContent;
