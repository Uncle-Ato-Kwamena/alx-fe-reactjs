import React from 'react';
import { Navigate } from 'react-router-dom';


const useAuth = () => {
 
  const isAuthenticated = false; 
  return isAuthenticated;
};

const ProtectedRoute = ({ element }) => {
  const isAuthenticated = useAuth();

  if (!isAuthenticated) {
    
    return <Navigate to="/login" />;
  }


  return element;
};

export default ProtectedRoute;
