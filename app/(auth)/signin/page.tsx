import { Metadata } from 'next';
import Link from 'next/link';
import SigninInform from './singin-form';

export const metadata: Metadata = {
  title: 'Sign In - BlackPen',
  description: 'Signin to your account',
};

const SinginPage = () => {
  return (
    <>
      <div className="flex flex-col gap-2">
        <h1 className="text-center text-2xl font-medium">Signin</h1>
        <p className="text-center text-base font-medium text-muted-foreground">
          Signin to your account
        </p>

        <SigninInform />

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
