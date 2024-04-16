import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';

interface FilterInputProps {
  label: string;
  placeholder: string;
  className?: string;
}

const FilterInput = ({ label, placeholder, className }: FilterInputProps) => {
  return (
    <div className='space-y-1 w-full'>
      <label className='text-xs text-muted-foreground'>{label}</label>
      <Input
        placeholder={placeholder}
        className={cn('border-0 border-r', className)}
      />
    </div>
  );
};

export default FilterInput;
