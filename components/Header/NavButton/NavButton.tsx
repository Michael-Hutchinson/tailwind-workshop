import { cn } from '@/lib/utils';
import { LucideIcon } from 'lucide-react';

interface NavButtonProps {
  active?: boolean;
  icon: LucideIcon;
}

const NavButton = ({ active, icon: Icon }: NavButtonProps) => {
  return (
    <button className={cn('p-2 px-3 rounded-lg', active && 'bg-sky-500/50')}>
      <Icon className='text-netural-800' />
    </button>
  );
};

export default NavButton;
