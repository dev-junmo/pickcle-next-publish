import Image from 'next/image';
import { useEffect, useState } from 'react';
import { proposalCategoryStore, userTypeStore } from 'src/status/store';
import * as Slider from '@radix-ui/react-slider';
import Link from 'next/link';
import { type NextPageWithLayout } from 'src/types/common';
import { maker, supporter } from '../../mockData';

interface Props {}

const snsFilter = ['전체', '유튜브', '틱톡', '인스타', '블로그', '기타'];

export const ProgressContents: NextPageWithLayout<Props> = () => {
  const [items, setItems] = useState<any | []>([]);
  const [page, setPage] = useState(1);

  const [filterOpen, setFilterOpen] = useState(false);

  const [makerUserType, setMakerUserType] = useState('');

  const [snsCategory, setSnsCategory] = useState(false);

  const onScroll = () => {
    const scrollTop = document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight;
    const clientHeight = document.documentElement.clientHeight;

    if (scrollTop + clientHeight + 300 >= scrollHeight) {
      setPage(page + 1);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', onScroll);
    // console.log(items);
    return () => window.removeEventListener('scroll', onScroll);
  }, [items]);

  return (
    <div className='mb-[200px]'>
      <div className='relative flex items-center justify-end border-b border-[#fff] pb-[10px]'>
        <span
          className='inline-block cursor-pointer bg-[url(/assets/icons/filter-icon.webp)] bg-[length:20px_20px] bg-[right_bottom] bg-no-repeat pr-[25px] text-base font-bold text-[#fff]'
          onClick={() => setFilterOpen(true)}
        >
          필터
        </span>
        {filterOpen && (
          <div className='absolute right-[-40px] top-[40px] w-[260px] rounded-[20px] bg-[#fff] px-[19px] py-[15px] before:absolute before:right-[62px] before:top-[-20px] before:h-[0px] before:w-[0px] before:border-b-[20px] before:border-l-[10px] before:border-r-[10px] before:border-b-[#fff] before:border-l-[transparent] before:border-r-[transparent]'>
            <button
              className='absolute right-[20px] top-[20px]'
              onClick={() => setFilterOpen(false)}
            >
              <Image
                src='/assets/icons/filter-popup-close.webp'
                alt='닫기 버튼'
                width={14}
                height={14}
              />
            </button>
            <div className='mt-[24px]'>
              <b>협찬방식</b>
              <ul className='mt-[15px] flex flex-wrap gap-x-[43px] gap-y-[5px]'>
                <li>
                  <label htmlFor='sponsored-one' className='flex items-center'>
                    <input type='checkbox' id='sponsored-one' className='peer hidden' />
                    <span className='mr-[10px] inline-block h-[20px] w-[20px] rounded-[2px] border border-[#c0c0c0] bg-center bg-no-repeat peer-checked:bg-[url(/assets/icons/check-icon.webp)] peer-checked:bg-[length:13px_13px]' />
                    <span className='text-[14px]'>제품협찬</span>
                  </label>
                </li>
                <li>
                  <label htmlFor='sponsored-two' className='flex items-center'>
                    <input type='checkbox' id='sponsored-two' className='peer hidden' />
                    <span className='mr-[10px] inline-block h-[20px] w-[20px] rounded-[2px] border border-[#c0c0c0] bg-center bg-no-repeat peer-checked:bg-[url(/assets/icons/check-icon.webp)] peer-checked:bg-[length:13px_13px]' />
                    <span className='text-[14px]'>방문협찬</span>
                  </label>
                </li>
                <li>
                  <label htmlFor='sponsored-three' className='flex items-center'>
                    <input type='checkbox' id='sponsored-three' className='peer hidden' />
                    <span className='mr-[10px] inline-block h-[20px] w-[20px] rounded-[2px] border border-[#c0c0c0] bg-center bg-no-repeat peer-checked:bg-[url(/assets/icons/check-icon.webp)] peer-checked:bg-[length:13px_13px]' />
                    <span className='text-[14px]'>NO협찬</span>
                  </label>
                </li>
              </ul>
            </div>
            <button
              className='mx-auto mt-[13px] block h-[24px] w-[73px] rounded-[5px] bg-[#868686] text-[12px] text-[#fff]'
              onClick={() => setFilterOpen(false)}
            >
              검색하기
            </button>
          </div>
        )}
      </div>
      <div className='relative mb-[50px]'>
        <button
          className='mt-[20px] flex h-[42px] w-[140px] items-center justify-between rounded-[5px] border border-[#fff] bg-[#ffffff86] px-[5px] text-left text-[20px] font-[500] text-[#fff]'
          onClick={() => setSnsCategory(prev => !prev)}
        >
          전체
          <Image src='/assets/icons/maker-select-arrow.webp' alt='화살표' width={32} height={32} />
        </button>
        {snsCategory && (
          <ul className='absolute left-0 top-[43px] mt-[5px] w-[140px] rounded-[7px] border border-[#fff] bg-[#ffffff86] pb-[10px] pl-[5px]'>
            {snsFilter.map((v, i) => (
              <li key={i} className='mt-[10px] text-[20px] font-[500] text-[#fff]'>
                {v}
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className='flex flex-wrap justify-center gap-[40px]'>
        <ul className='w-[320px]'>
          {supporter.reviewerList.map((c: any) => (
            <li key={c.id} className='group mb-[50px] w-[320px]'>
              <Link href={c.url}>
                <Image
                  src={c.img}
                  alt='리뷰어 썸네일'
                  width={320}
                  height={260}
                  className='h-[320px] rounded-[10px] object-cover group-[&:nth-child(3)]:h-[200px] group-[&:nth-child(even)]:h-[480px]'
                />
                <div className='mt-[20px] flex items-center gap-[10px]'>
                  <div className='h-[40px] w-[40px] shrink-0 rounded-full bg-[#fff]' />
                  <p className='mt-[5px] line-clamp-2 text-ellipsis break-all text-base font-bold text-[#fff]'>
                    {c.introduce}
                  </p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
        <ul className='w-[320px]'>
          {supporter.reviewerList.map((c: any) => (
            <li key={c.id} className='group mb-[50px] w-[320px]'>
              <Link href={c.url}>
                <Image
                  src={c.img}
                  alt='리뷰어 썸네일'
                  width={320}
                  height={260}
                  className='h-[320px] rounded-[10px] object-cover group-[&:nth-child(3)]:h-[200px] group-[&:nth-child(odd)]:h-[480px]'
                />
                <div className='mt-[20px] flex items-center gap-[10px]'>
                  <div className='h-[40px] w-[40px] shrink-0 rounded-full bg-[#fff]' />
                  <p className='mt-[5px] line-clamp-2 text-ellipsis break-all text-base font-bold text-[#fff]'>
                    {c.introduce}
                  </p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
        <ul className='w-[320px]'>
          {supporter.reviewerList.map((c: any) => (
            <li key={c.id} className='group mb-[50px] w-[320px]'>
              <Link href={c.url}>
                <Image
                  src={c.img}
                  alt='리뷰어 썸네일'
                  width={320}
                  height={260}
                  className='h-[200px] rounded-[10px] object-cover group-[&:nth-child(3)]:h-[200px] group-[&:nth-child(even)]:h-[480px]'
                />
                <div className='mt-[20px] flex items-center gap-[10px]'>
                  <div className='h-[40px] w-[40px] shrink-0 rounded-full bg-[#fff]' />
                  <p className='mt-[5px] line-clamp-2 text-ellipsis break-all text-base font-bold text-[#fff]'>
                    {c.introduce}
                  </p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
        <ul className='hidden w-[320px] 2xl:block'>
          {supporter.reviewerList.map((c: any) => (
            <li key={c.id} className='group mb-[50px] w-[320px]'>
              <Link href={c.url}>
                <Image
                  src={c.img}
                  alt='리뷰어 썸네일'
                  width={320}
                  height={260}
                  className='h-[320px] rounded-[10px] object-cover group-[&:nth-child(3)]:h-[200px] group-[&:nth-child(3n)]:h-[480px]'
                />
                <div className='mt-[20px] flex items-center gap-[10px]'>
                  <div className='h-[40px] w-[40px] shrink-0 rounded-full bg-[#fff]' />
                  <p className='mt-[5px] line-clamp-2 text-ellipsis break-all text-base font-bold text-[#fff]'>
                    {c.introduce}
                  </p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
