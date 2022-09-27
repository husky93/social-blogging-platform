import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { useEffect, useState, useCallback, useRef } from 'react';
import {
  onAuthStateChanged,
  auth,
  getDocs,
  query,
  startAfter,
  startAt,
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
} from 'firebase/firestore';
import type { RootState, AppDispatch } from './store';

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useCheckIfLoggedIn = (dispatch: AppDispatch) => {
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

export const useInfiniteLoading = () => {
  const [posts, setPosts] = useState<Array<DocumentData>>([]);
  const [loading, setLoading] = useState(true);
  const initialPageLoaded = useRef(false);
  const [hasMore, setHasMore] = useState(true);
  const [lastVisible, setLastVisible] =
    useState<QueryDocumentSnapshot<DocumentData> | null>(null);

  const loadItems = async (q: Query<DocumentData>) => {
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
