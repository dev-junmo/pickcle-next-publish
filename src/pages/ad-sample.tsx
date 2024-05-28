import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { Layout } from 'src/components/layout';
import { userStore, userTypeStore } from 'src/status/store';
import { type NextPageWithLayout } from 'src/types/common';
import { FreeMode } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

interface Props {}

// const sideMenu = ['홈', '거래관리', '대시보드', '브랜드 관리', '포인트 관리', '활동점수 / 등급', '기본 정보 수정'];

const sideMenu = [
  {
    name: '홈',
    menu: ['광고주 센터', '서포터 브랜드 제품소개', '메이커 브랜드 제품소개'],
  },
  {
    name: '거래관리',
    menu: ['브랜드의 제안', '리뷰어의 제안', '브랜드 스케줄링'],
  },
  {
    name: '대시보드',
    menu: ['서포터 활동', '메이커 활동', '브랜드 활동 정보', '받은 매너 평가'],
  },
  {
    name: '브랜드 관리',
    menu: ['제품소개서 리스트 관리'],
  },
  {
    name: '포인트 관리',
    menu: ['포인트 내역', '충전신청', '환불신청'],
  },
  {
    name: '활동 점수/등급',
    menu: ['브랜드 활동 점수 / 등급', '패널티 이력 현황'],
  },
  {
    name: '기본 정보 수정',
    menu: [],
  },
  {
    name: '리뷰어 신고하기',
    menu: [],
  },
];

const AdSample: NextPageWithLayout<Props> = () => {
  const [currentMenu, setCurrentMenu] = useState(0);
  const [currentSubMenu, setCurrentSubMenu] = useState(0);

  return (
    <>
      {/* 모바일 버전 사이드 바 */}
      <div className='border-b border-[#fff] text-[#fff] md:hidden'>
        <Swiper
          slidesPerView={3.5}
          // spaceBetween={30}
          freeMode={true}
          modules={[FreeMode]}
          className='!py-[15px]'
        >
          {sideMenu.map((m, i) => (
            <SwiperSlide key={i} className='mx-[25px] !w-auto'>
              <Link href='#' className='block text-center font-bold'>
                {m.name}
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      {/* 피씨버전 사이드 바 */}
      <div className='flex'>
        <div className='hidden h-[100vh] w-[23%] bg-[#f1f1ff] py-[30px] md:block xl:w-[250px]'>
          <ul>
            {sideMenu.map((n, i) => (
              <li key={i}>
                <b
                  className={`${
                    currentMenu === i ? 'bg-[#8586db] text-[#fff]' : ''
                  } inline-block h-[50px] w-full pl-[20px] text-[16px] font-[500] leading-[50px] text-[#2d2d2d]`}
                  onClick={() => setCurrentMenu(i)}
                >
                  {n.name}
                </b>
                <ul
                  className={`${
                    currentMenu === i ? 'block' : 'hidden'
                  } mb-[30px] mt-[15px] pl-[20px]`}
                >
                  {n.menu.map((m, i) => (
                    <li
                      key={i}
                      className={`mb-[10px] text-[14px] font-[500] ${
                        currentSubMenu === i ? 'text-[#f97090]' : 'text-[#2d2d2d]'
                      }`}
                      onClick={() => setCurrentSubMenu(i)}
                    >
                      {m}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
          <button className='mx-auto mt-[35px] block h-[50px] w-[160px] rounded-[10px] bg-[#f97090] text-[18px] font-bold text-[#fff]'>
            메세지
          </button>
        </div>
        <div className='relative flex-1 p-[20px] 2xl:p-[50px]'>
          <div className='w-full rounded-[15px] bg-[#dae1ff] px-[20px] py-[30px] md:flex md:flex-wrap xl:flex-nowrap 2xl:px-[100px]'>
            <div className='mb-[40px] flex items-center justify-between md:w-[70%] md:pr-[30px] xl:mb-0'>
              <Image
                src='/assets/icons/logo.svg'
                alt='광고주 프로필'
                width={100}
                height={100}
                className='h-[100px] rounded-[50%] border border-[#a8a8a8] bg-[#fff] p-[5px]'
              />
              <b className='text-[26px] text-[#2d2d2d]'>몽벨</b>
              <div className='w-[170px] 2xl:mr-[20px]'>
                <button className='foint-bold mx-auto mb-[10px] block h-[40px] w-[146px] rounded-[10px] bg-[#8586db] text-[20px] text-[#fff]'>
                  출석체크
                </button>
                <button className='mx-auto block h-[40px] w-[146px] rounded-[10px] bg-[#868686] text-[20px] font-bold text-[#fff]'>
                  수정
                </button>
                <span className='mt-[7px] text-center text-[12px] font-bold text-[#f97090]'>
                  [2023.08.01-2023.10.30 기준]
                </span>
              </div>
            </div>
            <div className='relative float-left mb-[40px] flex w-[50%] items-center justify-center gap-[35px] pl-[5px] after:absolute after:right-0 after:top-[50%] after:block after:h-[100px] after:w-[1px] after:translate-y-[-50%] after:bg-[#707070] md:w-[30%] md:before:absolute md:before:left-0 md:before:top-[50%] md:before:block md:before:h-[100px] md:before:w-[1px] md:before:translate-y-[-50%] md:before:bg-[#707070] md:after:hidden xl:mb-0 xl:px-[10px] 2xl:w-[23%]'>
              <div className='text-center'>
                <Image
                  src='/assets/icons/message-icon.webp'
                  alt='메세지 아이콘'
                  width={46}
                  height={33}
                  className='mx-auto mb-[20px]'
                />
                <span className='text-[14px] text-[#2d2d2d]'>메세지</span>
              </div>
              <div className='mr-[30px] text-center xl:mr-0'>
                <Image
                  src='/assets/icons/mypage-calendar-icon.webp'
                  alt='메세지 아이콘'
                  width={46}
                  height={33}
                  className='mx-auto mb-[10px]'
                />
                <span className='text-[14px] text-[#2d2d2d]'>스케쥴링</span>
              </div>
            </div>
            <div className='relative float-left w-[50%] md:after:absolute md:after:right-0 md:after:top-[50%] md:after:block md:after:h-[100px] md:after:w-[1px] md:after:translate-y-[-50%] md:after:bg-[#707070] xl:w-[35%] xl:before:absolute xl:before:left-0 xl:before:top-[50%] xl:before:block xl:before:h-[100px] xl:before:w-[1px] xl:before:translate-y-[-50%] xl:before:bg-[#707070] 2xl:flex 2xl:w-[26%] 2xl:flex-col 2xl:justify-center'>
              <ul className='mb-[25px] flex items-center justify-center gap-[10px] px-[5px]'>
                <li>
                  <Image
                    src='/assets/icons/sns-channel-tiktok.webp'
                    alt='sns 아이콘'
                    width={30}
                    height={30}
                  />
                </li>
                <li>
                  <Image
                    src='/assets/icons/sns-channel-youtube.webp'
                    alt='sns 아이콘'
                    width={30}
                    height={30}
                  />
                </li>
                <li>
                  <Image
                    src='/assets/icons/sns-channel-instagram.webp'
                    alt='sns 아이콘'
                    width={30}
                    height={30}
                  />
                </li>
                <li>
                  <Image
                    src='/assets/icons/sns-channel-blog.webp'
                    alt='sns 아이콘'
                    width={30}
                    height={30}
                  />
                </li>
              </ul>
              <span className='block text-center text-[14px] text-[#2d2d2d]'>
                브랜드 SNS 채널 연결
              </span>
            </div>
            <div className='clear-both mt-[40px] pl-[5px] pr-[10px] md:mt-[0px] md:w-[50%] md:pl-[20px] md:pr-[10px] xl:w-[30%] 2xl:flex 2xl:flex-col 2xl:justify-center 2xl:pl-[60px]'>
              <div className='mb-[10px] flex justify-between md:mb-[20px]'>
                <span>쿠폰</span>
                <b>3개</b>
              </div>
              <div className='flex justify-between'>
                <span>포인트</span>
                <b>50,000 P</b>
              </div>
            </div>
          </div>
          <div className='mt-[20px] h-[200px] w-full rounded-[15px] bg-[#fff]' />
        </div>
      </div>
    </>
  );
};

AdSample.getLayout = page => <Layout>{page}</Layout>;

export default AdSample;
