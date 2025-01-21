import Footer from '@/components/Footer';
import NavBar from '@/components/NavBar';

const Homelayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <NavBar />
      <div className="">{children}</div>
      <Footer />
    </>
  );
};

export default Homelayout;
