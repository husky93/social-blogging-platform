import React from 'react';
import App from './pages/App';
import Post from './pages/Post';
import CreatePost from './pages/CreatePost';
import ProtectedRoutes from './components/ProtectedRoutes';
import Dashboard from './pages/Dashboard';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useAppSelector } from './app/hooks';
import type { RootState } from './app/store';

interface RouteSwitchProps {}

const RouteSwitch: React.FC<RouteSwitchProps> = ({}) => {
  const user: RootState['user'] = useAppSelector((state) => state.user);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/post/:id" element={<Post />} />
        <Route element={<ProtectedRoutes auth={user.data !== null} />}>
          <Route path="/create-post" element={<CreatePost />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;
