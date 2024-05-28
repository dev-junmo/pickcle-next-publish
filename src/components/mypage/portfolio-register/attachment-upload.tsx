import Image from 'next/image';
import { useState } from 'react';
import * as Switch from '@radix-ui/react-switch';
import { type NextPageWithLayout } from 'src/types/common';

interface Props {
  userType: string;
}

export const AttachmentUpload: NextPageWithLayout<Props> = ({ userType }) => {
  return (
    <div className='mt-[50px] w-full'>
      <div>
        <b className='mb-[15px] block text-[20px] font-[500] text-[#fff]'>링크</b>
        <div className='lg:flex lg:items-center lg:gap-[15px]'>
          <input
            className='h-[50px] w-full rounded-[5px] pl-[15px] placeholder:text-[#cccccc] lg:w-[645px]'
            placeholder='링크를 입력해주세요.'
          />
          <button className='mt-[20px] h-[50px] w-[130px] rounded-[10px] bg-[#f97090] text-[20px] font-bold lg:mt-0'>
            확인
          </button>
        </div>
        <p
          className={`my-[10px] text-[16px] font-[500] ${
            userType === 'reviewer' ? 'text-[#f97090]' : 'text-[#8586db]'
          }`}
        >
          ＊등록하시는 포트폴리오와 관련된 제작 콘텐츠 링크를 추가해 보세요.
        </p>
        <span className='text-[16px] font-[500] text-[#fff]'>https://blog.naver.com/ techb</span>
      </div>
      <div className='mt-[50px]'>
        <b className='mb-[15px] block text-[20px] font-[500] text-[#fff]'>파일 업로드</b>
        <button className='flex h-[50px] w-full items-center justify-center rounded-[5px] bg-[#c2c2f6] lg:w-[790px]'>
          <Image
            src='/assets/icons/file-plus-btn.webp'
            alt='플러스 아이콘'
            width={30}
            height={30}
          />
          <span className='ml-[10px] text-[18px] font-bold text-[#000] sm:text-[20px]'>
            첨부하기
          </span>
        </button>
        <p className='mt-[10px] text-[16px] font-[500] text-[#fff]'>
          ＊등록하시는 포트폴리오와 관련된 제작 콘텐츠 파일을 추가해 보세요.
        </p>
        <p
          className={`my-[5px] text-[16px] font-[500] ${
            userType === 'reviewer' ? 'text-[#f97090]' : 'text-[#8586db]'
          }`}
        >
          ＊파일첨부 시 업로드 된 파일을 회사는 가지고 있지 않으므로, 업로드 된 파일을 꼭 따로
          저장해 두시길 바랍니다.
        </p>
        <span className='text-[16px] font-[500] text-[#fff]'>Han_cosmetic.zip</span>
      </div>
    </div>
  );
};
