import Dot from '@/components/Dot/Dot';
import Filters from '@/components/Filters/Filters';
import Results from '@/components/Results/Results';
import Image from 'next/image';

export default function Home() {
  return (
    <div className='h-[calc(100%-4rem)] grid grid-cols-5 p-6 max-w-screen-xl mx-auto gap-4'>
      <div className='h-full col-span-3 space-y-4'>
        <Filters />
        <Results />
      </div>
      <div className='h-full col-span-2 rounded-xl relative overflow-hidden'>
        <Image fill alt='' src='/map.jpg' className='object-cover' />
        <Dot className='top-[30vh] left-[30vh]' />
        <Dot className='top-[20vh] left-[10vh]' />
        <Dot className='top-[10vh] right-[10vh]' />
      </div>
    </div>
  );
}
