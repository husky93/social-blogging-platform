import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import type { RootState, AppDispatch } from './store';
import { useEffect, useState } from 'react';
import { onAuthStateChanged, auth } from './firebase';
import { login, logout } from '../features/user/userSlice';

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useCheckIfLoggedIn = (dispatch: AppDispatch) => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    onAuthStateChanged(auth, (userAuth) => {
      if (userAuth) {
        dispatch(
          login({
            email: userAuth.email,
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
