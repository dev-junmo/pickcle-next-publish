import Image from 'next/image';
import { useState } from 'react';
import { Layout } from 'src/components/layout';
import { type NextPageWithLayout } from 'src/types/common';

interface Props {}

const ChargingApplication: NextPageWithLayout<Props> = () => {
  return (
    <div className='mx-auto my-[150px] w-[95%] rounded-[20px] bg-[#fff] px-[20px] xl:w-[1000px]'>
      <div className='items-start justify-center gap-[50px] border-b border-[#cccccc] pb-[20px] pl-[30px] pt-[70px] md:flex md:pl-0'>
        <Image
          src='/assets/icons/charging-money-icon.webp'
          alt='돈 아이콘'
          width={105}
          height={95}
        />
        <div>
          <b className='text-[20px] font-[500] text-[#2d2d2d] md:text-[25px]'>충전 포인트</b>
          <p className='my-[20px] text-[25px] font-[500] text-[#2d2d2d] md:text-[30px]'>
            충전 금액을 선택하세요.
          </p>
          <div className='md:w-[495px]'>
            <span className='text-[14px] text-[#f97090]'>
              ＊ 최대 충전 가능 포인트 : 2,000,000원
            </span>
            <ul className='clear-both flex flex-wrap items-center gap-[30px] pt-[20px]'>
              <li>
                <button className='h-[40px] w-[100px] rounded-[10px] bg-[#f97090] text-[18px] font-bold text-[#fff] md:text-[20px]'>
                  + 5만원
                </button>
              </li>
              <li>
                <button className='h-[40px] w-[100px] rounded-[10px] bg-[#8586db] text-[18px] font-bold text-[#fff] md:text-[20px]'>
                  + 10만원
                </button>
              </li>
              <li>
                <button className='h-[40px] w-[100px] rounded-[10px] bg-[#f97090] text-[18px] font-bold text-[#fff] md:text-[20px]'>
                  + 30만원
                </button>
              </li>
              <li>
                <button className='h-[40px] w-[100px] rounded-[10px] bg-[#8586db] text-[18px] font-bold text-[#fff] md:text-[20px]'>
                  + 50만원
                </button>
              </li>
              <li>
                <button className='h-[40px] w-[100px] rounded-[10px] bg-[#f97090] text-[18px] font-bold text-[#fff] md:text-[20px]'>
                  + 100만원
                </button>
              </li>
              <li>
                <button className='h-[40px] w-[100px] rounded-[10px] bg-[#8586db] text-[18px] font-bold text-[#fff] md:text-[20px]'>
                  + 150만원
                </button>
              </li>
            </ul>
          </div>
          <div className='relative mt-[20px] h-[50px] w-[232px] after:absolute after:right-[15px] after:top-[11px] after:block after:content-["P"]'>
            <input
              type='number'
              className='h-full w-full rounded-[5px] border border-[#cccccc] pl-[15px] text-[16px] font-[500] text-[#2d2d2d]'
            />
          </div>
          <p className='mt-[10px] text-[14px] font-[500] text-[#2d2d2d]'>
            * 100,000P 이상 충전 시 10%의 추가 포인트 지급
          </p>
        </div>
      </div>
      <div className='px-[20px] sm:px-[30px] lg:px-[60px] xl:px-[120px]'>
        <div className='mt-[50px] rounded-[10px] border border-[#cccccc]'>
          <ul className='py-[50px] pl-[20px] sm:pl-[40px]'>
            <li className='mb-[60px] flex items-center gap-[20px] sm:gap-[45px]'>
              <span className='text-[16px] font-[500] text-[#2d2d2d]'>결제 방법</span>
              <label htmlFor='payment-radio' className='relative flex items-center'>
                <input
                  defaultChecked
                  type='radio'
                  id='payment-radio'
                  className='peer hidden'
                  name='payment-radio'
                  value='무통장 입금'
                />
                <span className='relative mr-[10px] inline-block h-[20px] w-[20px] shrink-0 rounded-full border-[2px] border-[#cccccc] bg-[#fff] p-[4px] before:hidden before:h-[8px] before:w-[8px] before:rounded-full before:bg-[#f97090] peer-checked:before:block' />
                <span className='text-[16px] font-[500] text-[#2d2d2d]'>무통장 입금</span>
              </label>
            </li>
            <li className='items-start gap-[20px] sm:flex sm:gap-[45px]'>
              <span className='mb-[20px] block text-[16px] font-[500] text-[#2d2d2d] sm:mb-0'>
                지출 증빙
              </span>
              <div>
                <ul className='flex flex-wrap items-center gap-[20px] sm:gap-[45px]'>
                  <li>
                    <label htmlFor='not-published-radio' className='relative flex items-center'>
                      <input
                        defaultChecked
                        type='radio'
                        id='not-published-radio'
                        className='peer hidden'
                        name='receipt-radio'
                        value='현금영수증 (소득공제)'
                      />
                      <span className='relative mr-[10px] inline-block h-[20px] w-[20px] shrink-0 rounded-full border-[2px] border-[#cccccc] bg-[#fff] p-[4px] before:hidden before:h-[8px] before:w-[8px] before:rounded-full before:bg-[#f97090] peer-checked:before:block' />
                      <span className='text-[16px] font-[500] text-[#2d2d2d]'>
                        현금영수증 (소득공제)
                      </span>
                    </label>
                  </li>
                  <li>
                    <label htmlFor='cash-receipt-radio' className='relative flex items-center'>
                      <input
                        type='radio'
                        id='cash-receipt-radio'
                        className='peer hidden'
                        name='receipt-radio'
                        value='미발행'
                      />
                      <span className='relative mr-[10px] inline-block h-[20px] w-[20px] shrink-0 rounded-full border-[2px] border-[#cccccc] bg-[#fff] p-[4px] before:hidden before:h-[8px] before:w-[8px] before:rounded-full before:bg-[#f97090] peer-checked:before:block' />
                      <span className='text-[16px] font-[500] text-[#2d2d2d]'>미발행</span>
                    </label>
                  </li>
                </ul>
                <div className='mt-[15px] items-end gap-[28px] lg:flex'>
                  <div className='mb-[15px] lg:mb-0 lg:ml-[30px]'>
                    <label className='mr-[10px] text-[16px] font-[500] text-[#2d2d2d]'>
                      휴대폰 번호
                    </label>
                    <input className='h-[40px] w-auto rounded-[5px] border border-[#cccccc] pl-[15px] sm:w-[228px]' />
                  </div>
                  <label htmlFor='phone-number-save' className='flex items-center'>
                    <input type='checkbox' id='phone-number-save' className='peer hidden' />
                    <span className='mr-[13px] inline-block h-[30px] w-[30px] shrink-0 rounded-[3px] border-[2px] border-[#f97090] bg-center bg-no-repeat peer-checked:bg-[url(/assets/icons/check-icon.webp)] peer-checked:bg-[length:15px_15px]' />
                    <span className='text-[16px] font-[500] text-[#2d2d2d]'>휴대폰 번호 저장</span>
                  </label>
                </div>
              </div>
            </li>
          </ul>
          <div className='border-t border-[#cccccc] py-[30px] pl-[20px] sm:pl-[40px]'>
            <b className='mr-[25px] text-[18px] text-[#2d2d2d] sm:text-[20px]'>결제 금액</b>
            <b className='text-[18px] text-[#2d2d2d] sm:text-[20px]'>50,000원</b>
          </div>
        </div>
        <div className='mt-[30px] pb-[100px] lg:pl-[40px]'>
          <b className='text-[18px] font-[500] text-[#2d2d2d] sm:text-[20px]'>결제 정보 동의</b>
          <div className='mb-[80px] mt-[40px] sm:mb-[100px]'>
            <label htmlFor='all-agree-check' className='flex items-center'>
              <input type='checkbox' id='all-agree-check' className='peer hidden' />
              <span className='mr-[20px] inline-block h-[30px] w-[30px] shrink-0 rounded-[3px] border-[2px] border-[#f97090] bg-center bg-no-repeat peer-checked:bg-[url(/assets/icons/check-icon.webp)] peer-checked:bg-[length:15px_15px]' />
              <span className='text-[18px] font-[500] text-[#2d2d2d] sm:text-[20px]'>
                전체 정보에 동의 합니다.
              </span>
            </label>
          </div>
          <button className='mx-auto block h-[53px] w-[250px] rounded-[10px] bg-[#8586db] text-[18px] font-bold text-[#fff] sm:h-[63px] sm:text-[20px] md:w-[455px]'>
            충전 신청
          </button>
        </div>
      </div>
    </div>
  );
};

ChargingApplication.getLayout = page => <Layout>{page}</Layout>;

export default ChargingApplication;
