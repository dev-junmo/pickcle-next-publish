import Image from 'next/image';
import { useState } from 'react';
import { Layout } from 'src/components/layout';
import GradePopup from 'src/components/mypage/grade-popup';
import { type NextPageWithLayout } from 'src/types/common';

interface Props {}

const PenaltyHistory: NextPageWithLayout<Props> = () => {
  const [filterOpen, setFilterOpen] = useState(false);

  return (
    <div className='mx-auto my-[100px] w-full px-[30px] text-center xl:w-[1040px] xl:px-0 2xl:w-[1420px]'>
      <div className='relative border-b border-[#707070] py-[10px] text-left md:text-center'>
        <b className='text-[20px] font-normal text-[#fff] md:text-[30px]'>패널티 이력 현황</b>
        <div className='absolute bottom-[10px] right-0 flex items-center gap-[5px]'>
          <span className='text-[12px] font-[500] text-[#fff] md:text-[14px]'>
            패널티 단계 보기
          </span>
          <Image
            src='/assets/icons/arrow-bottom-small.webp'
            alt='화살표 아이콘'
            width={20}
            height={20}
          />
        </div>
      </div>
      <div className='mt-[50px] rounded-[20px] bg-[#fff] p-[20px]'>
        <b className='text-[20px] font-bold text-[#2d2d2d]'>패널티 단계</b>
        <ul className='mt-[24px] hidden lg:flex'>
          <li className='flex-1 text-left'>
            <span className='text-[14px] text-[#ababab]'>경고 1회</span>
            <div className='my-[10px] h-[15px] bg-[#ffe600]' />
            <div className='flex items-center justify-center'>
              <Image
                src='/assets/icons/penalty-warning-small.webp'
                alt='패널티 아이콘'
                width={14}
                height={15}
                className='mr-[5px]'
              />
              <b className='text-[16px] font-[500] text-[#000]'>주의</b>
            </div>
          </li>
          <li className='flex-1 text-left'>
            <span className='text-[14px] text-[#ababab]'>경고 2회</span>
            <div className='my-[10px] h-[15px] bg-[#ffcc00]' />
            <div className='flex items-center justify-center'>
              <Image
                src='/assets/icons/penalty-warning03-small.webp'
                alt='패널티 아이콘'
                width={14}
                height={15}
                className='mr-[5px]'
              />
              <b className='text-[16px] font-[500] text-[#000]'>3일</b>
              <span className='ml-[5px] text-[16px] text-[#ababab]'>이용제한</span>
            </div>
          </li>
          <li className='flex-1 text-left'>
            <span className='text-[14px] text-[#ababab]'>경고 3회</span>
            <div className='my-[10px] h-[15px] bg-[#ff7700]' />
            <div className='flex items-center justify-center'>
              <Image
                src='/assets/icons/penalty-warning07-small.webp'
                alt='패널티 아이콘'
                width={14}
                height={15}
                className='mr-[5px]'
              />
              <b className='text-[16px] font-[500] text-[#000]'>7일</b>
              <span className='ml-[5px] text-[16px] text-[#ababab]'>이용제한</span>
            </div>
          </li>
          <li className='flex-1 text-left'>
            <span className='text-[14px] text-[#ababab]'>경고 4회</span>
            <div className='my-[10px] h-[15px] bg-[#ff4600]' />
            <div className='flex items-center justify-center'>
              <Image
                src='/assets/icons/penalty-warning15-small.webp'
                alt='패널티 아이콘'
                width={14}
                height={15}
                className='mr-[5px]'
              />
              <b className='text-[16px] font-[500] text-[#000]'>15일</b>
              <span className='ml-[5px] text-[16px] text-[#ababab]'>이용제한</span>
            </div>
          </li>
          <li className='flex-1 text-left'>
            <span className='text-[14px] text-[#ababab]'>경고 5회</span>
            <div className='my-[10px] h-[15px] bg-[#ff0000]' />
            <div className='flex items-center justify-center'>
              <Image
                src='/assets/icons/penalty-warning30-small.webp'
                alt='패널티 아이콘'
                width={14}
                height={15}
                className='mr-[5px]'
              />
              <b className='text-[16px] font-[500] text-[#000]'>30일</b>
              <span className='ml-[5px] text-[16px] text-[#ababab]'>이용제한</span>
            </div>
          </li>
          <li className='flex-1 text-left'>
            <span className='text-[14px] text-[#ababab]'>경고 6회</span>
            <div className='my-[10px] h-[15px] bg-[#bb0000]' />
            <div className='flex items-center justify-center'>
              <Image
                src='/assets/icons/penalty-warning60-small.webp'
                alt='패널티 아이콘'
                width={14}
                height={15}
                className='mr-[5px]'
              />
              <b className='text-[16px] font-[500] text-[#000]'>60일</b>
              <span className='ml-[5px] text-[16px] text-[#ababab]'>이용제한</span>
            </div>
          </li>
          <li className='flex-1 text-left'>
            <span className='text-[14px] text-[#ababab]'>경고 7회</span>
            <div className='my-[10px] h-[15px] bg-[#5b0000]' />
            <div className='flex items-center justify-center'>
              <Image
                src='/assets/icons/penalty-forever-small.webp'
                alt='패널티 아이콘'
                width={14}
                height={15}
                className='mr-[5px]'
              />
              <b className='text-[16px] font-[500] text-[#000]'>영구적</b>
              <span className='ml-[5px] text-[16px] text-[#ababab]'>이용제한</span>
            </div>
          </li>
        </ul>
        <ul className='mt-[24px] flex flex-wrap gap-[20px] lg:hidden'>
          <li className='flex items-center gap-[10px]'>
            <div className='my-[10px] h-[15px] w-[15px] rounded-full bg-[#ffe600]' />
            <div className='flex items-center justify-center'>
              <Image
                src='/assets/icons/penalty-warning-small.webp'
                alt='패널티 아이콘'
                width={14}
                height={15}
                className='mr-[5px]'
              />
              <b className='text-[16px] font-[500] text-[#000]'>주의</b>
            </div>
            <span className='text-[14px] text-[#ababab]'>(경고 1회)</span>
          </li>
          <li className='flex items-center gap-[10px]'>
            <div className='my-[10px] h-[15px] w-[15px] rounded-full bg-[#ffcc00]' />
            <div className='flex items-center justify-center'>
              <Image
                src='/assets/icons/penalty-warning03-small.webp'
                alt='패널티 아이콘'
                width={14}
                height={15}
                className='mr-[5px]'
              />
              <b className='text-[16px] font-[500] text-[#000]'>3일</b>
            </div>
            <div>
              <span className='text-[16px] text-[#ababab]'>이용제한</span>
              <span className='ml-[5px] text-[14px] text-[#ababab]'>(경고 2회)</span>
            </div>
          </li>
          <li className='flex items-center gap-[10px]'>
            <div className='my-[10px] h-[15px] w-[15px] rounded-full bg-[#ff7700]' />
            <div className='flex items-center justify-center'>
              <Image
                src='/assets/icons/penalty-warning07-small.webp'
                alt='패널티 아이콘'
                width={14}
                height={15}
                className='mr-[5px]'
              />
              <b className='text-[16px] font-[500] text-[#000]'>7일</b>
            </div>
            <div>
              <span className='text-[16px] text-[#ababab]'>이용제한</span>
              <span className='ml-[5px] text-[14px] text-[#ababab]'>(경고 3회)</span>
            </div>
          </li>
          <li className='flex items-center gap-[10px]'>
            <div className='my-[10px] h-[15px] w-[15px] rounded-full bg-[#ff4600]' />
            <div className='flex items-center justify-center'>
              <Image
                src='/assets/icons/penalty-warning15-small.webp'
                alt='패널티 아이콘'
                width={14}
                height={15}
                className='mr-[5px]'
              />
              <b className='text-[16px] font-[500] text-[#000]'>15일</b>
            </div>
            <div>
              <span className='text-[16px] text-[#ababab]'>이용제한</span>
              <span className='ml-[5px] text-[14px] text-[#ababab]'>(경고 4회)</span>
            </div>
          </li>
          <li className='flex items-center gap-[10px]'>
            <div className='my-[10px] h-[15px] w-[15px] rounded-full bg-[#ff0000]' />
            <div className='flex items-center justify-center'>
              <Image
                src='/assets/icons/penalty-warning30-small.webp'
                alt='패널티 아이콘'
                width={14}
                height={15}
                className='mr-[5px]'
              />
              <b className='text-[16px] font-[500] text-[#000]'>30일</b>
            </div>
            <div>
              <span className='text-[16px] text-[#ababab]'>이용제한</span>
              <span className='ml-[5px] text-[14px] text-[#ababab]'>(경고 5회)</span>
            </div>
          </li>
          <li className='flex items-center gap-[10px]'>
            <div className='my-[10px] h-[15px] w-[15px] rounded-full bg-[#bb0000]' />
            <div className='flex items-center justify-center'>
              <Image
                src='/assets/icons/penalty-warning60-small.webp'
                alt='패널티 아이콘'
                width={14}
                height={15}
                className='mr-[5px]'
              />
              <b className='text-[16px] font-[500] text-[#000]'>60일</b>
            </div>
            <div>
              <span className='text-[16px] text-[#ababab]'>이용제한</span>
              <span className='ml-[5px] text-[14px] text-[#ababab]'>(경고 6회)</span>
            </div>
          </li>
          <li className='flex items-center gap-[10px]'>
            <div className='my-[10px] h-[15px] w-[15px] rounded-full bg-[#5b0000]' />
            <div className='flex items-center justify-center'>
              <Image
                src='/assets/icons/penalty-forever-small.webp'
                alt='패널티 아이콘'
                width={14}
                height={15}
                className='mr-[5px]'
              />
              <b className='text-[16px] font-[500] text-[#000]'>영구적</b>
            </div>
            <div>
              <span className='text-[16px] text-[#ababab]'>이용제한</span>
              <span className='ml-[5px] text-[14px] text-[#ababab]'>(경고 7회)</span>
            </div>
          </li>
        </ul>
      </div>
      <div className='mt-[30px] bg-[#5b0000] px-[15px] py-[20px] text-left'>
        <b className='text-[20px] font-bold text-[#fff] sm:text-[25px]'>
          서비스 이용불가 (7회 경고)
        </b>
        <p className='mt-[20px] text-[14px] font-bold text-[#fff] sm:text-[16px]'>
          서비스 이용정책에 따라 서비스 이용이 불가 합니다.
        </p>
      </div>
      <div className='relative mt-[73px] flex items-center justify-between border-b border-[#707070] px-[16px] pb-[20px]'>
        <b className='text-[20px] font-[500] text-[#fff]'>패널티 이력</b>
        <span
          className='inline-block cursor-pointer bg-[url(/assets/icons/filter-icon.webp)] bg-[length:20px_20px] bg-[right_bottom] bg-no-repeat pr-[25px] text-base font-bold text-[#fff]'
          onClick={() => setFilterOpen(prev => !prev)}
        >
          필터
        </span>
        {filterOpen && (
          <div className='absolute right-[-8px] top-[48px] w-[185px] rounded-[15px] bg-[#fff] px-[19px] py-[15px] before:absolute before:right-[23px] before:top-[-20px] before:h-[0px] before:w-[0px] before:border-b-[20px] before:border-l-[10px] before:border-r-[10px] before:border-b-[#fff] before:border-l-[transparent] before:border-r-[transparent]'>
            <button
              className='absolute right-[20px] top-[20px]'
              onClick={() => setFilterOpen(false)}
            >
              <Image
                src='/assets/icons/filter-popup-close.webp'
                alt='닫기 버튼'
                width={14}
                height={14}
              />
            </button>
            <div className='mt-[24px]'>
              <ul className='mt-[15px]'>
                <li className='mb-[25px]'>
                  <label htmlFor='all-view' className='flex items-center'>
                    <input type='checkbox' id='all-view' className='peer hidden' />
                    <span className='mr-[10px] inline-block h-[20px] w-[20px] rounded-[2px] border border-[#c0c0c0] bg-center bg-no-repeat peer-checked:bg-[url(/assets/icons/check-icon.webp)] peer-checked:bg-[length:13px_13px]' />
                    <span className='text-[14px]'>전체</span>
                  </label>
                </li>
                <li className='mb-[25px]'>
                  <label htmlFor='Applying' className='flex items-center'>
                    <input type='checkbox' id='Applying' className='peer hidden' />
                    <span className='mr-[10px] inline-block h-[20px] w-[20px] rounded-[2px] border border-[#c0c0c0] bg-center bg-no-repeat peer-checked:bg-[url(/assets/icons/check-icon.webp)] peer-checked:bg-[length:13px_13px]' />
                    <span className='text-[14px]'>적용중</span>
                  </label>
                </li>
                <li>
                  <label htmlFor='lift' className='flex items-center'>
                    <input type='checkbox' id='lift' className='peer hidden' />
                    <span className='mr-[10px] inline-block h-[20px] w-[20px] rounded-[2px] border border-[#c0c0c0] bg-center bg-no-repeat peer-checked:bg-[url(/assets/icons/check-icon.webp)] peer-checked:bg-[length:13px_13px]' />
                    <span className='text-[14px]'>해제</span>
                  </label>
                </li>
              </ul>
            </div>
            <button
              className='mx-auto mt-[17px] block h-[24px] w-[73px] rounded-[5px] bg-[#868686] text-[12px] text-[#fff]'
              onClick={() => setFilterOpen(false)}
            >
              검색하기
            </button>
          </div>
        )}
      </div>
      <div className='mt-[68px]'>
        <ul>
          <li className='rounded-[10px] bg-[#fff] pb-[10px] pl-[30px] pr-[30px] pt-[20px] text-left sm:pr-[60px]'>
            <div className='mb-[40px] flex items-center justify-between'>
              <div>
                <div className='flex flex-col items-start sm:flex-row sm:items-center'>
                  <b className='mr-[15px] text-[18px] font-bold text-[#000000] sm:text-[20px]'>
                    블랙 - 기간 내 경고 7회 누적
                  </b>
                  <span className='my-[10px] inline-block h-[26px] rounded-[30px] bg-[#e8e8e8] px-[13px] text-[12px] font-bold leading-[26px] text-[#f97090] sm:my-0 sm:text-[14px]'>
                    적용
                  </span>
                </div>
                <p className='my-[5px] text-[14px] font-[500] text-[#000000] sm:text-[16px]'>
                  [브랜드명] 협찬방식
                </p>
                <span className='text-[12px] font-[500] text-[#929292] sm:text-[14px]'>
                  2023.08.14
                </span>
              </div>
              <Image
                src='/assets/icons/penalty-warning-big.webp'
                alt='패널티 아이콘'
                width={26}
                height={27}
              />
            </div>
            <button className='mx-auto block h-[40px] w-[40px] '>
              <Image
                src='/assets/icons/penalty-arrow-bottom.webp'
                alt='화살표 아이콘'
                width={40}
                height={40}
              />
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

PenaltyHistory.getLayout = page => <Layout>{page}</Layout>;

export default PenaltyHistory;
