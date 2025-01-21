import { User } from '@/types/user';
import { create } from 'zustand';

interface Authostore {
  isAuthenticated: boolean;
  User: User | null;
}

export const useAuthStore = create<Authostore>((set) => ({
  isAuthenticated: true,
  User: {
    id: '1',
    name: 'Ariful Protik',
    email: 'LwD0Z@example.com',
    profile_picture: 'https://i.pravatar.cc/150?u=1',
  },
}));
