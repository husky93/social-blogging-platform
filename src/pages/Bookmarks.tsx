import React, { useEffect, useRef, useState } from 'react';
import { useFetchUser, useAppSelector, useAppDispatch } from '../app/hooks';
import { fetchPost } from '../app/modules';
import type { LazyExoticComponent } from 'react';
import type { RootState } from '../app/store';
import type { DocumentData } from 'firebase/firestore';

const Header: LazyExoticComponent<any> = React.lazy(
  () => import('../components/Header')
);
const Footer: LazyExoticComponent<any> = React.lazy(
  () => import('../components/Footer')
);
const Container: LazyExoticComponent<any> = React.lazy(
  () => import('../components/Container')
);
const UserUI: LazyExoticComponent<any> = React.lazy(
  () => import('../components/UserUI')
);
const Skeleton: LazyExoticComponent<any> = React.lazy(
  () => import('../components/Skeleton')
);
const PostCard: LazyExoticComponent<any> = React.lazy(
  () => import('../components/PostCard')
);
const Menu: LazyExoticComponent<any> = React.lazy(
  () => import('../components/Menu')
);
const Ad: LazyExoticComponent<any> = React.lazy(
  () => import('../components/Ad')
);

interface BookmarksProps {}

const Bookmarks: React.FC<BookmarksProps> = ({}) => {
  const user: RootState['user'] = useAppSelector((state) => state.user);
  const fetchedPosts: RootState['posts'] = useAppSelector(
    (state) => state.posts
  );
  const userID: string | undefined = user.data ? user.data.uid : undefined;
  const { userData } = useFetchUser(userID);
  const [posts, setPosts] = useState<Array<DocumentData>>([]);
  const [loading, setLoading] = useState(true);
  const dispatch = useAppDispatch();
  const isFirstLoad = useRef(true);

  useEffect(() => {
    if (userData && isFirstLoad.current) {
      if (userData.bookmarks.length === 0) setLoading(false);
      userData.bookmarks.forEach(async (postID: string, i: number) => {
        const post = await fetchPost(postID, fetchedPosts.data, dispatch);
        if (post) {
          setPosts((prevData) => [...prevData, post]);
        }
        if (i === userData.bookmarks.length - 1) setLoading(false);
      });
      isFirstLoad.current = false;
    }
  }, [userData]);

  const renderBookmarks: Function = (): React.ReactNode => {
    if (loading)
      return (
        <>
          <Skeleton />
          <Skeleton />
          <Skeleton />
        </>
      );
    if (posts.length > 0)
      return posts.map((post: DocumentData) => <PostCard post={post} />);
    if (posts.length === 0)
      return (
        <h2 className="text-center my-8 text-4xl font-extrabold block w-full py-2 text-transparent bg-clip-text leading-12 bg-gradient-to-r from-green-500 to-slate-800">
          You don't have any bookmarks yet!
        </h2>
      );
  };

  return (
    <main className="min-h-screen flex flex-col relative">
      <Header>
        <UserUI />
      </Header>
      <Container customClasses="flex flex-1 w-full">
        <div className="basis-1/4 my-4">
          <Menu />
        </div>
        <div className="basis-2/4 flex flex-col p-4">
          <h1 className="mx-4 mt-8 mb-4 text-center text-2xl font-bold text-gray-900">
            Your Bookmarks:
          </h1>
          {renderBookmarks()}
        </div>
        <div className="basis-1/4">
          <Ad />
          <Ad />
        </div>
      </Container>
      <Footer />
    </main>
  );
};

export default Bookmarks;
