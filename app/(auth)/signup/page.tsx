'use client';
import Link from 'next/link';
import SIngupForm from './singup-form';

const SignUp = () => {
  return (
    <>
      <title> Sign Up - BlackPen </title>
      <div className="flex flex-col gap-2">
        <h1 className="text-center text-2xl font-semibold md:text-3xl">
          Sign Up
        </h1>
        <p className="text-center text-base text-muted-foreground md:text-lg">
          Create an account
        </p>
        <SIngupForm />

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
