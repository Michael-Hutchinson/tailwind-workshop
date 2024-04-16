import { cn } from '@/lib/utils';

interface FilterButtonProps {
  label: string;
  active?: boolean;
}

const FilterButton = ({ label, active }: FilterButtonProps) => {
  return (
    <button
      className={cn(
        active && 'bg-sky-500/40 text-neutral-800',
        'p-2 px-3 rounded-xl text-muted-foreground'
      )}
    >
      {label}
    </button>
  );
};

export default FilterButton;
