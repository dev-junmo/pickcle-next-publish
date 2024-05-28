import { useState, useEffect } from 'react';
import { Layout } from 'src/components/layout';
import { type NextPageWithLayout } from 'src/types/common';
import * as Accordion from '@radix-ui/react-accordion';
import Image from 'next/image';

interface Props {}

const Notification: NextPageWithLayout<Props> = () => {
  return (
    <div className='flex flex-col items-center justify-center'>
      <div className='mx-auto w-full px-[30px] pt-[100px] xl:w-[1040px] xl:px-0 2xl:w-[1420px]'>
        <b className='text-[25px] text-white'>알림</b>
        <div className='border-b-[2px] border-[#fff] py-[50px] text-[20px] text-[#fff]'>
          <b className='text-[#bebeff]'>All (10) /</b> <span className='text-[18px]'>NEW(10)</span>
        </div>
        <div className='mb-[150px] mt-[50px]'>
          <div className='mt-[50px]'>
            <b className='text-[20px] font-bold text-[#fff]'>2022.09.01</b>
            <ul className='mt-[50px]'>
              <li className='mb-[30px] flex bg-[#fff] bg-opacity-20 px-[20px] pb-[20px] pt-[8px]'>
                <Image
                  src='/assets/icons/notification-answer-icon.webp'
                  alt='1:1문의 답변'
                  width={60}
                  height={60}
                  className='mt-[13px] aspect-square h-[60px]'
                />
                <div className='ml-[20px]'>
                  <b className='text-[18px] text-[#f97090] sm:text-[20px]'>1:1 문의 답변</b>{' '}
                  <span className='align-bottom text-[14px] font-light text-[#fff] sm:text-base'>
                    19:20
                  </span>
                  <p className='mt-[5px] text-[16px] font-normal text-[#fff] sm:text-[18px]'>
                    1:1 문의 답변에 관리자의 답변이 올라왔습니다.
                  </p>
                </div>
              </li>
              <li className='mb-[30px] flex bg-[#fff] bg-opacity-20 px-[20px] pb-[20px] pt-[8px]'>
                <Image
                  src='/assets/icons/notification-rating-icon.webp'
                  alt='1:1문의 답변'
                  width={60}
                  height={60}
                  className='mt-[13px] aspect-square h-[60px]'
                />
                <div className='ml-[20px]'>
                  <b className='text-[18px] text-[#f97090] sm:text-[20px]'>1:1 문의 답변</b>{' '}
                  <span className='align-bottom text-[14px] font-light text-[#fff] sm:text-base'>
                    19:20
                  </span>
                  <p className='mt-[5px] text-[16px] font-normal text-[#fff] sm:text-[18px]'>
                    1:1 문의 답변에 관리자의 답변이 올라왔습니다.
                  </p>
                </div>
              </li>
              <li className='mb-[30px] flex bg-[#fff] bg-opacity-20 px-[20px] pb-[20px] pt-[8px]'>
                <Image
                  src='/assets/icons/notification-brand-icon.webp'
                  alt='1:1문의 답변'
                  width={60}
                  height={60}
                  className='mt-[13px] aspect-square h-[60px]'
                />
                <div className='ml-[20px]'>
                  <b className='text-[18px] text-[#f97090] sm:text-[20px]'>1:1 문의 답변</b>{' '}
                  <span className='align-bottom text-[14px] font-light text-[#fff] sm:text-base'>
                    19:20
                  </span>
                  <p className='mt-[5px] text-[16px] font-normal text-[#fff] sm:text-[18px]'>
                    1:1 문의 답변에 관리자의 답변이 올라왔습니다.
                  </p>
                </div>
              </li>
            </ul>
          </div>

          <div className='mt-[100px] flex items-center justify-center'>
            <button className='mr-[16px] h-[20px] w-[20px] bg-[url(/assets/icons/pagination-arrow-left.webp)] text-[0px]'>
              left
            </button>
            <ul className='flex items-center justify-center'>
              <li className='mr-[16px] cursor-pointer text-[20px] font-bold text-[#fff]'>1</li>
              <li className='mr-[16px] cursor-pointer text-[20px] font-bold text-[#e93963]'>2</li>
              <li className='mr-[16px] cursor-pointer text-[20px] font-bold text-[#fff]'>3</li>
              <li className='mr-[16px] cursor-pointer text-[20px] font-bold text-[#fff]'>4</li>
              <li className='cursor-pointer text-[20px] font-bold text-[#fff]'>5</li>
            </ul>
            <button className='ml-[16px] h-[20px] w-[20px] bg-[url(/assets/icons/pagination-arrow-right.webp)] text-[0px]'>
              right
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

Notification.getLayout = page => <Layout>{page}</Layout>;

export default Notification;
