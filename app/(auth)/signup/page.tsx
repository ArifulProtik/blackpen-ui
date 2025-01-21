'use client';
import AuthForm from '@/components/AuthForm';
import { AUTH_FORM_TYPE } from '@/constants/form';
import { SignUpSchema } from '@/lib/form-validation';
import Link from 'next/link';

const SignUp = () => {
  return (
    <>
      <title> Sign Up - BlackPen </title>
      <div className="flex flex-col gap-2">
        <h1 className="text-center text-2xl md:text-3xl font-semibold">
          Sign Up
        </h1>
        <p className="text-center text-base md:text-lg text-muted-foreground">
          Create an account
        </p>
        <AuthForm
          type={AUTH_FORM_TYPE.Signup}
          schema={SignUpSchema}
          defaultValues={{
            name: '',
            email: '',
            password: '',
            confirm_password: '',
          }}
          onSubmit={() => Promise.resolve({ success: true })}
        />
        <p className="text-center text-sm text-muted-foreground">
          Already have an account?{' '}
          <Link href="/signin" className="text-primary">
            Signin
          </Link>
        </p>
      </div>
    </>
  );
};

export default SignUp;
