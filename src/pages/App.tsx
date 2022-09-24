import React, {
  Suspense,
  useEffect,
  LazyExoticComponent,
  useState,
} from 'react';
import { useAppSelector, useAppDispatch } from '../app/hooks';
import { RootState, AppDispatch } from '../app/store';
import { auth, onAuthStateChanged } from '../app/firebase';
import { login, logout } from '../features/user/userSlice';
import Loading from './Loading';

const Blog: LazyExoticComponent<any> = React.lazy(() => import('./Blog'));
const Homepage: LazyExoticComponent<any> = React.lazy(
  () => import('./Homepage')
);

const App: React.FC = () => {
  const user: RootState['user'] = useAppSelector((state) => state.user);
  const [loading, setLoading] = useState(true);
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
        setLoading(false);
      } else {
        dispatch(logout());
        setLoading(false);
      }
    });
  }, []);

  return (
    <div className="min-h-screen text-slate-800">
      {loading ? (
        <Loading />
      ) : user.data ? (
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
