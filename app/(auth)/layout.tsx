import Logo from '@/components/Logo';
import Image from 'next/image';
const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-screen flex flex-col md:flex-row">
      <div className="hidden md:block w-1/2 bg-primary/20">
        <Image
          src="https://images.pexels.com/photos/276092/pexels-photo-276092.jpeg"
          alt="Auth Image"
          width={500}
          height={500}
          className="w-full h-full object-cover brightness-[0.8]"
        />
      </div>
      <div className="w-full h-full md:w-1/2 flex flex-col justify-center items-center py-6 gap-20 md:gap-52">
        <div className="">
          <Logo />
        </div>
        <div className="flex-1 md:w-4/6 px-8">{children}</div>
      </div>
    </div>
  );
};

export default AuthLayout;
