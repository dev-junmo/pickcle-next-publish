import Image from 'next/image';
import { useState } from 'react';
import * as Switch from '@radix-ui/react-switch';
import { type NextPageWithLayout } from 'src/types/common';

interface Props {
  userType: string;
}

export const BasicInfo: NextPageWithLayout<Props> = ({ userType }) => {
  return (
    <div className='mb-[100px] mt-[20px] w-full'>
      <b className='text-[25px] text-[#fff] lg:text-[30px]'>기본정보</b>
      <div className='mt-[10px] flex items-center border-b border-t-[2px] border-[#fff] py-[35px]'>
        <div className='mr-[15px] w-[130px] lg:mr-[25px]'>
          <span className='text-[18px] font-[500] text-[#fff] lg:text-[20px]'>이메일(아이디)</span>
        </div>
        <div>
          <b className='text-[18px] font-[500] text-[#f97090] lg:text-[20px]'>droserna@gmail.com</b>
        </div>
      </div>
      <div className='flex items-center border-b border-[#fff] py-[35px]'>
        <div className='mr-[15px] w-[130px] lg:mr-[25px]'>
          <span className='text-[18px] font-[500] text-[#fff] lg:text-[20px]'>
            {userType === 'reviewer' ? '이름' : '브랜드명'}
          </span>
        </div>
        <div>
          <b
            className={`text-[18px] font-[500] lg:text-[20px] ${
              userType === 'reviewer' ? 'text-[#f97090]' : 'text-[#8586db]'
            }`}
          >
            {userType === 'reviewer' ? '이유나' : '몽벨'}
          </b>
        </div>
      </div>
      {userType === 'reviewer' && (
        <div className='flex items-center border-b border-[#fff] py-[35px]'>
          <div className='mr-[15px] w-[130px] lg:mr-[25px]'>
            <span className='text-[18px] font-[500] text-[#fff] lg:text-[20px]'>생년월일</span>
          </div>
          <div>
            <b className='text-[18px] font-[500] text-[#f97090] lg:text-[20px]'>1998.09.27</b>
          </div>
        </div>
      )}
      <div className='items-start border-b border-[#fff] pb-[16px] pt-[35px] sm:flex'>
        <div className='mb-[10px] mr-[15px] w-[130px] shrink-0 sm:mb-0 lg:mr-[25px]'>
          <span className='text-[18px] font-[500] text-[#fff] lg:text-[20px]'>휴대폰 번호</span>
        </div>
        <div className='w-full flex-wrap md:flex md:gap-[30px] lg:pr-[50px]'>
          <div className=''>
            <input
              type='text'
              className='h-[40px] w-full rounded-[5px] bg-[#fff] md:w-[380px] lg:h-[50px] lg:w-[500px]'
            />
            <p className='mt-[5px] text-[13px] font-[500] text-[#fff] lg:text-[15px]'>
              * 휴대폰 번호를 공개로 하시는 경우 메세지 보내는 곳에서 보여집니다.
            </p>
          </div>
          <div className='items-center gap-[30px] sm:flex md:items-start md:gap-[20px] lg:gap-[40px]'>
            <button
              className={`mt-[10px] h-[40px] w-[123px] shrink-0 rounded-[5px] text-[18px] leading-[40px] text-[#fff] sm:mt-0 lg:h-[50px] lg:w-[150px] lg:rounded-[10px] lg:text-[20px] ${
                userType === 'reviewer' ? 'bg-[#f97090]' : 'bg-[#8586db]'
              }`}
            >
              변경하기
            </button>
            <div className='mt-[10px] shrink-0 cursor-pointer sm:mt-0'>
              <span className='text-[14px] text-[#fff] lg:text-base'>공개 | 비공개</span>
              <Switch.Root
                id='airplane-mode'
                className={`relative mt-[5px] block h-[30px] w-[64px] cursor-pointer rounded-full outline-none data-[state=checked]:bg-[#ccc] sm:mx-auto ${
                  userType === 'reviewer' ? 'bg-[#8586db]' : 'bg-[#f97090]'
                }`}
              >
                <Switch.Thumb className='block h-[30px] w-[30px] translate-x-[33px] rounded-full bg-white transition-transform duration-100 will-change-transform data-[state=checked]:translate-x-0' />
              </Switch.Root>
            </div>
          </div>
        </div>
      </div>
      {userType === 'reviewer' && (
        <>
          <div className='flex items-center border-b border-[#fff] py-[25px]'>
            <div className='mr-[15px] w-[130px] shrink-0 lg:mr-[25px]'>
              <span className='text-[18px] font-[500] text-[#fff] lg:text-[20px]'>닉네임</span>
            </div>
            <div className='w-full gap-[30px] md:flex md:pr-[270px]'>
              <div className=''>
                <input
                  type='text'
                  className='h-[40px] w-full rounded-[5px] bg-[#fff] md:w-[380px] lg:h-[50px] lg:w-[500px]'
                />
              </div>
              <div className='mt-[10px] flex items-center md:mt-0'>
                <button className='h-[40px] w-[123px] rounded-[5px] bg-[#f97090] text-[18px] leading-[40px] text-[#fff] lg:h-[50px] lg:w-[150px] lg:rounded-[10px] lg:text-[20px]'>
                  변경하기
                </button>
              </div>
            </div>
          </div>
          <div className='flex items-center border-b border-[#fff] py-[25px]'>
            <div className='mr-[15px] w-[130px] lg:mr-[25px]'>
              <span className='text-[18px] font-[500] text-[#fff] lg:text-[20px]'>성별</span>
            </div>
            <div className='flex gap-[30px]'>
              <div>
                <label htmlFor='man-radio' className='relative flex items-center'>
                  <input
                    defaultChecked
                    type='radio'
                    id='man-radio'
                    className='peer hidden'
                    name='gender-radio'
                    value='남성'
                  />
                  <span className='relative mr-[10px] inline-block h-[20px] w-[20px] shrink-0 rounded-full bg-[#fff] p-[5px] before:hidden before:h-[10px] before:w-[10px] before:rounded-full before:bg-[#2d2d2d] peer-checked:before:block' />
                  <span className='text-[20px] font-[500] text-[#fff] lg:text-[20px]'>남성</span>
                </label>
              </div>
              <div>
                <label htmlFor='woman-radio' className='relative flex items-center'>
                  <input
                    defaultChecked
                    type='radio'
                    id='woman-radio'
                    className='peer hidden'
                    name='gender-radio'
                    value='여성'
                  />
                  <span className='relative mr-[10px] inline-block h-[20px] w-[20px] shrink-0 rounded-full bg-[#fff] p-[5px] before:hidden before:h-[10px] before:w-[10px] before:rounded-full before:bg-[#2d2d2d] peer-checked:before:block' />
                  <span className='text-[20px] font-[500] text-[#fff] lg:text-[20px]'>여성</span>
                </label>
              </div>
            </div>
          </div>
          <div className='flex items-start border-b border-[#fff] py-[25px]'>
            <div className='mr-[15px] w-[130px] shrink-0 lg:mr-[25px]'>
              <span className='mt-[10px] block text-[18px] font-[500] text-[#fff] lg:text-[20px]'>
                연락 가능 시간
              </span>
            </div>
            <div className=''>
              <div className='w-full items-center gap-[20px] md:flex'>
                <div className='w-full items-center gap-[10px] md:flex'>
                  <select className='block h-[40px] w-full rounded-[5px] pl-[15px] text-[#000] md:w-[158px] lg:h-[50px]'>
                    <option key='09:00' value='09:00'>
                      09:00
                    </option>
                  </select>
                  <span className='block text-center'>~</span>
                  <select className='block h-[40px] w-full rounded-[5px] pl-[15px] text-[#000] md:w-[158px] lg:h-[50px]'>
                    <option key='18:00' value='18:00'>
                      18:00
                    </option>
                  </select>
                </div>
                <button className='mt-[20px] h-[40px] w-[123px] shrink-0 rounded-[5px] bg-[#f97090] text-[18px] leading-[40px] text-[#fff] md:mt-0 lg:h-[50px] lg:w-[150px] lg:rounded-[10px] lg:text-[20px]'>
                  변경하기
                </button>
              </div>
              <p className='mt-[10px] text-[13px] text-[#fff] lg:text-[15px]'>
                * 메신저에서 보여지는 연락가능시간입니다.
              </p>
            </div>
          </div>
          <div className='flex items-center border-b border-[#fff] py-[25px] md:pb-[35px] md:pt-[25px]'>
            <div className='mr-[15px] w-[130px] shrink-0 lg:mr-[25px]'>
              <span className='text-[18px] font-[500] text-[#fff] lg:text-[20px]'>주소</span>
            </div>
            <div className='w-full'>
              <div className='flex gap-[10px] lg:gap-[15px]'>
                <input
                  type='text'
                  className='h-[40px] w-[128px] rounded-[5px] bg-[#f2f2f2] md:w-[158px] lg:h-[50px] lg:w-[158px]'
                />
                <button className='h-[40px] w-[123px] rounded-[5px] bg-[#f97090] text-[18px] font-bold leading-[40px] text-[#fff] lg:h-[50px] lg:w-[150px] lg:rounded-[10px] lg:text-[20px] lg:leading-[50px]'>
                  주소 검색
                </button>
              </div>
              <div className='mt-[10px] flex w-full gap-[10px] lg:mt-[20px] lg:gap-[15px]'>
                <input
                  type='text'
                  className='h-[40px] w-[50%] rounded-[5px] bg-[#f2f2f2] lg:h-[50px]'
                />
                <input
                  type='text'
                  className='h-[40px] w-[50%] rounded-[5px] bg-[#fff] lg:h-[50px]'
                />
              </div>
            </div>
          </div>
        </>
      )}
      <p className='mt-[10px] text-[14px] text-[#f97090] lg:text-[16px]'>
        *이메일 변경을 원하실 경우 고객센터로 변경 요청 부탁 드립니다.
      </p>
    </div>
  );
};
