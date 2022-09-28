import React, { Suspense } from 'react';
import Loading from './Loading';
import Header from '../components/Header';
import Footer from '../components/Footer';
import type { LazyExoticComponent } from 'react';

const Container: LazyExoticComponent<any> = React.lazy(
  () => import('../components/Container')
);
const UserUI: LazyExoticComponent<any> = React.lazy(
  () => import('../components/UserUI')
);
const Skeleton: LazyExoticComponent<any> = React.lazy(
  () => import('../components/Skeleton')
);

interface BookmarksProps {}

const Bookmarks: React.FC<BookmarksProps> = ({}) => {
  return (
    <Suspense fallback={<Loading />}>
      <main className="min-h-screen flex flex-col relative">
        <Header>
          <UserUI />
        </Header>
        <Container customClasses="flex flex-1"></Container>
        <Footer />
      </main>
    </Suspense>
  );
};

export default Bookmarks;
