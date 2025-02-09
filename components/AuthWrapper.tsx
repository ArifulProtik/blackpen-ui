'use client';
import { useMeQuery } from '@/graphql/queries/user.queries';
import { useAuthStore } from '@/store/auth-store';
import { ReactNode, useEffect } from 'react';

const AuthWrapper = ({ children }: { children: ReactNode }) => {
  const { signOut, isInitialized } = useAuthStore();
  const { data, loading, error } = useMeQuery();

  useEffect(() => {
    if (data && !loading) {
      useAuthStore.setState({ User: data.me });
    }
    if (error) {
      signOut();
    }
  }, [data, loading, error, signOut]);
  if (!isInitialized) {
    return <>Loading</>;
  }

  return <>{children}</>;
};

export default AuthWrapper;
