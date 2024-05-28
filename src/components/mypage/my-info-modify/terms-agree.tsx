import Image from 'next/image';
import { useState } from 'react';
import { type NextPageWithLayout } from 'src/types/common';

interface Props {
  setShowWithdrawalPopup: (open: boolean) => void;
}

export const TermsAgree: NextPageWithLayout<Props> = ({ setShowWithdrawalPopup }) => {
  return (
    <div className='mb-[100px] mt-[20px] w-full after:clear-both after:block'>
      <b className='text-[25px] text-[#fff] lg:text-[30px]'>전체 약관 및 수신 동의</b>
      <div className='mt-[10px] border-y border-[#fff] pb-[30px] pt-[35px]'>
        <ul>
          <li className='mb-[24px] flex items-center'>
            <label htmlFor='all-agreement' className='flex items-center md:items-start'>
              <input type='checkbox' id='all-agreement' className='peer hidden' />
              <span className='mr-[13px] inline-block h-[20px] w-[20px] shrink-0 rounded-[2px] border border-[#c0c0c0] bg-center bg-no-repeat peer-checked:bg-[url(/assets/icons/check-icon.webp)] peer-checked:bg-[length:13px_13px] md:h-[25px] md:w-[25px]' />
              <span className='text-[16px] font-bold text-[#fff] lg:text-[20px]'>
                약관 전체 동의 하기
                <br />
                <span className='font-[500]'>
                  서비스 이용약관, 개인정보 수집 및 이용, 개인정보 제 3자 제공 약관에 모두 동의
                  합니다.
                </span>
              </span>
            </label>
          </li>
          <li className='mb-[10px] flex items-center'>
            <label htmlFor='terms-agreement' className='flex items-center'>
              <input type='checkbox' id='terms-agreement' className='peer hidden' />
              <span className='mr-[13px] inline-block h-[20px] w-[20px] shrink-0 rounded-[2px] border border-[#c0c0c0] bg-center bg-no-repeat peer-checked:bg-[url(/assets/icons/check-icon.webp)] peer-checked:bg-[length:13px_13px] md:h-[25px] md:w-[25px]' />
              <span className='w-[250px] text-[16px] text-[#fff] sm:w-auto lg:text-[20px]'>
                이메일 / SNS / 카카오 알림톡 등을 통한 정보 수신에 동의 합니다.
              </span>
            </label>
          </li>
        </ul>
      </div>
      <button
        className='float-right mt-[10px] h-[31px] w-[78px] rounded-[10px] bg-[#ccc] text-[14px] font-bold text-[#2d2d2d]'
        onClick={() => setShowWithdrawalPopup(true)}
      >
        회원탈퇴
      </button>
    </div>
  );
};
