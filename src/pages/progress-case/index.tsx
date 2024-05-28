import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useSpring, animated } from 'react-spring';
import { CategoryTab } from 'src/components/category-filter/category-tab';
import { ProgressContents } from 'src/components/category-filter/progress-contents';
import { Layout } from 'src/components/layout';
import { type NextPageWithLayout } from 'src/types/common';

interface Props {}

const ProgressCase: NextPageWithLayout<Props> = () => {
  const [count, setCount] = useState(0);

  const animation = useSpring({
    from: { number: 0 },
    to: { number: 177000 },
    config: { duration: 3000 },
    onRest: () => {},
  });

  return (
    <div className='relative'>
      <div className='mt-[110px] flex h-[488px] flex-col items-center justify-center bg-[#001d2c] px-[30px]'>
        <b className='text-[30px] font-[500] text-[#fff] md:text-[40px]'>현재 실시간 콘텐츠 수</b>
        <b className='mb-[55px] mt-[30px] block text-[40px] font-bold text-[#f97090] md:text-[50px]'>
          <animated.span>
            {animation.number.interpolate(number =>
              number.toLocaleString(undefined, { maximumFractionDigits: 0 }),
            )}
          </animated.span>
        </b>
        <form className='relative w-full sm:w-auto'>
          <input
            className='h-[45px] w-full rounded-[20px] bg-[#fff] pl-[15px] text-[14px] font-[500] placeholder:text-[#c0c0c0] sm:w-[350px] md:h-[50px] md:w-[500px]'
            placeholder='다른 서포터들의 사례를 검색해보세요.'
          />
          <button className='absolute right-[15px] top-[5px]'>
            <Image
              src='/assets/icons/progress-search-icon.webp'
              alt='검색 아이콘'
              width={40}
              height={40}
              className='aspect-square h-[35px] w-[35px] object-cover md:h-[40px] md:w-[40px]'
            />
          </button>
        </form>
      </div>
      <div className='mx-auto w-full px-[30px] xl:w-[1040px] xl:px-0 2xl:w-[1420px]'>
        <CategoryTab />
        <ProgressContents />
      </div>
    </div>
  );
};

ProgressCase.getLayout = page => <Layout>{page}</Layout>;

export default ProgressCase;
