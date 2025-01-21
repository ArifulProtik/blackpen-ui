import ArticleCard from '@/components/ArticleCard';
import Profile from '@/components/Profile';
import { Separator } from '@/components/ui/separator';
import { allArticles } from '@/constants/articles';

const ProfilePage = () => {
  const articles = allArticles;
  return (
    <>
      <div className="container py-6">
        <Profile />
      </div>
      <Separator />

      <div className="container py-6">
        <div className="grid grid-cols-3 gap-8">
          {articles.map((article) => (
            <ArticleCard key={article.id} {...article} />
          ))}
        </div>
      </div>
    </>
  );
};

export default ProfilePage;
