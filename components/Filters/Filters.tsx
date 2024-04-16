import { Button } from '../ui/button';
import FilterButton from './FilterButton/FilterButton';
import FilterInput from './FilterInput/FilterInput';

const Filters = () => {
  return (
    <div className='bg-[#F4F6F9] rounded-xl p-6 space-y-4'>
      <div className='flex items-center justify-between'>
        <div className='flex items-center gap-x-2'>
          <FilterButton label='Hotel' active />
          <FilterButton label='House' />
          <FilterButton label='Village' />
        </div>
        <p className='text-muted-foreground text-sm'>Today: Apr 16, Tue</p>
      </div>
      <div className='flex drop-shadow-2xl items-end w-full'>
        <FilterInput
          label='City or hotel'
          placeholder='Search'
          className='rounded-l-xl rounded-r-none'
        />
        <FilterInput
          label='Check-in'
          placeholder='Date'
          className='rounded-l-none rounded-r-none'
        />
        <FilterInput
          label='Check-out'
          placeholder='Date'
          className='rounded-l-none rounded-r-none'
        />
        <Button className='rounded-l-none w-full'>Search</Button>
      </div>
    </div>
  );
};

export default Filters;
