import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import { useState, type ComponentProps } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode } from 'swiper';

export type HeaderProps = ComponentProps<'header'>;

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

export function AdvertiserSidebar({ className, ...props }: HeaderProps) {
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
      <div className='hidden w-[23%] bg-[#f1f1ff] py-[30px] md:block xl:w-[250px]'>
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
    </>
  );
}
