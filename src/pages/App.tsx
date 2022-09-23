import React, { Suspense, useEffect, LazyExoticComponent } from 'react';
import { useAppSelector, useAppDispatch } from '../app/hooks';
import { RootState, AppDispatch } from '../app/store';
import { auth, onAuthStateChanged } from '../app/firebase';
import { login, logout, selectUser } from '../features/user/userSlice';
import Loading from './Loading';

const App: React.FC = () => {
  const user: RootState['user'] = useAppSelector((state) => state.user);
  const dispatch: AppDispatch = useAppDispatch();
  let Page: LazyExoticComponent<any> = React.lazy(() => import('./Homepage'));

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

  useEffect(() => {
    if (user.data) {
      Page = React.lazy(() => import('./Blog'));
    }
  }, [user]);

  return (
    <div className="min-h-screen">
      <Suspense fallback={<Loading />}>
        <Page />
      </Suspense>
    </div>
  );
};

export default App;
