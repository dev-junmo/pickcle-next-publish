import Image from 'next/image';
import { useState } from 'react';
import { Layout } from 'src/components/layout';
import { type NextPageWithLayout } from 'src/types/common';

interface Props {}

const WithdrawalApplication: NextPageWithLayout<Props> = () => {
  return (
    <div className='mx-auto my-[150px] w-full rounded-[20px] bg-[#fff] pb-[100px] xl:w-[1000px]'>
      <div className='flex items-start gap-[20px] px-[30px] pb-[30px] pt-[70px] sm:gap-[50px] sm:px-[60px] sm:pb-[20px] lg:px-[120px]'>
        <Image
          src='/assets/icons/withdrawal-application-icon.webp'
          alt='돈 아이콘'
          width={105}
          height={95}
        />
        <div>
          <b className='text-[20px] font-[500] text-[#2d2d2d] sm:text-[25px]'>출금 포인트</b>
          <p className='my-[10px] text-[25px] font-[500] text-[#2d2d2d] sm:my-[20px] sm:text-[30px]'>
            충전 금액을 선택하세요.
          </p>
        </div>
      </div>
      <div className='mb-[100px] px-[30px] sm:px-[60px] lg:px-[120px]'>
        <b className='mb-[10px] block text-[20px] font-bold text-[#2d2d2d]'>기본 정보 입력</b>
        <div className='rounded-[10px] border border-[#cccccc]'>
          <ul className='px-[20px] py-[30px] md:pl-[40px]'>
            <li className='mb-[30px] items-start gap-[40px] md:flex'>
              <span className='mb-[10px] mt-[8px] block w-[90px] text-[16px] font-bold text-[#2d2d2d] md:mb-0'>
                예금주
              </span>
              <div>
                <input
                  className='h-[40px] w-full rounded-[5px] border border-[#cccccc] pl-[15px] sm:w-[320px]'
                  placeholder='예금주명을 입력 하세요.'
                />
                <p className='mt-[10px] text-[14px] font-[500] text-[#f97090]'>
                  ＊ 입금 확인 시 신청한 예금주 성함과 동일하지 않는 경우 입금 확인이 되지 않습니다.{' '}
                  <br />
                  <span className='md:ml-[18px]'>꼭 확인하여 주시기 바랍니다.</span>
                </p>
              </div>
            </li>
            <li className='items-start gap-[40px] md:flex'>
              <span className='mb-[10px] mt-[8px] block w-[90px] text-[16px] font-bold text-[#2d2d2d] md:mb-0'>
                주민등록번호
              </span>
              <div>
                <input
                  className='h-[40px] w-full rounded-[5px] border border-[#cccccc] pl-[15px] sm:w-[320px]'
                  placeholder='예금주명을 입력 하세요.'
                />
                <p className='mt-[10px] text-[14px] font-[500] text-[#f97090]'>
                  ＊ 입금액 관련 법상 사업 소득에 따른 세금신고 3.3%로 인해 필요한 정보입니다.
                </p>
              </div>
            </li>
          </ul>
          <div className='border-t border-[#cccccc]'>
            <ul className='px-[20px] py-[30px] md:pl-[40px]'>
              <li className='mb-[30px] items-start gap-[40px] md:flex'>
                <span className='mb-[10px] mt-[8px] block w-[90px] text-[16px] font-bold text-[#2d2d2d] md:mb-0'>
                  입금 은행
                </span>
                <select className='h-[40px] w-full rounded-[5px] border border-[#cccccc] pl-[15px] sm:w-[320px]'>
                  <option>선택</option>
                </select>
              </li>
              <li className='items-start gap-[40px] md:flex'>
                <span className='mb-[10px] mt-[8px] block w-[90px] text-[16px] font-bold text-[#2d2d2d] md:mb-0'>
                  계좌번호
                </span>
                <input
                  className='h-[40px] w-full rounded-[5px] border border-[#cccccc] pl-[15px] sm:w-[320px]'
                  placeholder='" - " 없이 입력하세요'
                />
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className='mb-[30px] border-y border-[#cccccc] px-[30px] py-[30px] sm:px-[60px] lg:px-[120px]'>
        <b className='text-[20px] text-[#2d2d2d]'>출금 포인트 입력</b>
        <div className='lg:ml-[45px]'>
          <div className='mt-[20px] flex items-center gap-[10px]'>
            <label className='text-[16px] font-bold text-[#2d2d2d]'>출금 신청 포인트</label>
            <div className='relative h-[50px] w-[182px] after:absolute after:right-[15px] after:top-[11px] after:block after:content-["P"]'>
              <input
                type='number'
                className='h-full w-full rounded-[5px] border border-[#cccccc] pl-[15px] text-[16px] font-[500] text-[#2d2d2d]'
              />
            </div>
          </div>
          <div className='mt-[20px]'>
            <span className='mr-[30px] text-[14px] font-[500] text-[#8586db]'>
              신청 가능 포인트 : 100,000 P
            </span>
            <span className='mt-[10px] block text-[14px] font-[500] text-[#f97090] sm:mt-0 sm:inline-block'>
              신청 불가 포인트 : 1,000 P
            </span>
          </div>
        </div>
      </div>
      <div className='mb-[100px] mt-[30px] px-[30px] sm:px-[60px] lg:px-[120px]'>
        <b className='text-[20px] font-[500] text-[#2d2d2d]'>총 지급 금액</b>
        <div className='mt-[30px] rounded-[10px] bg-[#ebebeb] p-[30px]'>
          <ul>
            <li className='mb-[35px] flex justify-between'>
              <div>
                <b className='mb-[5px] block text-[16px] text-[#2d2d2d]'>
                  매월 05일 지급 예정 금액
                </b>
                <span className='text-[14px] font-[500]'>7월 21일~말일 신청 건까지</span>
              </div>
              <div>
                <b className='mb-[5px] block text-center text-[16px] text-[#8586db]'>0 P</b>
                <span className='text-[14px] font-[500] text-[#2d2d2d]'>총 0P 신청</span>
              </div>
            </li>
            <li className='mb-[35px] flex justify-between'>
              <div>
                <b className='mb-[5px] block text-[16px] text-[#2d2d2d]'>
                  매월 05일 지급 예정 금액
                </b>
                <span className='text-[14px] font-[500]'>7월 21일~말일 신청 건까지</span>
              </div>
              <div>
                <b className='mb-[5px] block text-center text-[16px] text-[#8586db]'>0 P</b>
                <span className='text-[14px] font-[500] text-[#2d2d2d]'>총 0P 신청</span>
              </div>
            </li>
            <li className='flex justify-between'>
              <div>
                <b className='mb-[5px] block text-[16px] text-[#2d2d2d]'>
                  매월 05일 지급 예정 금액
                </b>
                <span className='text-[14px] font-[500]'>7월 21일~말일 신청 건까지</span>
              </div>
              <div>
                <b className='mb-[5px] block text-center text-[16px] text-[#8586db]'>0 P</b>
                <span className='text-[14px] font-[500] text-[#2d2d2d]'>총 0P 신청</span>
              </div>
            </li>
          </ul>
        </div>
        <ul className='mt-[10px]'>
          <li className='text-[14px] font-[500] text-[#f97090]'>
            ＊ 기간내 10,000P 이상 출금 신청 시 , <b>사업소득에 따른 세금신고(3.3%) 공제</b> 됩니다.
          </li>
          <li className='text-[14px] font-[500] text-[#f97090]'>
            ＊ <b>특정 은행사에 따른 이체 수수료 발생 시</b> 해당 수수료 차감 후 입금됩니다.
          </li>
          <li className='text-[14px] font-[500] text-[#f97090]'>
            ＊ 지급은 오후 8시 이내 진행되며, 지급일이 휴일인 경우 다음 영업일에 지급 됩니다.
          </li>
          <li className='text-[14px] font-[500] text-[#f97090]'>
            ＊ 자세한 사항은 포인트 내역에서 확인 해주시기 바랍니다.
          </li>
        </ul>
      </div>
      <button className='mx-auto block h-[50px] w-[250px] rounded-[10px] bg-[#8586db] text-[18px] font-bold text-[#fff] md:h-[60px] md:w-[454px] md:text-[20px]'>
        출금 신청
      </button>
    </div>
  );
};

WithdrawalApplication.getLayout = page => <Layout>{page}</Layout>;

export default WithdrawalApplication;
