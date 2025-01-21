import { getDateWithTime } from '@/lib/date-formatter';
import { NotificationType } from '@/types/notification';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';

const SingleNotification = ({
  createdAt,
  type,
  isRead,
  entityId,
  actor: { name, id },
}: NotificationType) => {
  let actions;

  switch (type) {
    case 'Follow':
      actions = `followed you.`;
      break;
    case 'Comment':
      actions = 'commented on your article.';
      break;
    case 'React':
      actions = 'liked your article.';
      break;
    default:
      break;
  }

  const formattedTime = getDateWithTime(createdAt);

  return (
    <div
      className={` ${isRead ? '' : 'bg-muted'} py-2 px-2 hover:bg-muted border-b flex flex-col`}
    >
      <div className="flex flex-row gap-3 items-start">
        <Avatar className="w-12 h-12">
          <AvatarImage src={`https://i.pravatar.cc/150?u=${id}`} />
          <AvatarFallback>{name?.charAt(0)}</AvatarFallback>
        </Avatar>
        <div className="text-base flex-col">
          <div>
            <span className="font-semibold">{name}</span> {actions}
          </div>
          <span className="text-muted-foreground text-sm">{formattedTime}</span>
        </div>
      </div>
    </div>
  );
};

export default SingleNotification;
