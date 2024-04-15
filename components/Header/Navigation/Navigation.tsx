import { Info, Map, Settings, ShoppingBag } from 'lucide-react';

const Navigation = () => {
  return (
    <div className='flex gap-x-4'>
      <Map />
      <ShoppingBag />
      <Info />
      <Settings />
    </div>
  );
};

export default Navigation;
