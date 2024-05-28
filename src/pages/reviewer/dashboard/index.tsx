import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { Layout } from 'src/components/layout';
import GradePopup from 'src/components/mypage/grade-popup';

import { type NextPageWithLayout } from 'src/types/common';

interface Props {}

const userTypeTab = ['서포터 활동', '메이커 활동'];
const filterMenuTab = ['전체', '취소', '완료'];
const monthTab = ['1개월', '3개월', '6개월', '1년'];

const ReviewerDashboard: NextPageWithLayout<Props> = () => {
  const [currentTab, setCurrentTab] = useState(0);
  const [currentFilterTab, setCurrentFilterTab] = useState(0);
  const [currentMonthTab, setCurrentMonthTab] = useState(0);

  return (
    <div className='mx-auto mt-[100px] w-full px-[20px] xl:w-[1040px] xl:px-0 2xl:w-[1420px]'>
      <b className='text-[30px] font-[500] text-[#fff]'>대시보드</b>
      <div className='mt-[40px] items-end justify-between border-[#707070] md:flex md:border-b'>
        <ul className='flex items-center border-b border-[#707070] md:border-0'>
          {userTypeTab.map((v, i) => (
            <li
              key={i}
              className={`relative mr-[5px] cursor-pointer py-[7px] text-[18px] font-bold text-[#fff] before:absolute before:bottom-[-4px] before:left-0 before:h-[6px] before:w-full md:text-[20px] 2xl:text-[25px] ${
                currentTab === i ? 'before:block' : 'before:hidden'
              } 
              ${
                currentTab === 0 ? 'before:bg-[#f97090]' : 'before:bg-[#8586db]'
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
            href='/reviewer/dashboard/my-activities'
            className='mr-[20px] block h-[40px] w-[150px] rounded-[5px] bg-[#f97090] text-center text-[18px] font-bold leading-[40px] text-[#fff] md:h-[50px] md:rounded-[10px] md:text-[20px] md:leading-[50px]'
          >
            나의 활동 정보
          </Link>
          <Link
            href='/reviewer/dashboard/manner-evaluate'
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
              className={`cursor-pointer text-[18px] font-bold md:text-[20px] ${
                currentFilterTab === i ? 'text-[#f97090]' : 'text-[#fff]'
              }`}
              onClick={() => setCurrentFilterTab(i)}
            >
              {f}
            </li>
          ))}
        </ul>
      </div>
      <div className='items-center justify-between border-b border-[#707070] pb-[15px] lg:flex'>
        <ul className='flex items-center gap-[15px] md:gap-[25px]'>
          {monthTab.map((m, i) => (
            <li
              key={i}
              className={`h-[30px] w-[60px] cursor-pointer rounded-[5px] bg-[#000] text-center text-[16px] font-bold leading-[28px] text-[#fff] md:h-[40px] md:w-[80px] md:rounded-[10px] md:text-[20px] md:leading-[40px] ${
                currentMonthTab === i ? 'bg-[#f97090]' : 'border border-[#707070]'
              }`}
              onClick={() => setCurrentMonthTab(i)}
            >
              {m}
            </li>
          ))}
        </ul>
        <div className='mt-[20px] flex items-center pr-[23px] lg:mt-0'>
          <input type='date' className='h-[40px] w-[150px] rounded-[10px] px-[10px] text-center' />
          <span className='mx-[5px] text-[#fff]'>-</span>
          <input type='date' className='h-[40px] w-[150px] rounded-[10px] px-[10px] text-center' />
          <button className='ml-[10px] h-[40px] w-[100px] rounded-[5px] bg-[#f97090] text-[20px] font-bold text-[#fff] md:rounded-[10px]'>
            조회
          </button>
        </div>
      </div>
      <div className='mt-[20px] flex flex-wrap items-center gap-[20px] lg:justify-end'>
        <select className='h-[40px] w-[185px] rounded-[5px] bg-[url(/assets/icons/arrow-bottom-small.webp)] bg-[length:20px_20px] bg-[right_11px_top_11px] bg-no-repeat pl-[15px] text-[16px] font-[500] text-[#2d2d2d] md:w-[155px] md:text-[20px] xl:w-[185px]'>
          <option>브랜드명</option>
        </select>
        <select className='h-[40px] w-[185px] rounded-[5px] bg-[url(/assets/icons/arrow-bottom-small.webp)] bg-[length:20px_20px] bg-[right_11px_top_11px] bg-no-repeat pl-[15px] text-[16px] font-[500] text-[#2d2d2d] md:w-[155px] md:text-[20px] xl:w-[185px]'>
          <option>SNS 채널</option>
        </select>
        <select className='h-[40px] w-[185px] rounded-[5px] bg-[url(/assets/icons/arrow-bottom-small.webp)] bg-[length:20px_20px] bg-[right_11px_top_11px] bg-no-repeat pl-[15px] text-[16px] font-[500] text-[#2d2d2d] md:w-[155px] md:text-[20px] xl:w-[185px]'>
          <option>카테고리</option>
        </select>
        <select className='h-[40px] w-[185px] rounded-[5px] bg-[url(/assets/icons/arrow-bottom-small.webp)] bg-[length:20px_20px] bg-[right_11px_top_11px] bg-no-repeat pl-[15px] text-[16px] font-[500] text-[#2d2d2d] md:w-[155px] md:text-[20px] xl:w-[185px]'>
          <option>협찬방식</option>
        </select>
        <button className='h-[40px] w-[100px] rounded-[5px] bg-[#f97090] text-[16px] font-bold text-[#fff] md:mt-0 md:rounded-[10px] md:text-[20px]'>
          조회
        </button>
      </div>
      <div className='mb-[100px] mt-[55px]'>
        <b className='mb-[15px] block text-[20px] font-bold text-[#f97090]'>전체 (19)</b>
        <ul>
          <li className='rounded-[5px] bg-[#fff] p-[15px] md:p-[30px] lg:flex lg:justify-between'>
            <div className='flex flex-wrap items-center gap-[20px]'>
              <div className='h-[80px] w-[80px] rounded-full bg-[#8586db] text-center text-[20px] font-[500] leading-[80px] text-[#fff]'>
                완료
              </div>
              <div className='ml-[20px]'>
                <span className='text-[16px] font-[500] text-[#2d2d2d]'>2022.05.30</span>
                <b className='mt-[10px] block text-[16px] text-[#2d2d2d]'>브랜드명</b>
              </div>
              <div className='ml-[25px]'>
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
              <div className='flex items-center gap-[10px] md:mt-[-38px]'>
                <Link href='/' className='ml-[30px] block text-[20px] font-[500] text-[#d60969]'>
                  결과물 보러가기
                </Link>
                <Image
                  src='/assets/icons/dashboard-link-icon.webp'
                  alt='링크 아이콘'
                  width={20}
                  height={20}
                />
              </div>
            </div>
            <div className='mt-[20px] w-[210px] lg:mt-0'>
              <div className='flex gap-[10px]'>
                <button className='h-[35px] w-[100px] rounded-[10px] border border-[#f97090] text-[#f97090]'>
                  관리자 문의
                </button>
                <button className='h-[35px] w-[100px] rounded-[10px] border border-[#8586db] text-[#8586db]'>
                  광고주 문의
                </button>
              </div>
              <button className='mt-[15px] h-[35px] w-full rounded-[10px] bg-[#8586db] text-[16px] font-[500] text-[#fff]'>
                브랜드 제품소개서 바로가기
              </button>
            </div>
          </li>
          <li className='mt-[50px] rounded-[5px] bg-[#fff] p-[15px] md:p-[30px] lg:flex lg:justify-between'>
            <div className='flex flex-wrap items-center gap-[20px]'>
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
            <div className='mt-[20px] w-[210px] lg:mt-0'>
              <div className='flex gap-[10px]'>
                <button className='h-[35px] w-[100px] rounded-[10px] border border-[#f97090] text-[#f97090]'>
                  관리자 문의
                </button>
                <button className='h-[35px] w-[100px] rounded-[10px] border border-[#8586db] text-[#8586db]'>
                  광고주 문의
                </button>
              </div>
              <button className='mt-[15px] h-[35px] w-full rounded-[10px] bg-[#8586db] text-[16px] font-[500] text-[#fff]'>
                브랜드 제품소개서 바로가기
              </button>
            </div>
          </li>
          <li className='mt-[50px] rounded-[5px] bg-[#fff] p-[15px] md:p-[30px] lg:flex lg:justify-between'>
            <div className='flex flex-wrap items-center gap-[20px]'>
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
            <div className='mt-[20px] w-[210px] lg:mt-0'>
              <div className='flex gap-[10px]'>
                <button className='h-[35px] w-[100px] rounded-[10px] border border-[#f97090] text-[#f97090]'>
                  관리자 문의
                </button>
                <button className='h-[35px] w-[100px] rounded-[10px] border border-[#8586db] text-[#8586db]'>
                  광고주 문의
                </button>
              </div>
              <button className='mt-[15px] h-[35px] w-full rounded-[10px] bg-[#8586db] text-[16px] font-[500] text-[#fff]'>
                브랜드 제품소개서 바로가기
              </button>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

ReviewerDashboard.getLayout = page => <Layout>{page}</Layout>;

export default ReviewerDashboard;
