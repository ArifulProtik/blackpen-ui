import ArticleCard from '@/components/ArticleCard';
import { allArticles } from '@/constants/articles';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Home - BlackPen a Place to learn',
};

const Home = () => {
  const articles = allArticles;
  return (
    <div className="container py-6">
      {/* <Hero /> */}

      {/* Latest Articles */}

      <section className="flex flex-col gap-2 text-left">
        <h1 className="text-2xl font-semibold md:text-4xl">Latest Articles</h1>
        <p className="text-base text-muted-foreground md:text-lg">
          All the latest articles are listed below.
        </p>
      </section>
      {/* List of articles */}

      <div className="grid grid-cols-1 gap-8 pt-10 md:grid-cols-3 lg:grid-cols-5">
        {articles.map((article) => (
          <ArticleCard key={article.id} {...article} />
        ))}
      </div>
    </div>
  );
};

export default Home;
