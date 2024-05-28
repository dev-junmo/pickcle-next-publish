import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { type NextPageWithLayout } from 'src/types/common';

interface Props {}

export const PortfolioList: NextPageWithLayout<Props> = () => {
  return (
    <div className='mb-[100px] mt-[20px] w-full'>
      <b className='text-[25px] text-[#fff] lg:text-[30px]'>포트폴리오 리스트</b>
      <div className='mt-[10px] flex items-start border-b border-t-[2px] border-[#fff] pb-[40px] pt-[45px]'>
        <div className='mr-[15px] w-[130px] lg:mr-[25px]'>
          <span className='text-[18px] font-[500] text-[#fff] lg:text-[20px]'>개인 URL주소</span>
        </div>
        <div>
          <Link href='#' className='text-[16px] font-[500] text-[#f97090] lg:text-[20px]'>
            http://pickcle.kr/portfolio/123456
          </Link>
          <p className='mt-[30px] text-[16px] font-[500] text-[#cccccc] lg:text-[20px]'>
            *나의 포트폴리오 리스트 URL 주소입니다.
          </p>
        </div>
      </div>
    </div>
  );
};
