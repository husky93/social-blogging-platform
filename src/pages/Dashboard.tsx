import React, {
  Suspense,
  useEffect,
  useState,
  useRef,
  useCallback,
} from 'react';
import { useFetchUser, useAppSelector } from '../app/hooks';
import { db, doc, getDoc, updateDoc, deleteDoc } from '../app/firebase';
import Loading from './Loading';
import Header from '../components/Header';
import Footer from '../components/Footer';
import UserUI from '../components/UserUI';
import { Icon } from '@ricons/utils';
import { AlertCircle } from '@ricons/tabler';
import type { RootState } from '../app/store';
import type { LazyExoticComponent } from 'react';
import type {
  DocumentData,
  DocumentReference,
  DocumentSnapshot,
} from 'firebase/firestore';
import type { FetchUserObject } from '../app/types';

const Container: LazyExoticComponent<any> = React.lazy(
  () => import('../components/Container')
);
const DashboardItem: LazyExoticComponent<any> = React.lazy(
  () => import('../components/DashboardItem')
);
const Skeleton: LazyExoticComponent<any> = React.lazy(
  () => import('../components/Skeleton')
);
const Modal: LazyExoticComponent<any> = React.lazy(
  () => import('../components/Modal')
);
const Button: LazyExoticComponent<any> = React.lazy(
  () => import('../components/Button')
);

interface DashboardProps {}

const Dashboard: React.FC<DashboardProps> = ({}) => {
  const user: RootState['user'] = useAppSelector((state) => state.user);
  const userID: string | undefined = user.data ? user.data.uid : undefined;
  const { loading, userData, setUserData }: FetchUserObject =
    useFetchUser(userID);
  const [modalID, setModalID] = useState<string | undefined>(undefined);
  const [posts, setPosts] = useState<Array<DocumentData>>([]);
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
      userData.posts.forEach((postID: string) => fetchPost(postID));
      isFirstLoad.current = false;
    }
  }, [userData]);

  const handleModalClose: React.MouseEventHandler<
    HTMLDivElement | HTMLButtonElement
  > = useCallback(() => {
    setModalID(undefined);
  }, []);

  const handleModalOpen: React.MouseEventHandler<HTMLButtonElement> =
    useCallback((e): void => {
      if (e.target instanceof HTMLButtonElement) {
        console.log(e.target.dataset.id);
        setModalID(e.target.dataset.id);
      }
    }, []);

  const updateDatabaseDeletion = useCallback(
    async (uID: string, pID: string, userNewPosts: Array<string>) => {
      const postRef: DocumentReference<DocumentData> = doc(db, 'posts', pID);
      const userRef: DocumentReference<DocumentData> = doc(db, 'users', uID);
      await updateDoc(userRef, { ...userData, posts: userNewPosts });
      await deleteDoc(postRef);
    },
    []
  );

  const handleConfirmDelete: React.MouseEventHandler<
    HTMLButtonElement
  > = (): void => {
    if (userData) {
      const newUserPosts = [...userData.posts];
      const newPosts = [...posts];
      const indexUser = newUserPosts.indexOf(modalID);
      const indexPost = newPosts.findIndex((post) => post.id === modalID);
      if (indexUser !== -1 && indexPost !== -1) {
        newUserPosts.splice(indexUser, 1);
        newPosts.splice(indexPost, 1);
        if (modalID && userID) {
          updateDatabaseDeletion(userID, modalID, newUserPosts);
        }
        setModalID(undefined);
        setUserData({ ...userData, posts: newUserPosts });
        setPosts(newPosts);
      }
    }
  };

  return (
    <Suspense fallback={<Loading />}>
      <main className="min-h-screen flex flex-col relative">
        {modalID && (
          <Modal handleModalClose={handleModalClose}>
            <div className="p-6 text-center text-gray-500">
              <div className="text-5xl">
                <Icon>
                  <AlertCircle />
                </Icon>
              </div>

              <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                Are you sure you want to delete this product?
              </h3>
              <div className="flex gap-4 justify-center">
                <Button
                  text="Yes, Delete"
                  variant="danger"
                  handleClick={handleConfirmDelete}
                />
                <Button
                  text="No, Cancel"
                  variant="hollow"
                  handleClick={handleModalClose}
                />
              </div>
            </div>
          </Modal>
        )}
        <Header>
          <UserUI />
        </Header>
        <Container customClasses="flex flex-1 items-start mt-6">
          {loading ? (
            <div className="flex justify-center gap-x-4 gap-y-8">
              <Skeleton />
              <Skeleton />
              <Skeleton />
            </div>
          ) : (
            <div>
              {userData && userData.posts.length === 0 ? (
                <h1>You don't have any articles added yet!</h1>
              ) : (
                <div className="flex flex-wrap justify-center gap-x-4 gap-y-8">
                  {userData &&
                    posts &&
                    posts.map((post: DocumentData) => (
                      <DashboardItem
                        handleModalOpen={handleModalOpen}
                        post={post}
                      />
                    ))}
                </div>
              )}
            </div>
          )}
        </Container>
        <Footer />
      </main>
    </Suspense>
  );
};

export default Dashboard;
