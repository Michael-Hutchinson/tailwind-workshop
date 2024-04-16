import { Button } from '@/components/ui/button';
import { Heart, Star } from 'lucide-react';
import Image from 'next/image';

interface ItemProps {
  title: string;
  price: string;
  image: string;
}

const Item = ({ title, price, image }: ItemProps) => {
  return (
    <div className='bg-white p-3 rounded-md drop-shadow-lg flex gap-x-3'>
      <Image
        src={image}
        alt={title}
        width={100}
        height={100}
        className='rounded-md'
      />
      <div className='flex flex-col w-full'>
        <div className='w-full'>
          <div className='flex items-center justify-between'>
            <p className='text-lg'>{title}</p>
            <Heart className='h-5 w-5' />
          </div>
          <div className='flex items-center gap-x-3'>
            <div className='flex items-center'>
              <Star className='h-4 w-4 mr-1 stroke-sky-400 fill-sky-400' />
              <p className='text-sm'>
                4.9 <span className='text-muted-foreground'>(75)</span>
              </p>
            </div>
            <p className='text-sm'>2.2 km</p>
          </div>
        </div>
        <div className='flex-1 flex flex-col justify-end'>
          <div className='flex items-center justify-between'>
            <p className='font-semibold text-xl'>{price}</p>
            <Button>Details</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item;
