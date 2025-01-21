import { User } from './user';

export type NotificationType = {
  id: string;
  createdAt: string;
  updatedAt: string;
  type: 'Follow' | 'React' | 'Comment';
  entityId: string;
  isRead: boolean;
  actorId: string;
  receiverId: string;
  actor: User;
};
