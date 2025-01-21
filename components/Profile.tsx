import { Github, Linkedin, MessageSquare, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from './ui/button';
const Profile = () => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center gap-3">
        <div className="relative">
          <Image
            src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg"
            alt="profile"
            width={500}
            height={500}
            className="h-40 w-40 object-cover rounded-full aspect-auto text-center"
          />
        </div>
        <div className="flex flex-col items-center">
          <h1 className="text-2xl font-semibold">John Doe</h1>
          <p className="text-muted-foreground">@johndoe</p>
        </div>
        <p className="w-2/5 text-center text-muted-foreground text-sm">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis
          cupiditate exercitationem atque! Accusantium sint cupiditate quia modi
          id. Quas esse magnam officiis dolorum fugiat fuga? Aliquid blanditiis
          perspiciatis fugiat mollitia?
        </p>

        <p className="text-muted-foreground text-sm">23 Follower</p>
        <div className="flex flex-row items-center gap-4">
          <Button>Follow</Button>{' '}
          <Button className="border border-primary bg-white text-primary hover:bg-muted hover:border-muted">
            <MessageSquare />
            Message
          </Button>
        </div>
        <div className="flex flex-row gap-3 py-3">
          <Link href={'https://github.com/johndoe'}>
            <Github className="w-6 h-6" />
          </Link>
          <Link href={'https://linkedin.com/in/johndoe'}>
            <Linkedin className="w-6 h-6" />
          </Link>

          <Link href={'https://twitter.com/johndoe'}>
            <X className="w-6 h-6" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Profile;
