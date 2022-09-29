import React, { Suspense, useEffect, useRef, useState } from 'react';
import { useFetchUser, useAppSelector } from '../app/hooks';
import { db, doc, getDoc } from '../app/firebase';
import Loading from './Loading';
import Header from '../components/Header';
import Footer from '../components/Footer';
import type { LazyExoticComponent } from 'react';
import type { RootState } from '../app/store';
import type {
  DocumentReference,
  DocumentData,
  DocumentSnapshot,
} from 'firebase/firestore';

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
  const userID: string | undefined = user.data ? user.data.uid : undefined;
  const { userData } = useFetchUser(userID);
  const [posts, setPosts] = useState<Array<DocumentData>>([]);
  const [loading, setLoading] = useState(true);
  const isFirstLoad = useRef(true);

  useEffect(() => {
    const fetchPost = async (postID: string): Promise<void> => {
      const docRef: DocumentReference<DocumentData> = doc(db, 'posts', postID);
      const docSnap: DocumentSnapshot<DocumentData> = await getDoc(docRef);
      const data: DocumentData | undefined = docSnap.data();
      if (data) {
        data.id = postID;
        setPosts((prevState) => [...prevState, data]);
      }
    };
    if (userData && isFirstLoad.current) {
      userData.bookmarks.forEach(async (postID: string, i: number) => {
        await fetchPost(postID);
        if (i === userData.bookmarks.length - 1) setLoading(false);
      });
      isFirstLoad.current = false;
    }
  }, [userData]);

  return (
    <Suspense fallback={<Loading />}>
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
            {loading ? (
              <>
                <Skeleton />
                <Skeleton />
                <Skeleton />
              </>
            ) : posts.length > 0 ? (
              posts.map((post: DocumentData) => <PostCard post={post} />)
            ) : (
              <h2 className="text-center my-8 text-4xl font-extrabold block w-full py-2 text-transparent bg-clip-text leading-12 bg-gradient-to-r from-green-500 to-slate-800">
                You don't have any bookmarks yet!
              </h2>
            )}
          </div>
          <div className="basis-1/4">
            <Ad />
            <Ad />
          </div>
        </Container>
        <Footer />
      </main>
    </Suspense>
  );
};

export default Bookmarks;
