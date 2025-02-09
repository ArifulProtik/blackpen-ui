'use client';
import { useAuthStore } from '@/store/auth-store';
import React, { ReactNode, useEffect } from 'react';

const AuthWrapper = ({ children }: { children: ReactNode }) => {
  const { isInitialized, isAuthenticated, User, token } = useAuthStore();
  useEffect(() => {
    console.log('AuthWrapper mounted');
  }, []);

  if (!isInitialized) {
    return null;
  }
  return <>{children}</>;
};

export default AuthWrapper;
