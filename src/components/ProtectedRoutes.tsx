import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

interface ProtectedRoutesProps {
  auth: boolean;
}

const ProtectedRoutes: React.FC<ProtectedRoutesProps> = ({ auth }) => {
  return auth === true ? <Outlet /> : <Navigate to="/" replace />;
};

export default ProtectedRoutes;
