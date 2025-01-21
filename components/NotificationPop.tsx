import { Notification } from '@/constants/Notification';
import { Bell } from 'lucide-react';
import SingleNotification from './SingleNotification';
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover';

const NotificationPopOver = () => {
  const notifications = Notification;
  return (
    <div>
      <div className="flex flex-col items-center uppercase font-medium text-xs">
        <Popover>
          <PopoverTrigger>
            <Bell className="w-6 h-6" />
          </PopoverTrigger>
          <PopoverContent className="h-96 overflow-y-auto p-0">
            {notifications.map((n) => (
              <SingleNotification key={n.id} {...n} />
            ))}
          </PopoverContent>
        </Popover>
      </div>
    </div>
  );
};

export default NotificationPopOver;
