import React from 'react';
import { Icon } from '@ricons/utils';
import { useInfiniteLoading as useFetch } from '../../app/hooks';
import { TrendingUp } from '@ricons/tabler';
import type { LazyExoticComponent } from 'react';

const Skeleton: LazyExoticComponent<any> = React.lazy(
  () => import('../Skeleton')
);
const TrendingItem: LazyExoticComponent<any> = React.lazy(
  () => import('./TrendingItem')
);
const Container: LazyExoticComponent<any> = React.lazy(
  () => import('../Container')
);

interface TrendingProps {}

const Trending: React.FC<TrendingProps> = ({}) => {
  const { posts, loading } = useFetch();

  return (
    <Container>
      <div className="mt-4 flex items-center justify-center gap-2 text-3xl text-gray-900 lg:justify-start">
        <Icon>
          <TrendingUp />
        </Icon>
        <span className="text-xl font-bold">Trending on Coach</span>
      </div>
      {loading && (
        <div className="flex flex-wrap gap-6 justify-around items-center my-8">
          <Skeleton sm />
          <Skeleton sm />
          <Skeleton sm />
          <Skeleton sm />
          <Skeleton sm />
        </div>
      )}
      {!loading && (
        <div className="flex flex-wrap gap-y-12 justify-start items-center my-8 md:justify-around">
          {posts.map((post, index) => {
            if (index === posts.length - 1) return;
            return <TrendingItem post={post} index={index} />;
          })}
        </div>
      )}
    </Container>
  );
};

export default Trending;
