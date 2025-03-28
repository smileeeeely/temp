import Link from 'next/link';
import { HOME } from '@/constants/pagePath';
import MoviesSearch from '../layout/MoviesSearch';

const Header = () => {
  return (
    <div className='mx-auto flex max-w-[1200px] gap-10 p-6 max-md:gap-6'>
      <Link href={HOME}>
        <div className='flex items-center justify-center break-keep rounded-md border border-[#e6354f] px-8 py-4'>
          로고
        </div>
      </Link>
      <MoviesSearch />
    </div>
  );
};

export default Header;
