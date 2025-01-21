import { featuredArticles } from '@/constants/articles';

const Hero = () => {
  const artcles = featuredArticles;
  return (
    <>
      <div className="flex flex-col gap-2">
        <h1 className="text-center text-2xl md:text-4xl font-semibold">
          Featured Article
        </h1>
        <p className="text-center text-base md:text-lg text-muted-foreground">
          Where knowledge meets conversations and innovation towards a better
          shape.
        </p>
      </div>
    </>
  );
};

export default Hero;
