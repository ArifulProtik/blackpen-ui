import ArticleCard from '@/components/ArticleCard';
import Profile from '@/components/Profile';
import { allArticles } from '@/constants/articles';

const ProfilePage = () => {
  const articles = allArticles;
  return (
    <>
      <div className="container">
        <Profile />
      </div>
      <div className="container py-6">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-xl font-medium text-gray-500">From John Doe</h2>
          <span className="text-base text-gray-500 hover:underline">
            See All
          </span>
        </div>
        <div className="grid gap-8 md:grid-cols-4 lg:grid-cols-5">
          {articles.map((article) => (
            <ArticleCard key={article.id} {...article} />
          ))}
        </div>
      </div>
    </>
  );
};

export default ProfilePage;
