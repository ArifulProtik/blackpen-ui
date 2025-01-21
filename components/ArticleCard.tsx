import { Article } from '@/types/article';
import Image from 'next/image';
import Link from 'next/link';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Card } from './ui/card';

const ArticleCard = ({
  title,
  body,
  slug,
  image,
  createdAt,
  author,
}: Article) => {
  return (
    <Link href={`/articles/${slug}`}>
      <Card className="group h-full overflow-hidden rounded border-none bg-transparent shadow-none transition-all">
        <div className="flex h-full flex-col justify-between space-y-4">
          <div>
            <div className="relative aspect-[16/9] overflow-hidden rounded">
              <Image
                src={image}
                alt={title}
                fill
                className="object-cover transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
            </div>
            <div className="space-y-2 px-1">
              <h3 className="line-clamp-2 font-playfair text-lg tracking-tight transition-colors group-hover:text-primary">
                {title}
              </h3>
              <p className="line-clamp-3 text-sm text-muted-foreground">
                {body}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Avatar className="h-8 w-8">
              <AvatarImage src={author.profile_picture} />
              <AvatarFallback>{author.name[0]}</AvatarFallback>
            </Avatar>
            <div className="flex flex-col">
              <p className="">{author.name}</p>
              <p className="text-xs">{createdAt}</p>
            </div>
          </div>
        </div>
      </Card>
    </Link>
  );
};

export default ArticleCard;
