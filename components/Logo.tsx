import { BookOpen } from 'lucide-react';
import Link from 'next/link';

const Logo = () => {
  return (
    <Link href="/">
      <div className="flex items-center gap-2">
        <BookOpen size={28} />
        <h1 className="text-2xl font-bold">BlackPen</h1>
      </div>
    </Link>
  );
};

export default Logo;
