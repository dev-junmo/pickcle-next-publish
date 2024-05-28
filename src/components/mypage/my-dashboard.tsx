import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { type NextPageWithLayout } from 'src/types/common';

interface Props {
  userType: string;
}

const userTypeTab = ['서포터 활동', '메이커 활동'];
const userTypeAdTab = ['서포터', '메이커'];

export const MyDashboard: NextPageWithLayout<Props> = ({ userType }) => {
  const [currentTab, setCurrentTab] = useState(0);

  return (
    <div className='mt-[20px] w-full rounded-[30px] bg-[#fff] p-[20px] 2xl:px-[60px] 2xl:py-[40px]'>
      <div className='mb-[20px]'>
        <b className='text-[25px] text-[#2d2d2d] 2xl:text-[30px]'>대시보드</b>
      </div>
      <div className='md:flex md:items-center md:justify-between'>
        <ul className='mb-[20px] inline-flex border-b border-[#707070]'>
          {userTypeTab.map((v, i) => (
            <li
              key={i}
              className={`relative mr-[5px] cursor-pointer py-2.5 text-[20px] font-bold text-[#2d2d2d] before:absolute before:bottom-[-4px] before:left-0 before:h-[6px] before:w-full
              ${userType === 'reviewer' ? 'before:bg-[#f97090]' : 'before:bg-[#8586db]'} ${
                currentTab === i ? 'before:block' : 'before:hidden'
              } first:after:ml-[5px] first:after:inline-block first:after:content-['/'] last:mr-0`}
              onClick={() => {
                setCurrentTab(i);
              }}
            >
              {v}
            </li>
          ))}
        </ul>
        <Link
          href={userType === 'reveiwer' ? '/reviewer/dashboard' : '/advertiser/dashboard'}
          className={`block h-[40px] w-[158px] rounded-[10px] text-center text-[18px] font-bold leading-[40px] text-[#fff] sm:h-[50px] sm:w-[188px] sm:text-[20px] sm:leading-[50px] ${
            userType === 'reviewer' ? 'bg-[#f97090]' : 'bg-[#8586db]'
          }`}
        >
          전체보기
        </Link>
      </div>
      <ul className='mt-[20px] flex border border-[#dbdbdb] py-[15px]'>
        <li className='w-[50%] border-r border-r-[#d8d8d8] text-center'>
          <b className='mb-[15px] block text-[25px] text-[#8586db] 2xl:text-[30px]'>2</b>
          <span className='text-[18px] font-bold text-[#2d2d2d] 2xl:text-[20px]'>거래취소</span>
        </li>
        <li className='w-[50%] text-center'>
          <b className='mb-[15px] block text-[25px] text-[#f97090] 2xl:text-[30px]'>2</b>
          <span className='text-[18px] font-bold text-[#2d2d2d] 2xl:text-[20px]'>거래완료</span>
        </li>
      </ul>
    </div>
  );
};
