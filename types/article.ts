import { User } from './user';

export type Article = {
  id: string;
  title: string;
  slug: string;
  body: string;
  image: string;
  createdAt: string;
  author: User;
};
