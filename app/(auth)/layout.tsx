'use client';
import Logo from '@/components/Logo';
import { useAuthStore } from '@/store/auth-store';
import Image from 'next/image';
import { redirect } from 'next/navigation';
import { ReactNode } from 'react';
const AuthLayout = ({ children }: { children: ReactNode }) => {
  const { isAuthenticated } = useAuthStore();
  if (isAuthenticated) {
    return redirect('/');
  }
  return (
    <div className="flex h-screen flex-col md:flex-row">
      <div className="hidden w-1/2 bg-primary/20 md:block">
        <Image
          src="https://images.pexels.com/photos/276092/pexels-photo-276092.jpeg"
          alt="Auth Image"
          width={500}
          height={500}
          className="h-full w-full object-cover brightness-[0.8]"
        />
      </div>
      <div className="flex h-full w-full flex-col items-center justify-center gap-20 py-6 md:w-1/2 md:gap-52">
        <div className="">
          <Logo />
        </div>
        <div className="flex-1 px-8 md:w-4/6">{children}</div>
      </div>
    </div>
  );
};

export default AuthLayout;
