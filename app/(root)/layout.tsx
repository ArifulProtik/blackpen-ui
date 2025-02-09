import Footer from '@/components/Footer';
import NavBar from '@/components/NavBar';
import { ReactNode } from 'react';

const Homelayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <NavBar />
      <div className="">{children}</div>
      <Footer />
    </>
  );
};

export default Homelayout;
