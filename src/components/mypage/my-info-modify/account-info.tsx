import Image from 'next/image';
import { useState } from 'react';
import { type NextPageWithLayout } from 'src/types/common';

interface Props {}

export const AccountInfo: NextPageWithLayout<Props> = () => {
  return (
    <div className='mb-[100px] mt-[20px] w-full'>
      <b className='text-[25px] text-[#fff] lg:text-[30px]'>계좌정보</b>
      <div className='mt-[10px] flex items-center border-b border-t-[2px] border-[#fff] py-[25px]'>
        <div className='mr-[15px] w-[130px] shrink-0 lg:mr-[25px]'>
          <span className='text-[18px] font-[500] text-[#fff] lg:text-[20px]'>예금주</span>
        </div>
        <div className='w-full sm:w-[50%]'>
          <input type='text' className='h-[50px] w-full rounded-[5px] bg-[#fff] lg:h-[50px]' />
        </div>
      </div>
      <div className='mt-[10px] flex items-center border-b border-[#fff] py-[25px]'>
        <div className='mr-[15px] w-[130px] shrink-0 lg:mr-[25px]'>
          <span className='text-[18px] font-[500] text-[#fff] lg:text-[20px]'>입금 은행</span>
        </div>
        <div className='w-full sm:w-[50%]'>
          <select className='h-[50px] w-full rounded-[5px] bg-[url(/assets/icons/arrow-bottom-small.webp)] bg-[length:20px_20px] bg-[right_20px_top_15px] bg-no-repeat pl-[15px] text-[#000]'>
            <option key='09:00' value='09:00'>
              국민은행
            </option>
          </select>
        </div>
      </div>
      <div className='mt-[10px] flex items-center border-b border-[#fff] py-[25px]'>
        <div className='mr-[15px] w-[130px] shrink-0 lg:mr-[25px]'>
          <span className='text-[18px] font-[500] text-[#fff] lg:text-[20px]'>입금 계좌번호</span>
        </div>
        <div className='w-full sm:w-[50%]'>
          <input type='text' className='h-[50px] w-full rounded-[5px] bg-[#fff] lg:h-[50px]' />
        </div>
      </div>
    </div>
  );
};
