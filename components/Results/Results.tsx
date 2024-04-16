import { Heart, Star } from 'lucide-react';
import Image from 'next/image';
import { Button } from '../ui/button';
import Item from './Item/Item';

const Results = () => {
  return (
    <div className='bg-[#F4F6F9] rounded-xl p-6 space-y-4'>
      <Item image='/zurich.jpg' title='Zurich' price='$290' />
      <Item image='/zagreb.jpg' title='Zagreb' price='$198' />
      <Item image='/brooklyn.jpg' title='Brooklyn' price='$489' />
      <Item image='/berlin.jpg' title='Berlin' price='$299' />
    </div>
  );
};

export default Results;
