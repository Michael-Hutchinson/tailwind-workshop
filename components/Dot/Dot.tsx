import { cn } from '@/lib/utils';
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';

interface DotProps {
  className: string;
}

const Dot = ({ className }: DotProps) => {
  return (
    <div className={cn('absolute', className)}>
      <Popover>
        <PopoverTrigger asChild>
          <div className='space-y-2 cursor-pointer hover:opacity-75 drop-shadow-md'>
            <div className='bg-slate-500/50 p-1 rounded-xl text-white text-sm text-center'>
              $300
            </div>
            <div className=' bg-slate-500/50 h-12 w-12 rounded-full flex flex-col items-center justify-between p-4'>
              <div className='h-full w-full bg-white rounded-full' />
            </div>
          </div>
        </PopoverTrigger>
        <PopoverContent>More details</PopoverContent>
      </Popover>
    </div>
  );
};

export default Dot;
