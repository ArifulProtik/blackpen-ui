'use client';
import { useAuthStore } from '@/store/auth-store';
import { MessageSquare } from 'lucide-react';
import Link from 'next/link';
import Logo from './Logo';
import NotificationPopOver from './NotificationPop';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Button } from './ui/button';
import SearchBar from './ui/Search';

const NavBar = () => {
  const { isAuthenticated, User } = useAuthStore();
  return (
    <div className="border-b">
      <div className="container py-4">
        <div className="flex flex-col gap-4">
          <div className="flex flex-row items-center justify-between">
            <div className="flex flex-row items-center gap-6">
              <Logo />
              <div className="hidden md:block">
                <SearchBar />
              </div>
            </div>

            {isAuthenticated && User ? (
              <div className="flex flex-row items-center gap-4">
                <Link href={'/write'}>
                  <div className="text-base">Write</div>
                </Link>
                <div className="flex flex-col items-center text-xs font-medium uppercase">
                  <MessageSquare className="h-6 w-6" />
                </div>
                <NotificationPopOver />

                <Avatar className="h-8 w-8">
                  <AvatarImage src={User.profile_picture} />
                  <AvatarFallback>{User.name?.charAt(0)}</AvatarFallback>
                </Avatar>
              </div>
            ) : (
              <div className="flex flex-row gap-4">
                <Link href="/signin">
                  <Button className="hidden border border-primary bg-background text-primary hover:bg-background md:block">
                    Sign In
                  </Button>
                </Link>
                <Link href="/signup">
                  <Button variant="default">Get Started</Button>
                </Link>
              </div>
            )}
          </div>
          <div className="md:hidden">
            <SearchBar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
