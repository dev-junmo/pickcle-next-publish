import clsx from 'clsx';
import Image from 'next/image';
import { Autoplay, Grid, Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';
import { useEffect, useState } from 'react';

const dummyBestReviewer = Array.from({ length: 16 }, (_, i) => i + 1).map(v => ({
  id: v,
  title: `브랜드${v}`,
  img: `/assets/images/ad-best-slide${(v % 4) + 1}.webp`,
}));

export function AdvertiserBesteReviewer() {
  const [rankingFirstFade, setRankingFirstFade] = useState(false);
  const [rankingSecondeFade, setRankingSecondeFade] = useState(false);

  const [swipe, setSwipe] = useState<any>();

  useEffect(() => {
    const handleShowButton = () => {
      console.log(window.scrollY);
      if (window.scrollY > 1000) {
        setRankingFirstFade(true);
      } else {
        setRankingFirstFade(false);
      }

      if (window.scrollY > 1300) {
        setRankingSecondeFade(true);
      } else {
        setRankingSecondeFade(false);
      }
    };

    window.addEventListener('scroll', handleShowButton);
    return () => {
      window.removeEventListener('scroll', handleShowButton);
    };
  }, []);

  return (
    <div className='mx-auto w-full px-[30px] pb-[107px] pt-[100px] xl:w-[1040px] xl:px-0 2xl:w-[1420px]'>
      <h2 className='text-[20px] font-bold text-white'>베스트 리뷰어</h2>
      <div className='mx-auto block grid-cols-3 gap-x-12 px-[30px] pt-[50px] text-white md:grid xl:px-0'>
        {Array.from({ length: 3 }, (_, i) => i + 1).map(v => (
          <div
            key={v}
            className={`opacity-0 ${
              rankingFirstFade
                ? 'animate-fade-up animate-fill-forwards'
                : 'animate-fade-down animate-reverse animate-fill-forwards'
            }`}
          >
            <picture className='relative flex'>
              <Image
                src={`/assets/images/ad-best-reviewer${v}.webp`}
                width={480}
                height={280}
                alt={`${v}위 이미지`}
                className='rounded-[10px] object-cover'
              />
              <Image
                src={`/assets/icons/ranking${v}.webp`}
                alt=''
                width={v === 1 ? 48 : 43}
                height={v === 1 ? 74 : 65}
                className='absolute left-2.5 top-0'
              />
            </picture>
            <p className='text-center text-[18px] font-bold'>브랜드 상품</p>
          </div>
        ))}
      </div>
      {/* Slides */}
      <div
        className={`relative px-[30px] pt-[59px] xl:px-0 ${
          rankingSecondeFade
            ? 'animate-fade-up animate-fill-forwards'
            : 'animate-fade-down animate-reverse animate-fill-forwards'
        }`}
      >
        <button
          className='absolute left-[-20px] top-[50%] z-[10] hidden h-[44px] w-[44px] translate-y-[-20%] bg-[url(/assets/icons/slide-arrow-left.webp)] text-[0px] text-[#fff] md:block xl:left-[-70px]'
          onClick={() => swipe?.slidePrev()}
        >
          backward
        </button>
        <Swiper
          slidesPerView={3}
          className='home-popular-brands-swiper'
          spaceBetween={30}
          modules={[Autoplay]}
          navigation={true}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            768: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 30,
            },
            1536: {
              slidesPerView: 5,
              spaceBetween: 30,
            },
          }}
          onBeforeInit={swipper => setSwipe(swipper)}
        >
          {dummyBestReviewer.map(v => (
            <SwiperSlide key={v.id}>
              <Image
                src={v.img}
                alt={v.title}
                width={260}
                height={254}
                className='aspect-square w-full rounded-[10px] object-cover'
              />
              <p className='text-center text-[16px] font-bold text-white'>{v.title}</p>
            </SwiperSlide>
          ))}
        </Swiper>
        <button
          className='absolute right-[-20px] top-[50%] hidden h-[44px] w-[44px] translate-y-[-20%] bg-[url(/assets/icons/slide-arrow-right.webp)] text-[0px] text-[#fff] md:block xl:right-[-70px]'
          onClick={() => swipe?.slideNext()}
        >
          forward
        </button>
      </div>
    </div>
  );
}
