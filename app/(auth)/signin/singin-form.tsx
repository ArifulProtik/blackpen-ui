'use client';

import AuthForm from '@/components/AuthForm';
import { AUTH_FORM_TYPE } from '@/constants/form';
import { useSignin } from '@/graphql/mutations/auth.mutation';
import { SignInSchema } from '@/lib/form-validation';
import { useAuthStore } from '@/store/auth-store';
import { useEffect } from 'react';

const SigninInform = () => {
  const { handleSignin, data, loading, error } = useSignin();
  const { setUser } = useAuthStore();
  const onSubmit = async (values: { email: string; password: string }) => {
    try {
      await handleSignin(values);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    if (data?.Signin) {
      setUser(data.Signin);
    }
  }, [data, setUser]);

  return (
    <>
      {error && <p className="text-center text-red-500">{error.message}</p>}
      <AuthForm
        type={AUTH_FORM_TYPE.Signin}
        schema={SignInSchema}
        defaultValues={{
          email: '',
          password: '',
        }}
        loading={loading}
        onSubmit={onSubmit}
      />
    </>
  );
};

export default SigninInform;
