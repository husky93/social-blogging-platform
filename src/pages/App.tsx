import React, { Suspense, useEffect, LazyExoticComponent } from 'react';
import Loading from './Loading';
import { useAppSelector } from '../app/hooks';
import { RootState } from '../app/store';

const App: React.FC = () => {
  const user: RootState['user'] = useAppSelector((state) => state.user);
  let Page: LazyExoticComponent<any> = React.lazy(() => import('./Homepage'));

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
