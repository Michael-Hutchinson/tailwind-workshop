import NavButton from '../NavButton/NavButton';
import { Map, ShoppingBag, Info, Settings } from 'lucide-react';

const Navigation = () => {
  return (
    <div className='flex gap-x-4'>
      <NavButton active icon={Map} />
      <NavButton icon={ShoppingBag} />
      <NavButton icon={Info} />
      <NavButton icon={Settings} />
    </div>
  );
};

export default Navigation;
