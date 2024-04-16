import FilterButton from './FilterButton/FilterButton';

const Filters = () => {
  return (
    <div className='bg-[#F4F6F9] rounded-xl p-6'>
      <div className='flex items-center justify-between'>
        <div className='flex items-center gap-x-2'>
          <FilterButton label='Hotel' active />
          <FilterButton label='House' />
          <FilterButton label='Village' />
        </div>
        <p className='text-muted-foreground text-sm'>Today: Apr 16, Tue</p>
      </div>
    </div>
  );
};

export default Filters;
