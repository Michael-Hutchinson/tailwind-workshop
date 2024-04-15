import { Bell, Heart } from 'lucide-react';
import NavButton from '../NavButton/NavButton';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const Actions = () => {
  return (
    <div className='flex gap-x-4'>
      <NavButton icon={Heart} />
      <NavButton icon={Bell} />
      <Avatar>
        <AvatarImage src='' />
        <AvatarFallback className='bg-sky-500/50'>MH</AvatarFallback>
      </Avatar>
    </div>
  );
};

export default Actions;
