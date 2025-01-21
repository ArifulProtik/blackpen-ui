'use client';
import AuthForm from '@/components/AuthForm';
import { AUTH_FORM_TYPE } from '@/constants/form';
import { SignInSchema } from '@/lib/form-validation';
import Link from 'next/link';

const SinginPage = () => {
  return (
    <>
      <title> Sign In - BlackPen </title>
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-medium text-center">Signin</h1>
        <p className="text-base font-medium text-muted-foreground text-center">
          Signin to your account
        </p>

        <AuthForm
          type={AUTH_FORM_TYPE.Signin}
          schema={SignInSchema}
          defaultValues={{
            email: '',
            password: '',
          }}
          onSubmit={() => Promise.resolve({ success: true })}
        />

        <p className="text-center text-sm text-muted-foreground">
          Don&apos;t have an account?{' '}
          <Link href="/signup" className="text-primary">
            Signup
          </Link>
        </p>
      </div>
    </>
  );
};

export default SinginPage;
