import Image from 'next/image';
import { useState } from 'react';
import * as Switch from '@radix-ui/react-switch';
import { type NextPageWithLayout } from 'src/types/common';

interface Props {}

export const BusinessInfo: NextPageWithLayout<Props> = () => {
  return (
    <div className='mb-[100px] mt-[20px] w-full'>
      <b className='text-[25px] text-[#fff] lg:text-[30px]'>사업자정보</b>
      <div className='mt-[10px] items-start border-b border-t-[2px] border-[#fff] py-[35px] sm:flex'>
        <div className='mb-[10px] mr-[15px] w-[130px] shrink-0 pt-[10px] sm:mb-0 lg:mr-[25px]'>
          <span className='text-[18px] font-[500] text-[#fff] lg:text-[20px]'>사업자 등록증</span>
        </div>
        <div className='xl:pr-[200px]'>
          <div className='flex'>
            <input
              type='file'
              className='mr-[20px] h-[40px] w-full rounded-[5px] bg-[#fff] xl:h-[50px] xl:w-[500px]'
            />
            <button className='h-[40px] w-[120px] rounded-[5px] bg-[#8586db] text-[16px] font-bold text-[#fff] xl:h-[50px] xl:w-[150px] xl:rounded-[10px] xl:text-[20px]'>
              첨부하기
            </button>
          </div>
          <p className='mt-[15px] text-[14px] font-bold text-[#fff] xl:text-[16px]'>
            사업자 인증 완료가 되지 않을 시 서비스 이용이 제한되오니, 사업자 등록증을 꼭 첨부하여
            주시길 바랍니다.{' '}
            <span className='text-[#8586db] underline'>사업자 승인은 1일에서 최대 5일 소요</span>{' '}
            될예정이며, <span className='text-[#8586db]'>인증 완료시 서비스 이용이 가능</span>{' '}
            합니다.
          </p>
          <p className='mt-[15px] text-[14px] font-bold text-[#fff] xl:text-[16px]'>
            *사업자 등록증 파일첨부가 어려우신 경우 고객센터 1:1문의하기에 남겨주시길 바랍니다.
          </p>
        </div>
      </div>
      <div className='flex items-center border-b border-[#fff] py-[35px]'>
        <div className='mr-[15px] w-[130px] lg:mr-[25px]'>
          <span className='text-[18px] font-[500] text-[#fff] lg:text-[20px]'>대표자 이름</span>
        </div>
        <div>
          <b className='text-[18px] font-[500] text-[#8586db] lg:text-[20px]'>이성열</b>
        </div>
      </div>
      <div className='flex items-center border-b border-[#fff] py-[35px]'>
        <div className='mr-[15px] w-[130px] lg:mr-[25px]'>
          <span className='text-[18px] font-[500] text-[#fff] lg:text-[20px]'>상호명</span>
        </div>
        <div>
          <b className='text-[18px] font-[500] text-[#8586db] lg:text-[20px]'>
            (주)엠비케이 코퍼레이션
          </b>
        </div>
      </div>
      <div className='flex items-center border-b border-[#fff] py-[35px]'>
        <div className='mr-[15px] w-[130px] lg:mr-[25px]'>
          <span className='text-[18px] font-[500] text-[#fff] lg:text-[20px]'>사업자 번호</span>
        </div>
        <div>
          <b className='text-[18px] font-[500] text-[#8586db] lg:text-[20px]'>490-86-00546</b>
        </div>
      </div>
      <div className='items-center border-b border-[#fff] py-[35px] sm:flex'>
        <div className='mb-[10px] mr-[15px] w-[130px] shrink-0 sm:mb-0 lg:mr-[25px]'>
          <span className='text-[18px] font-[500] text-[#fff] lg:text-[20px]'>연락 가능 시간</span>
        </div>
        <div className=''>
          <div className='w-full items-center gap-[20px] sm:flex'>
            <div className='flex w-full flex-col sm:flex-row sm:items-center'>
              <select className='h-[50px] w-[158px] rounded-[5px] text-[#000] md:mr-[10px]'>
                <option key='09:00' value='09:00'>
                  09:00
                </option>
              </select>
              ~
              <select className='h-[50px] w-[158px] rounded-[5px] text-[#000] md:ml-[10px]'>
                <option key='18:00' value='18:00'>
                  18:00
                </option>
              </select>
            </div>
            <button className='mt-[20px] h-[40px] w-[120px] shrink-0 rounded-[5px] bg-[#8586db] text-[18px] leading-[40px] sm:mt-0 sm:h-[50px] sm:w-[150px] sm:rounded-[10px] sm:leading-[50px] lg:text-[20px]'>
              변경하기
            </button>
          </div>
          <p className='mt-[10px] text-[13px] text-[#fff] lg:text-[15px]'>
            * 메신저에서 보여지는 연락가능시간입니다.
          </p>
        </div>
      </div>
      <div className='items-center border-b border-[#fff] py-[35px] sm:flex'>
        <div className='mb-[10px] mr-[15px] w-[130px] shrink-0 sm:mb-0 lg:mr-[25px]'>
          <span className='text-[18px] font-[500] text-[#fff] lg:text-[20px]'>주소</span>
        </div>
        <div className='w-full'>
          <div className='flex gap-[10px] lg:gap-[15px]'>
            <input
              type='text'
              className='h-[40px] w-[128px] rounded-[5px] bg-[#f2f2f2] md:w-[158px] lg:h-[50px] lg:w-[158px]'
            />
            <button className='h-[40px] w-[123px] rounded-[5px] bg-[#8586db] text-[18px] font-bold leading-[40px] lg:h-[50px] lg:w-[150px] lg:rounded-[10px] lg:text-[20px]'>
              주소 검색
            </button>
          </div>
          <div className='mt-[10px] flex w-full gap-[10px] lg:mt-[20px] lg:gap-[15px]'>
            <input
              type='text'
              className='h-[40px] w-[50%] rounded-[5px] bg-[#f2f2f2] lg:h-[50px]'
            />
            <input type='text' className='h-[40px] w-full rounded-[5px] bg-[#fff] lg:h-[50px]' />
          </div>
        </div>
      </div>
    </div>
  );
};
