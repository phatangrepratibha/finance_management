import React, { useEffect, useRef } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../store/auth';
import { toast } from 'react-toastify';

const Logout = () => {
  const { LogoutUser } = useAuth();
  const hasLoggedOut = useRef(false); // Track if effect has run

  useEffect(() => {
    if (!hasLoggedOut.current) { // Run only if it hasn't executed before
      toast.success("Logout Successful!");
      LogoutUser();
      hasLoggedOut.current = true; // Mark as executed
    }
  }, []); 

  return <Navigate to="/login" />;
};

export default Logout;
