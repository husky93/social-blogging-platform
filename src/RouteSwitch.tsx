import React, { Suspense } from 'react';
import ProtectedRoutes from './components/ProtectedRoutes';
import Loading from './pages/Loading';
import ScrollToTop from './components/ScrollToTop';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { useAppSelector } from './app/hooks';
import type { LazyExoticComponent } from 'react';
import type { RootState } from './app/store';

const App: LazyExoticComponent<any> = React.lazy(() => import('./pages/App'));
const Post: LazyExoticComponent<any> = React.lazy(() => import('./pages/Post'));
const CreatePost: LazyExoticComponent<any> = React.lazy(
  () => import('./pages/CreatePost')
);
const Dashboard: LazyExoticComponent<any> = React.lazy(
  () => import('./pages/Dashboard')
);
const Bookmarks: LazyExoticComponent<any> = React.lazy(
  () => import('./pages/Bookmarks')
);
const Settings: LazyExoticComponent<any> = React.lazy(
  () => import('./pages/Settings')
);
const Profile: LazyExoticComponent<any> = React.lazy(
  () => import('./components/settings/Profile')
);

interface RouteSwitchProps {}

const RouteSwitch: React.FC<RouteSwitchProps> = ({}) => {
  const user: RootState['user'] = useAppSelector((state) => state.user);
  return (
    <Router>
      <ScrollToTop />
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/post/:id" element={<Post />} />
          <Route element={<ProtectedRoutes auth={user.data !== null} />}>
            <Route path="/create-post" element={<CreatePost />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/bookmarks" element={<Bookmarks />} />
            <Route path="/settings" element={<Settings />}>
              <Route index element={<Profile />} />
              <Route path="profile" element={<Profile />} />
            </Route>
          </Route>
        </Routes>
      </Suspense>
    </Router>
  );
};

export default RouteSwitch;
