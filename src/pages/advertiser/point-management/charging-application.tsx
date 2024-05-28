import Image from 'next/image';
import { useState } from 'react';
import { AdvertiserSidebar } from 'src/components/advertiser-sidebar';
import { Layout } from 'src/components/layout';
import { type NextPageWithLayout } from 'src/types/common';

interface Props {}

const AdvertiserChargingApplication: NextPageWithLayout<Props> = () => {
  return (
    <div className='md:flex'>
      <AdvertiserSidebar />
      <div className='mx-auto my-[150px] w-full rounded-[20px] bg-[#fff] px-[20px] md:w-[70%] xl:w-[1000px]'>
        <div className='items-start justify-center gap-[50px] border-b border-[#cccccc] pb-[20px] pl-[30px] pt-[50px] lg:flex lg:pl-0 lg:pt-[70px]'>
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
              <ul className='flex flex-wrap items-center gap-[30px] pt-[20px]'>
                <li>
                  <button className='h-[40px] w-[100px] rounded-[10px] bg-[#f97090] text-[20px] font-bold text-[#fff] md:text-[20px]'>
                    + 5만원
                  </button>
                </li>
                <li>
                  <button className='h-[40px] w-[100px] rounded-[10px] bg-[#8586db] text-[20px] font-bold text-[#fff] md:text-[20px]'>
                    + 10만원
                  </button>
                </li>
                <li>
                  <button className='h-[40px] w-[100px] rounded-[10px] bg-[#f97090] text-[20px] font-bold text-[#fff] md:text-[20px]'>
                    + 30만원
                  </button>
                </li>
                <li>
                  <button className='h-[40px] w-[100px] rounded-[10px] bg-[#8586db] text-[20px] font-bold text-[#fff] md:text-[20px]'>
                    + 50만원
                  </button>
                </li>
                <li>
                  <button className='h-[40px] w-[100px] rounded-[10px] bg-[#f97090] text-[20px] font-bold text-[#fff] md:text-[20px]'>
                    + 100만원
                  </button>
                </li>
                <li>
                  <button className='h-[40px] w-[100px] rounded-[10px] bg-[#8586db] text-[20px] font-bold text-[#fff] md:text-[20px]'>
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
            <ul className='px-[30px] py-[50px] lg:pl-[40px]'>
              <li className='mb-[30px] items-center gap-[20px] sm:gap-[45px] lg:mb-[60px] lg:flex'>
                <span className='mb-[15px] block w-[160px] text-[16px] font-[500] text-[#2d2d2d] lg:mb-0'>
                  결제 방법
                </span>
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
                  <span className='block w-[160px] text-[16px] font-[500] text-[#2d2d2d]'>
                    무통장 입금
                  </span>
                </label>
              </li>
              <li className='mb-[30px] items-center gap-[45px] lg:flex'>
                <span className='mb-[15px] block w-[160px] text-[16px] font-[500] text-[#2d2d2d] lg:mb-0'>
                  입금계좌
                </span>
                <select className='h-[40px] w-full rounded-[5px] border border-[#cccccc] sm:w-[300px]'>
                  <option />
                </select>
              </li>
              <li className='mb-[30px] items-start gap-[45px] lg:flex'>
                <span className='mb-[15px] block w-[160px] text-[16px] font-[500] text-[#2d2d2d] lg:mb-0'>
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
                        <span className='block text-[16px] font-[500] text-[#2d2d2d]'>
                          세금계산서 (부가세10%)
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
                        <span className='text-[16px] font-[500] text-[#미발행]'>미발행</span>
                      </label>
                    </li>
                  </ul>
                </div>
              </li>
              <li className='mb-[30px] items-start gap-[45px] lg:flex'>
                <span className='mb-[15px] mt-[8px] block w-[160px] shrink-0 text-[16px] font-[500] text-[#2d2d2d] lg:mb-0'>
                  세금계산서 발급 이메일
                </span>
                <div>
                  <input className='h-[40px] w-full rounded-[5px] border border-[#cccccc] sm:w-[300px]' />
                  <p className='mt-[10px] text-[14px] font-[500] text-[#2d2d2d]'>
                    입력하신 이메일로 세금계산서가 발급되며, 다른 메일로 받으시고자 하는 경우,{' '}
                    <br />
                    이메일을 변경해주세요.
                  </p>
                </div>
              </li>
              <li className='mb-[30px] items-center gap-[45px] lg:flex'>
                <span className='mb-[15px] mt-[8px] block w-[160px] shrink-0 text-[16px] font-[500] text-[#2d2d2d] lg:mb-0'>
                  입금자명
                </span>
                <div>
                  <input className='h-[40px] w-full rounded-[5px] border border-[#cccccc] sm:w-[150px]' />
                </div>
              </li>
              <li className='items-center gap-[45px] lg:flex'>
                <span className='mb-[15px] mt-[8px] block w-[160px] shrink-0 text-[16px] font-[500] text-[#2d2d2d] lg:mb-0'>
                  입금기한
                </span>
                <b className='text-[16px] text-[#f97090]'>2023년 09월 07일 23시 59분까지</b>
              </li>
            </ul>
            <div className='border-t border-[#cccccc] px-[30px] py-[30px] lg:pl-[40px]'>
              <b className='mr-[25px] text-[18px] text-[#2d2d2d] lg:text-[20px]'>결제 금액</b>
              <b className='text-[18px] text-[#2d2d2d] lg:text-[20px]'>50,000원</b>
            </div>
          </div>
          <div className='mt-[30px] pb-[100px] lg:pl-[40px]'>
            <b className='text-[18px] font-[500] text-[#2d2d2d] lg:text-[20px]'>결제 정보 동의</b>
            <div className='mb-[50px] mt-[40px] lg:mb-[100px]'>
              <label htmlFor='phone-number-save' className='flex items-center'>
                <input type='checkbox' id='phone-number-save' className='peer hidden' />
                <span className='mr-[15px] inline-block h-[25px] w-[25px] shrink-0 rounded-[3px] border-[2px] border-[#f97090] bg-center bg-no-repeat peer-checked:bg-[url(/assets/icons/check-icon.webp)] peer-checked:bg-[length:15px_15px] lg:mr-[20px]' />
                <span className='text-[18px] font-[500] text-[#2d2d2d] lg:text-[20px]'>
                  전체 정보에 동의 합니다.
                </span>
              </label>
            </div>
            <ul>
              <li className='text-[14px] font-[500] text-[#f97090]'>
                * 세금계산서는 익월 10일까지 발급되며, 입력하신 이메일로 전송됩니다.
              </li>
              <li className='text-[14px] font-[500] text-[#f97090]'>
                * 포인트 환불을 요청하는 경우 3일 이내 신청이 가능하며, 3일 이후 신청하실 경우{' '}
                <br />
                환불 수수료 10% 제외된 금액으로 환불처리 됩니다. <br />( 단, 서비스 이용 및 진행
                이력이 없는 경우에는 환불 수수료가 발생하지 않습니다.)
              </li>
            </ul>
            <button className='mx-auto mt-[60px] block h-[53px] w-[250px] rounded-[10px] bg-[#8586db] text-[18px] font-bold text-[#fff] sm:text-[20px] lg:h-[63px] lg:w-[455px]'>
              충전 신청
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

AdvertiserChargingApplication.getLayout = page => <Layout>{page}</Layout>;

export default AdvertiserChargingApplication;
