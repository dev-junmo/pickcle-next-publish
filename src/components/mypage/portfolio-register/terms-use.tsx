import Image from 'next/image';
import { useState } from 'react';
import * as Switch from '@radix-ui/react-switch';
import { type NextPageWithLayout } from 'src/types/common';

interface Props {
  userType: string;
}

export const TermsUse: NextPageWithLayout<Props> = ({ userType }) => {
  return (
    <div className='mt-[100px] w-full'>
      <b className='mb-[15px] block text-[20px] font-[500] text-[#fff]'>
        서비스 이용 동의{' '}
        <span
          className={`text-[20px] font-[500] ${
            userType === 'reviewer' ? 'text-[#f97090]' : 'text-[#8586db]'
          }`}
        >
          ＊
        </span>
      </b>
      <div className='mt-[20px] rounded-[10px] border border-[#fff] px-[14px] py-[28px] lg:w-[790px]'>
        <ul>
          <li className='mb-[24px] flex items-center'>
            <label htmlFor='all-agreement' className='flex items-center'>
              <input type='checkbox' id='all-agreement' className='peer hidden' />
              <span className='mr-[13px] inline-block h-[24px] w-[24px] rounded-[2px] border border-[#c0c0c0] bg-center bg-no-repeat peer-checked:bg-[url(/assets/icons/check-icon.webp)] peer-checked:bg-[length:13px_13px]' />
              <span className='text-[18px] font-bold text-[#fff]'>
                아래 내용에 전체 동의 합니다.
              </span>
            </label>
          </li>
          <li className='mb-[13px] flex items-center'>
            <label htmlFor='terms-agreement' className='flex items-center'>
              <input type='checkbox' id='terms-agreement' className='peer hidden' />
              <span className='mr-[13px] inline-block h-[20px] w-[20px] shrink-0 rounded-[2px] border border-[#c0c0c0] bg-center bg-no-repeat peer-checked:bg-[url(/assets/icons/check-icon.webp)] peer-checked:bg-[length:13px_13px]' />
              <span className='text-[16px] text-[#fff] sm:w-auto'>
                {userType === 'reviewer' ? '리뷰어님' : '브랜드'}의 포트폴리오는 거래를 위해, 회사
                및 광고주가 외부로 부터 광고 및 활용 되는것에 동의 합니다.
              </span>
            </label>
          </li>
          <li className='flex items-center'>
            <label htmlFor='marketing-agreement' className='flex items-center'>
              <input type='checkbox' id='marketing-agreement' className='peer hidden' />
              <span className='mr-[13px] inline-block h-[20px] w-[20px] shrink-0 rounded-[2px] border border-[#c0c0c0] bg-center bg-no-repeat peer-checked:bg-[url(/assets/icons/check-icon.webp)] peer-checked:bg-[length:13px_13px]' />
              <span className='text-[16px] text-[#fff] sm:w-auto'>
                서비스 거래 취소 / 지급 / 환불 규정안내 등 확인 및 동의 합니다.
              </span>
            </label>
          </li>
        </ul>
      </div>
    </div>
  );
};
