import React from 'react';
import App from './pages/App';
import Post from './pages/CreatePost';
import ProtectedRoutes from './components/ProtectedRoutes';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useAppSelector } from './app/hooks';
import { RootState } from './app/store';

interface RouteSwitchProps {}

const RouteSwitch: React.FC<RouteSwitchProps> = ({}) => {
  const user: RootState['user'] = useAppSelector((state) => state.user);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route element={<ProtectedRoutes auth={user.data !== null} />}>
          <Route path="/create-post" element={<Post />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;
