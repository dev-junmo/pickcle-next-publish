import Image from 'next/image';
import { useState } from 'react';
import { type NextPageWithLayout } from 'src/types/common';

interface Props {
  userType: string;
}

const userTypeTab = ['서포터 포트폴리오', '메이커 포트폴리오'];

export const AllPortfolio: NextPageWithLayout<Props> = ({ userType }) => {
  const [currentTab, setCurrentTab] = useState(0);

  return (
    <div className='mb-[50px] mt-[20px] w-full border-b border-[#ffffff] pb-[50px]'>
      <b className='my-[30px] block text-[25px] font-bold text-[#fff] sm:text-[30px]'>
        전체{userType === 'reviewer' ? '포트폴리오' : '제품소개서'} (2)
      </b>
      <div className='md:flex md:items-center md:justify-between'>
        <ul className='mb-[30px] inline-flex border-b border-[#707070] md:mb-0'>
          {userTypeTab.map((v, i) => (
            <li
              key={i}
              className={`relative mr-[5px] cursor-pointer py-2.5 text-[18px] font-bold text-[#fff] before:absolute before:bottom-[-4px] before:left-0 before:h-[6px] before:w-full sm:text-[20px]
              ${userType === 'reviewer' ? 'before:bg-[#f97090]' : 'before:bg-[#8586db]'}
              ${
                currentTab === i ? 'before:block' : 'before:hidden'
              } first:after:ml-[5px] first:after:inline-block first:after:content-['/'] last:mr-0`}
              onClick={() => {
                setCurrentTab(i);
              }}
            >
              {v}
            </li>
          ))}
        </ul>
        <button
          className={`block h-[40px] w-[158px] rounded-[5px] text-[18px] font-[500] text-[#fff] sm:h-[50px] sm:w-[188px] sm:rounded-[10px] sm:text-[20px] ${
            userType === 'reviewer' ? 'bg-[#f97090]' : 'bg-[#8586db]'
          }`}
        >
          대표지정
        </button>
      </div>
      <ul className='mt-[40px]'>
        <li
          className={`relative mb-[30px] w-full rounded-[5px] border-[5px] bg-[#fff] p-[20px] sm:flex sm:justify-between 2xl:px-[37px] ${
            userType === 'reviewer' ? 'border-[#f97090]' : 'border-[#8586db]'
          }`}
        >
          <span className='absolute right-[15px] top-[20px] block h-[20px] w-[56px] rounded-[10px] bg-[#8586db] text-center text-[16px] font-[500] leading-[20px] text-[#fff]'>
            대표
          </span>
          <div className='md:gap-[15px] lg:flex'>
            <Image
              src='/assets/images/advertiser-thumb-img03.webp'
              alt='포트폴리오 썸네일'
              width={200}
              height={100}
              className='aspect-square h-[100px] rounded-[5px] object-cover'
            />
            <div className='mt-[10px]'>
              <b className='mb-[10px] text-[14px] text-[#000] md:text-[16px]'>
                한율_어린쑥 수분진정플루이드
              </b>
              <ul className='flex items-center md:mt-[10px]'>
                <li className='text-[12px] font-bold text-[#f97090] md:text-[14px]'>#한율</li>
                <li className='text-[12px] font-bold text-[#f97090] md:text-[14px]'>
                  #어린쑥수분진정
                </li>
                <li className='text-[12px] font-bold text-[#f97090] md:text-[14px]'>#피부미인</li>
              </ul>
            </div>
          </div>
          <ul className='mt-[20px] flex items-center gap-[20px]'>
            <li className='relative after:absolute after:right-[-9px] after:top-[5px] after:block after:h-[20px] after:w-[1px] after:bg-[#707070]'>
              <Image
                src='/assets/icons/sns-channel-youtube.webp'
                alt='sns 아이콘'
                width={30}
                height={30}
              />
            </li>
            <li className='relative after:absolute after:right-[-9px] after:top-[3px] after:block after:h-[20px] after:w-[1px] after:bg-[#707070]'>
              <b className='inline-block h-[27px] rounded-[50px] border border-[#868686] px-[8px] text-[14px] leading-[27px] text-[#000]'>
                여행
              </b>
            </li>
            <li>
              <span className='text-[14px] font-[500] text-[#2d2d2d] 2xl:text-[16px]'>
                제품협찬
              </span>
            </li>
          </ul>
        </li>
        <li className='mb-[30px] w-full rounded-[5px] border border-[#dbdbdb] bg-[#fff] p-[20px] sm:flex sm:justify-between 2xl:px-[37px]'>
          <div className='md:gap-[15px] lg:flex'>
            <Image
              src='/assets/images/advertiser-thumb-img03.webp'
              alt='포트폴리오 썸네일'
              width={200}
              height={100}
              className='aspect-square h-[100px] object-cover'
            />
            <div className='mt-[10px]'>
              <b className='mb-[10px] text-[14px] text-[#000] md:text-[16px]'>
                한율_어린쑥 수분진정플루이드
              </b>
              <ul className='flex items-center md:mt-[10px]'>
                <li className='text-[12px] font-bold text-[#f97090] md:text-[14px]'>#한율</li>
                <li className='text-[12px] font-bold text-[#f97090] md:text-[14px]'>
                  #어린쑥수분진정
                </li>
                <li className='text-[12px] font-bold text-[#f97090] md:text-[14px]'>#피부미인</li>
              </ul>
            </div>
          </div>
          <ul className='mt-[20px] flex items-center gap-[20px]'>
            <li className='relative after:absolute after:right-[-9px] after:top-[5px] after:block after:h-[20px] after:w-[1px] after:bg-[#707070]'>
              <Image
                src='/assets/icons/sns-channel-youtube.webp'
                alt='sns 아이콘'
                width={30}
                height={30}
              />
            </li>
            <li className='relative after:absolute after:right-[-9px] after:top-[3px] after:block after:h-[20px] after:w-[1px] after:bg-[#707070]'>
              <b className='inline-block h-[27px] rounded-[50px] border border-[#868686] px-[8px] text-[14px] leading-[27px] text-[#000]'>
                여행
              </b>
            </li>
            <li>
              <span className='text-[14px] font-[500] text-[#2d2d2d] 2xl:text-[16px]'>
                제품협찬
              </span>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
};
