import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { useEffect, useState, useRef } from 'react';
import { fetchPost } from './modules';
import {
  onAuthStateChanged,
  auth,
  getDocs,
  query,
  doc,
  getDoc,
  collection,
  db,
  orderBy,
  limit,
} from './firebase';
import { login, logout } from '../features/user/userSlice';
import type {
  DocumentData,
  QueryDocumentSnapshot,
  Query,
  QuerySnapshot,
  DocumentReference,
  DocumentSnapshot,
} from 'firebase/firestore';
import type { RootState, AppDispatch } from './store';
import type { FetchUserObject, InfiniteLoadingObject } from './types';

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useCheckIfLoggedIn = (dispatch: AppDispatch): boolean => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    onAuthStateChanged(auth, (userAuth) => {
      if (userAuth) {
        dispatch(
          login({
            uid: userAuth.uid,
            displayName: userAuth.displayName,
            photoUrl: userAuth.photoURL,
          })
        );
        setLoading(false);
      } else {
        dispatch(logout());
        setLoading(false);
      }
    });
  }, []);
  return loading;
};

export const useInfiniteLoading = (): InfiniteLoadingObject => {
  const [posts, setPosts] = useState<Array<DocumentData>>([]);
  const [loading, setLoading] = useState(true);
  const initialPageLoaded = useRef(false);
  const [hasMore, setHasMore] = useState(true);
  const [lastVisible, setLastVisible] =
    useState<QueryDocumentSnapshot<DocumentData> | null>(null);

  const loadItems = async (q: Query<DocumentData>): Promise<void> => {
    await setLoading(true);
    const documentSnapshots: QuerySnapshot<DocumentData> = await getDocs(q);
    await setPosts((prevState) => {
      const dataArray = documentSnapshots.docs.map((item) => {
        return { ...item.data(), id: item.id };
      });
      return [...prevState, ...dataArray];
    });
    setLastVisible(documentSnapshots.docs[documentSnapshots.docs.length - 1]);
    await setHasMore(documentSnapshots.docs.length < 5 ? false : true);
    await setLoading(false);
  };

  useEffect(() => {
    if (initialPageLoaded.current) {
      return;
    }
    const q = query(
      collection(db, 'posts'),
      orderBy('likesCount', 'desc'),
      limit(5)
    );
    loadItems(q);
    initialPageLoaded.current = true;
  }, [loadItems]);

  return {
    posts,
    hasMore,
    loadItems,
    loading,
    lastVisible,
  };
};

export const useFetchUser = (userID: string | undefined): FetchUserObject => {
  const [userData, setUserData] = useState<DocumentData | undefined>(undefined);
  const [loading, setLoading] = useState(true);

  const fetchUser = async (): Promise<void> => {
    if (userID !== undefined) {
      await setLoading(true);
      const docRef: DocumentReference<DocumentData> = doc(db, 'users', userID);
      const docSnap: DocumentSnapshot<DocumentData> = await getDoc(docRef);
      if (docSnap) {
        setUserData(docSnap.data());
      }
    }
    await setLoading(false);
  };
  useEffect(() => {
    fetchUser();
  }, []);

  return { userData, setUserData, loading };
};

export const useFetchPost = (
  postID: string | undefined
): DocumentData | undefined | null => {
  const [post, setPost] = useState<DocumentData | undefined | null>(null);
  const posts: RootState['posts'] = useAppSelector((state) => state.posts);
  const dispatch: AppDispatch = useAppDispatch();

  useEffect(() => {
    const getPost = async (): Promise<void> => {
      const data: DocumentData | undefined = await fetchPost(
        postID,
        posts.data,
        dispatch
      );
      setPost(data);
    };

    getPost();
  }, []);

  return post;
};
