import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { AdvertiserSidebar } from 'src/components/advertiser-sidebar';
import { Layout } from 'src/components/layout';
import GradePopup from 'src/components/mypage/grade-popup';

import { type NextPageWithLayout } from 'src/types/common';

interface Props {}

const userTypeTab = ['서포터', '메이커'];
const filterMenuTab = ['전체', '취소', '완료'];
const monthTab = ['1개월', '3개월', '6개월', '1년'];

const AdvertiserDashboard: NextPageWithLayout<Props> = () => {
  const [currentTab, setCurrentTab] = useState(0);
  const [currentFilterTab, setCurrentFilterTab] = useState(0);
  const [currentMonthTab, setCurrentMonthTab] = useState(0);

  return (
    <div className='md:flex'>
      <AdvertiserSidebar />
      <div className='mx-auto mt-[100px] w-full px-[20px] md:w-[80%] xl:w-[1040px] xl:px-0 2xl:w-[1420px]'>
        <b className='text-[30px] font-[500] text-[#fff]'>대시보드</b>
        <div className='mt-[40px] items-end justify-between border-[#707070] md:flex md:border-b'>
          <ul className='flex items-center border-b border-[#707070] md:border-0'>
            {userTypeTab.map((v, i) => (
              <li
                key={i}
                className={`relative mr-[5px] cursor-pointer py-[5px] text-[18px] font-bold text-[#fff] before:absolute before:bottom-[-4px] before:left-0 before:h-[6px] before:w-full before:bg-[#8586db] md:text-[20px] 2xl:text-[25px] ${
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
          <div className='mt-[30px] flex items-center md:mb-[10px] md:mt-0'>
            <Link
              href='/advertiser/dashboard/brand-activities'
              className='mr-[20px] block h-[40px] w-[150px] rounded-[5px] bg-[#f97090] text-center text-[18px] font-bold leading-[40px] text-[#fff] md:h-[50px] md:rounded-[10px] md:text-[20px] md:leading-[50px]'
            >
              브랜드 활동 정보
            </Link>
            <Link
              href='/advertiser/dashboard/manner-evaluate'
              className='block h-[40px] w-[150px] rounded-[5px] bg-[#8586db] text-center text-[18px] font-bold leading-[40px] text-[#fff] md:h-[50px] md:rounded-[10px] md:text-[20px] md:leading-[50px]'
            >
              받은 매너 평가
            </Link>
          </div>
        </div>
        <div className='mb-[20px] mt-[50px] border-b border-[#707070] pb-[10px]'>
          <ul className='flex items-center gap-[30px] md:gap-[50px]'>
            {filterMenuTab.map((f, i) => (
              <li
                key={i}
                className={`cursor-pointer text-[18px]  font-bold md:text-[20px] ${
                  currentFilterTab === i ? 'text-[#f97090]' : 'text-[#fff]'
                }`}
                onClick={() => setCurrentFilterTab(i)}
              >
                {f}
              </li>
            ))}
          </ul>
        </div>
        <div className='items-center justify-between border-b border-[#707070] pb-[15px] xl:flex'>
          <ul className='flex items-center gap-[15px] md:gap-[25px]'>
            {monthTab.map((m, i) => (
              <li
                key={i}
                className={`h-[30px] w-[60px] cursor-pointer rounded-[5px] bg-[#000] text-center text-[16px] font-bold leading-[28px] text-[#fff] md:h-[40px] md:w-[80px] md:rounded-[10px] md:text-[18px] md:leading-[40px] ${
                  currentMonthTab === i ? 'bg-[#f97090]' : 'border border-[#707070]'
                }`}
                onClick={() => setCurrentMonthTab(i)}
              >
                {m}
              </li>
            ))}
          </ul>
          <div className='mt-[20px] xl:mt-0'>
            <input type='date' />
            <span className='mx-[5px] text-[#fff]'>-</span>
            <input type='date' />
            <button className='ml-[10px] h-[40px] w-[100px] rounded-[5px] bg-[#8586db] text-[18px] font-bold text-[#fff] sm:text-[20px] md:rounded-[10px]'>
              조회
            </button>
          </div>
        </div>
        <div className='mt-[10px] items-center text-[14px] md:mt-[20px] md:flex lg:justify-end xl:text-[16px]'>
          <select className='mr-[10px] mt-[10px] h-[40px] w-[185px] rounded-[5px] pl-[15px] md:mt-0 md:w-[155px]'>
            <option>브랜드명</option>
          </select>
          <select className='mr-[10px] mt-[10px] h-[40px] w-[185px] rounded-[5px] pl-[15px] md:mt-0 md:w-[155px]'>
            <option>SNS 채널</option>
          </select>
          <select className='mr-[10px] mt-[10px] h-[40px] w-[185px] rounded-[5px] pl-[15px] md:mt-0 md:w-[155px]'>
            <option>카테고리</option>
          </select>
          <select className='mr-[10px] mt-[10px] h-[40px] w-[185px] rounded-[5px] pl-[15px] md:mt-0 md:w-[155px]'>
            <option>협찬방식</option>
          </select>
          <button className='ml-[10px] mt-[10px] h-[40px] w-[100px] rounded-[5px] bg-[#8586db] text-[18px] font-bold text-[#fff] md:mt-0 md:rounded-[10px] xl:text-[20px]'>
            조회
          </button>
        </div>
        <div className='mb-[100px] mt-[55px]'>
          <b className='mb-[15px] block text-[20px] font-bold text-[#f97090]'>전체 (19)</b>
          <ul>
            <li className='rounded-[5px] bg-[#fff] p-[15px] md:p-[30px] lg:flex lg:justify-between'>
              <div className='flex flex-wrap gap-[10px]'>
                <div className='h-[80px] w-[80px] rounded-full bg-[#8586db] text-center text-[20px] font-[500] leading-[80px] text-[#fff]'>
                  완료
                </div>
                <div className='ml-[20px]'>
                  <span className='text-[16px] font-[500] text-[#2d2d2d]'>2022.05.30</span>
                  <b className='mt-[10px] block text-[16px] text-[#2d2d2d]'>브랜드명</b>
                </div>
                <div className='ml-[20px]'>
                  <span>콘텐츠번호 :</span>
                  <b>90151045</b>
                  <ul className='mt-[10px] flex items-center'>
                    <li className='relative mr-[20px] h-[30px] before:absolute before:right-[-10px] before:top-[4px] before:block before:h-[20px] before:w-[1px] before:bg-[#707070]'>
                      <Image
                        src='/assets/icons/sns-channel-youtube.webp'
                        alt='sns 아이콘'
                        width={30}
                        height={30}
                      />
                    </li>
                    <li className='relative mr-[20px] h-[30px] rounded-[15px] border border-[#2d2d2d] px-[8px] text-[16px] font-bold leading-[30px] before:absolute before:right-[-10px] before:top-[4px] before:block before:h-[20px] before:w-[1px] before:bg-[#707070]'>
                      여행
                    </li>
                    <li className='relative h-[30px]'>제품협찬</li>
                  </ul>
                </div>
              </div>
              <div className='mt-[20px] w-[210px] sm:mt-0'>
                <div className='flex gap-[10px]'>
                  <button className='h-[35px] w-[100px] rounded-[10px] border border-[#f97090] text-[#f97090]'>
                    관리자 문의
                  </button>
                  <button className='h-[35px] w-[100px] rounded-[10px] border border-[#8586db] text-[#8586db]'>
                    광고주 문의
                  </button>
                </div>
                <button className='mt-[15px] h-[35px] w-full rounded-[10px] bg-[#f97090] text-[16px] font-[500] text-[#fff]'>
                  브랜드 제품소개서 바로가기
                </button>
              </div>
            </li>
            <li className='mt-[50px] rounded-[5px] bg-[#fff] p-[15px] md:p-[30px] lg:flex lg:justify-between'>
              <div className='flex flex-wrap gap-[10px]'>
                <div className='h-[80px] w-[80px] rounded-full bg-[#f97090] text-center text-[20px] font-[500] leading-[80px] text-[#fff]'>
                  취소
                </div>
                <div className='ml-[20px]'>
                  <span className='text-[16px] font-[500] text-[#2d2d2d]'>2022.05.16</span>
                  <b className='mt-[10px] block text-[16px] text-[#2d2d2d]'>브랜드명</b>
                </div>
                <div className='ml-[20px]'>
                  <span>콘텐츠번호 :</span>
                  <b>90151031</b>
                  <ul className='mt-[10px] flex items-center'>
                    <li className='relative mr-[20px] h-[30px] before:absolute before:right-[-10px] before:top-[4px] before:block before:h-[20px] before:w-[1px] before:bg-[#707070]'>
                      <Image
                        src='/assets/icons/sns-channel-blog.webp'
                        alt='sns 아이콘'
                        width={30}
                        height={30}
                      />
                    </li>
                    <li className='relative mr-[20px] h-[30px] rounded-[15px] border border-[#2d2d2d] px-[8px] text-[16px] font-bold leading-[30px] before:absolute before:right-[-10px] before:top-[4px] before:block before:h-[20px] before:w-[1px] before:bg-[#707070]'>
                      식품
                    </li>
                    <li className='relative h-[30px]'>제품협찬</li>
                  </ul>
                </div>
              </div>
              <div className='mt-[20px] w-[210px] sm:mt-0'>
                <div className='flex gap-[10px]'>
                  <button className='h-[35px] w-[100px] rounded-[10px] border border-[#f97090] text-[#f97090]'>
                    관리자 문의
                  </button>
                  <button className='h-[35px] w-[100px] rounded-[10px] border border-[#8586db] text-[#8586db]'>
                    광고주 문의
                  </button>
                </div>
                <button className='mt-[15px] h-[35px] w-full rounded-[10px] bg-[#f97090] text-[16px] font-[500] text-[#fff]'>
                  브랜드 제품소개서 바로가기
                </button>
              </div>
            </li>
            <li className='mt-[50px] rounded-[5px] bg-[#fff] p-[15px] md:p-[30px] lg:flex lg:justify-between'>
              <div className='flex flex-wrap gap-[10px]'>
                <div className='h-[80px] w-[80px] rounded-full bg-[#8586db] text-center text-[20px] font-[500] leading-[80px] text-[#fff]'>
                  완료
                </div>
                <div className='ml-[20px]'>
                  <span className='text-[16px] font-[500] text-[#2d2d2d]'>2022.05.30</span>
                  <b className='mt-[10px] block text-[16px] text-[#2d2d2d]'>브랜드명</b>
                </div>
                <div className='ml-[20px]'>
                  <span>콘텐츠번호 :</span>
                  <b>90151045</b>
                  <ul className='mt-[10px] flex items-center'>
                    <li className='relative mr-[20px] h-[30px] before:absolute before:right-[-10px] before:top-[4px] before:block before:h-[20px] before:w-[1px] before:bg-[#707070]'>
                      <Image
                        src='/assets/icons/sns-channel-youtube.webp'
                        alt='sns 아이콘'
                        width={30}
                        height={30}
                      />
                    </li>
                    <li className='relative mr-[20px] h-[30px] rounded-[15px] border border-[#2d2d2d] px-[8px] text-[16px] font-bold leading-[30px] before:absolute  before:right-[-10px] before:top-[4px] before:block before:h-[20px] before:w-[1px] before:bg-[#707070]'>
                      여행
                    </li>
                    <li className='relative h-[30px]'>제품협찬</li>
                  </ul>
                </div>
              </div>
              <div className='mt-[20px] w-[210px] sm:mt-0'>
                <div className='flex gap-[10px]'>
                  <button className='h-[35px] w-[100px] rounded-[10px] border border-[#f97090] text-[#f97090]'>
                    관리자 문의
                  </button>
                  <button className='h-[35px] w-[100px] rounded-[10px] border border-[#8586db] text-[#8586db]'>
                    광고주 문의
                  </button>
                </div>
                <button className='mt-[15px] h-[35px] w-full rounded-[10px] bg-[#f97090] text-[16px] font-[500] text-[#fff]'>
                  브랜드 제품소개서 바로가기
                </button>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

AdvertiserDashboard.getLayout = page => <Layout>{page}</Layout>;

export default AdvertiserDashboard;
