import Image from 'next/image';
import { Autoplay, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import { useEffect, useState } from 'react';

const dummySlides = Array.from({ length: 10 }, (_, i) => i + 1).map(v => ({
  id: v,
  title: `브랜드${v}`,
  img: `/assets/images/popular-slide${(v % 4) + 1}.webp`,
}));

const bestDummySlides = Array.from({ length: 10 }, (_, i) => i + 1).map(v => ({
  id: 10 + v,
  title: `브랜드${v}`,
  img: `/assets/images/best-slide${(v % 4) + 1}.webp`,
}));

export function HomePopularBrands() {
  const [rankingFirstFade, setRankingFirstFade] = useState(false);
  const [rankingSecondeFade, setRankingSecondeFade] = useState(false);
  const [rankingThirdeFade, setRankingThirdeFade] = useState(false);

  useEffect(() => {
    const handleShowButton = () => {
      console.log(window.scrollY);
      if (window.scrollY > 1100) {
        setRankingFirstFade(true);
      } else {
        setRankingFirstFade(false);
      }

      if (window.scrollY > 1500) {
        setRankingSecondeFade(true);
      } else {
        setRankingSecondeFade(false);
      }

      if (window.scrollY > 1700) {
        setRankingThirdeFade(true);
      } else {
        setRankingThirdeFade(false);
      }
    };

    window.addEventListener('scroll', handleShowButton);
    return () => {
      window.removeEventListener('scroll', handleShowButton);
    };
  }, []);

  return (
    <div className='block justify-between px-[30px] pb-[150px] 2xl:mx-auto 2xl:flex 2xl:w-[1420px]'>
      <div className='w-full 2xl:w-[620px]'>
        <div className='flex items-center justify-between'>
          <h2 className='text-[20px] font-bold text-white'>인기 브랜드</h2>
          <button className='h-[25px] w-[51px] bg-[url(/assets/icons/contents-more-arrow.webp)] hover:bg-[url(/assets/icons/contents-more-arrow-hover.webp)]' />
        </div>
        {/* TOP 3 */}
        <div className='gap-x-[60px] pt-[50px] text-white sm:flex 2xl:flex-wrap'>
          {Array.from({ length: 3 }, (_, i) => i + 1).map(v => (
            <div
              key={v}
              className={`
              ${v === 1 ? '2xl:w-full' : 'w-auto 2xl:mt-4'}
              mt-[30px]
              opacity-0
              2xl:mt-0
              ${
                v === 1 && rankingFirstFade
                  ? 'animate-fade-up animate-fill-forwards'
                  : v !== 1 && rankingSecondeFade
                  ? 'animate-fade-up animate-fill-forwards'
                  : 'animate-fade-down animate-reverse animate-fill-forwards'
              }
            `}
            >
              <picture className='relative flex'>
                <Image
                  src={`/assets/images/popular${v}.jpg`}
                  width={v === 1 ? 620 : 310}
                  height={v === 1 ? 300 : 280}
                  alt={`${v}위 이미지`}
                  className={`w-[600px] rounded-[10px] object-cover 2xl:w-auto ${
                    v === 1
                      ? '2xl:h-[310px] 2xl:w-[620px] 2xl:flex-1'
                      : '2xl:h-[280px] 2xl:w-[300px]'
                  }`}
                />
                {/* img position absolute으로 비율 지정 */}
                <Image
                  src={`/assets/icons/ranking${v}.webp`}
                  alt=''
                  width={v === 1 ? 48 : v === 2 ? 43 : 35}
                  height={v === 1 ? 74 : v === 2 ? 65 : 47}
                  className='absolute left-2.5 top-0'
                />
              </picture>
              <p className='text-center text-[18px] font-bold'>브랜드 상품</p>
            </div>
          ))}
        </div>
        {/* Slides */}
        <div
          className={`pt-[59px] ${
            rankingThirdeFade
              ? 'animate-fade-up animate-fill-forwards'
              : 'animate-fade-down animate-reverse animate-fill-forwards'
          }`}
        >
          <Swiper
            slidesPerView={3}
            slidesPerGroup={3}
            className='home-popular-brands-swiper'
            modules={[Autoplay]}
            spaceBetween={36}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
            breakpoints={{
              768: {
                slidesPerView: 3,
                spaceBetween: 36,
              },
              1024: {
                slidesPerView: 5,
                spaceBetween: 36,
              },
              1536: {
                slidesPerView: 3,
                spaceBetween: 36,
              },
            }}
          >
            {dummySlides.map(v => (
              <SwiperSlide key={v.id}>
                <Image
                  src={v.img}
                  alt={v.title}
                  width={270}
                  height={270}
                  className='aspect-square w-full rounded-[10px] object-cover'
                />
                <p className='text-center text-[16px] font-bold text-white'>{v.title}</p>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <div className='mt-[100px] w-full 2xl:mt-0 2xl:w-[620px]'>
        <div className='flex items-center justify-between'>
          <h2 className='text-[20px] font-bold text-white'>Best 리뷰어</h2>
          <button className='h-[25px] w-[51px] bg-[url(/assets/icons/contents-more-arrow.webp)] hover:bg-[url(/assets/icons/contents-more-arrow-hover.webp)]' />
        </div>
        {/* TOP 3 */}
        <div className='gap-x-[60px] pt-[50px] text-white sm:flex 2xl:flex-wrap'>
          {Array.from({ length: 3 }, (_, i) => i + 1).map(v => (
            <div
              key={v}
              className={`
              ${v === 1 ? '2xl:w-full' : 'w-auto 2xl:mt-4'}
              mt-[30px]
              opacity-0
              2xl:mt-0
              ${
                v === 1 && rankingFirstFade
                  ? 'animate-fade-up animate-fill-forwards'
                  : v !== 1 && rankingSecondeFade
                  ? 'animate-fade-up animate-fill-forwards'
                  : 'animate-fade-down animate-reverse animate-fill-forwards'
              }
            `}
            >
              <picture className='relative flex'>
                <Image
                  src={`/assets/images/best${v}.webp`}
                  width={v === 1 ? 620 : 310}
                  height={v === 1 ? 300 : 280}
                  alt={`${v}위 이미지`}
                  className={`w-[600px] rounded-[10px] object-cover 2xl:w-auto ${
                    v === 1
                      ? '2xl:h-[310px] 2xl:w-[620px] 2xl:flex-1'
                      : '2xl:h-[280px] 2xl:w-[300px]'
                  }`}
                />
                {/* img position absolute으로 비율 지정 */}
                <Image
                  src={`/assets/icons/ranking${v}.webp`}
                  alt=''
                  width={v === 1 ? 48 : v === 2 ? 43 : 35}
                  height={v === 1 ? 74 : v === 2 ? 65 : 47}
                  className='absolute left-2.5 top-0'
                />
              </picture>
              <p className='text-center text-[18px] font-bold'>브랜드 상품</p>
            </div>
          ))}
        </div>
        {/* Slides */}
        <div
          className={`pt-[59px] ${
            rankingThirdeFade
              ? 'animate-fade-up animate-fill-forwards'
              : 'animate-fade-down animate-reverse animate-fill-forwards'
          }`}
        >
          <Swiper
            slidesPerView={3}
            slidesPerGroup={3}
            className='home-popular-brands-swiper'
            modules={[Autoplay]}
            spaceBetween={36}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
            breakpoints={{
              768: {
                slidesPerView: 3,
                spaceBetween: 36,
              },
              1024: {
                slidesPerView: 5,
                spaceBetween: 36,
              },
              1536: {
                slidesPerView: 3,
                spaceBetween: 36,
              },
            }}
          >
            {bestDummySlides.map(v => (
              <SwiperSlide key={v.id}>
                <Image
                  src={v.img}
                  alt={v.title}
                  width={270}
                  height={270}
                  className='aspect-square w-full rounded-[10px] object-cover'
                />
                <p className='text-center text-[16px] font-bold text-white'>{v.title}</p>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}
