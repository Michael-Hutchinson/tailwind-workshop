import { Bell, Heart } from 'lucide-react';
import NavButton from '../NavButton/NavButton';

const Actions = () => {
  return (
    <div className='flex gap-x-4'>
      <NavButton icon={Heart} />
      <NavButton icon={Bell} />
      <div>User Avatar</div>
    </div>
  );
};

export default Actions;
