import { Article } from '@/types/article';
import Image from 'next/image';

const FeatureArticleCard = ({
  title,
  slug,
  image,
  createdAt,
  author: { name, profile_picture, id },
  index,
}: Article & { index: number }) => {
  const ifFirst = index === 0;
  return (
    <div
      className={`flex flex-col ${ifFirst ? ' col-span-1 row-span-2' : 'col-span-1 row-span-1'} gap-2`}
    >
      <div className={`w-full h-56 ${ifFirst ? 'md:h-96' : 'md:h-44'}`}>
        <Image
          src={image}
          alt={title}
          width={300}
          height={300}
          className="w-full rounded h-full object-cover"
        />
      </div>
      <h2
        className={`text-lg font-normal font-playfair ${ifFirst ? 'md:text-2xl' : 'md:text-xl'}`}
      >
        {title}
      </h2>
      <p className="text-base font-medium text-primary">{createdAt}</p>
    </div>
  );
};

export default FeatureArticleCard;
