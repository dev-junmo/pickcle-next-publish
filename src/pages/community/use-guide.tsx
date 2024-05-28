import Image from 'next/image';
import { useState } from 'react';
import { Layout } from 'src/components/layout';
import Membership from 'src/components/use-guide/membership';
import PointPayment from 'src/components/use-guide/point-payment';
import Portfolio from 'src/components/use-guide/portfolio';
import ServiceGuide from 'src/components/use-guide/service-guide';
import { type NextPageWithLayout } from 'src/types/common';
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

interface Props {}

const guideTab = [
  {
    name: 'service-guide',
    title: '서비스 \n 이용안내',
    bgLength: 'bg-[length:78px_82px]',
    bgUrl: 'bg-[url(/assets/icons/use-guide-icon-01.webp)]',
    bgUrlActive: 'bg-[url(/assets/icons/use-guide-icon-01-active.webp)]',
  },
  {
    name: 'point-payment',
    title: `포인트 지급 \n 활동 점수 기준`,
    bgLength: 'bg-[length:75px_75px]',
    bgUrl: 'bg-[url(/assets/icons/use-guide-icon-02.webp)]',
    bgUrlActive: 'bg-[url(/assets/icons/use-guide-icon-02-active.webp)]',
  },
  {
    name: 'membership',
    title: `멤버쉽 \n 등급별 기준`,
    bgLength: 'bg-[length:83px_53px]',
    bgUrl: 'bg-[url(/assets/icons/use-guide-icon-03.webp)]',
    bgUrlActive: 'bg-[url(/assets/icons/use-guide-icon-03-active.webp)]',
  },
  {
    name: 'portfolio',
    title: `포트폴리오 \n 소개서 작성 팁!`,
    bgLength: 'bg-[length:75px_75px]',
    bgUrl: 'bg-[url(/assets/icons/use-guide-icon-04.webp)]',
    bgUrlActive: "bg-[url('/assets/icons/use-guide-icon-04-active.webp')]",
  },
];

const UseGuide: NextPageWithLayout<Props> = () => {
  const [currentTab, setCurrentTab] = useState(0);

  return (
    <div className='flex flex-col items-center justify-center bg-[#fff]'>
      <div className='relative mx-auto px-[30px] pb-[400px] pt-[200px] sm:px-[80px] xl:w-[1040px] xl:px-[30px] 2xl:w-[1432px]'>
        <b className='text-[45px] text-[#e93963]'>service Guide</b>
        <Image src='/assets/icons/logo.webp' alt='픽클 로고' width={118} height={40} />
        <ul className='mt-[124px] flex flex-wrap items-center justify-center gap-[50px] xl:flex-nowrap xl:justify-end xl:gap-[37px] 2xl:pl-[70px]'>
          {guideTab.map((g, i) => (
            <li
              key={i}
              className={`
                ${
                  currentTab === i
                    ? `shadow-[0_0_30px_0_#e9396277] ${g.bgUrlActive}`
                    : `shadow-[0_0_30px_0_#d3d3d3] ${g.bgUrl}`
                }
                guideTab
                group
                h-[295px] 
                w-[295px]
                cursor-pointer
                rounded-[20px]
                bg-[#fff] 
                bg-[right_30px_bottom_30px]
                bg-no-repeat 
                xl:h-[235px]
                xl:w-[235px]
                2xl:h-[295px] 
                2xl:w-[295px] 
                ${g.bgLength}
                px-[30px] 
                pb-[30px] 
                pt-[50px] 
                hover:shadow-[0_0_30px_0_#e9396277] 
                even:hover:shadow-[0_0_30px_0_#b4b5df]
              `}
              onClick={() => setCurrentTab(i)}
            >
              <span
                className={`${
                  currentTab === i ? 'text-[#000]' : 'text-[#7b7b7b]'
                } whitespace-pre-line text-[20px] font-bold group-hover:text-[#000] 2xl:text-[25px]`}
              >
                {g.title}
              </span>
            </li>
          ))}
        </ul>
        <div className='absolute bottom-[150px] left-[50%] translate-x-[-50%]'>
          <div className='mx-auto flex h-[50px] w-[27px] justify-center rounded-[50px] border border-[#e93963] py-[7px]'>
            <span className='inline-block h-[10px] w-[3px] rounded-lg bg-[#8586db]' />
          </div>
          <p className='mt-[8px] text-[12px] font-[500] text-[#8586db]'>SCROLL DOWN</p>
        </div>
      </div>
      {guideTab[currentTab].name === 'service-guide' && <ServiceGuide />}
      {guideTab[currentTab].name === 'point-payment' && <PointPayment />}
      {guideTab[currentTab].name === 'membership' && <Membership />}
      {guideTab[currentTab].name === 'portfolio' && <Portfolio />}
    </div>
  );
};

UseGuide.getLayout = page => <Layout>{page}</Layout>;

export default UseGuide;
