import React from 'react';
import { useAppSelector, useAppDispatch } from '../app/hooks';
import { useCheckIfLoggedIn } from '../app/hooks';
import Loading from './Loading';
import type { LazyExoticComponent } from 'react';
import type { RootState, AppDispatch } from '../app/store';

const Blog: LazyExoticComponent<any> = React.lazy(() => import('./Blog'));
const Homepage: LazyExoticComponent<any> = React.lazy(
  () => import('./Homepage')
);

const App: React.FC = () => {
  const user: RootState['user'] = useAppSelector((state) => state.user);
  const dispatch: AppDispatch = useAppDispatch();
  const loading = useCheckIfLoggedIn(dispatch);

  return <>{loading ? <Loading /> : user.data ? <Blog /> : <Homepage />}</>;
};

export default App;
