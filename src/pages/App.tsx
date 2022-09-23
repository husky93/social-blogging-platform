import React, { Suspense, useEffect, LazyExoticComponent } from 'react';
import { useAppSelector, useAppDispatch } from '../app/hooks';
import { RootState, AppDispatch } from '../app/store';
import { auth, onAuthStateChanged } from '../app/firebase';
import { login, logout } from '../features/user/userSlice';
import Loading from './Loading';

const Homepage: LazyExoticComponent<any> = React.lazy(
  () => import('./Homepage')
);
const Blog: LazyExoticComponent<any> = React.lazy(() => import('./Blog'));

const App: React.FC = () => {
  const user: RootState['user'] = useAppSelector((state) => state.user);
  const dispatch: AppDispatch = useAppDispatch();

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
      } else {
        dispatch(logout());
      }
    });
  }, []);

  return (
    <div className="min-h-screen text-slate-800">
      {user.data ? (
        <Suspense fallback={<Loading />}>
          <Blog />
        </Suspense>
      ) : (
        <Suspense fallback={<Loading />}>
          <Homepage />
        </Suspense>
      )}
    </div>
  );
};

export default App;
