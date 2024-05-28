import clsx from 'clsx';
import Image from 'next/image';
import { Autoplay, Grid, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';

const dummyNewBrand = Array.from({ length: 20 }, (_, i) => i + 1).map(v => ({
  id: v,
  title: `브랜드${v}`,
  img: `/assets/images/popular-slide${(v % 4) + 1}.webp`,
}));

export function ReviewerNewBrand() {
  return (
    <div className='mx-auto w-full px-[30px] pb-[150px] xl:w-[1040px] xl:px-0 2xl:w-[1420px]'>
      <h2 className='text-[20px] font-bold text-white'>신규 브랜드</h2>
      <div className='pt-[50px]'>
        <Swiper
          modules={[Grid, Pagination, Autoplay]}
          className='reviewer-taste-brand-swiper'
          style={{ paddingBottom: '40px' }}
          slidesPerView={1}
          slidesPerGroup={5}
          spaceBetween={30}
          pagination={{
            // enabled: true,
            clickable: true,
            renderBullet: (index, className) => {
              return `<span class="${clsx(className, '-indent-[9999em] align-bottom')}">${
                index + 1
              }</span>`;
            },
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
              grid: {
                rows: 2,
              },
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 30,
              grid: {
                rows: 2,
              },
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 30,
              grid: {
                rows: 2,
              },
            },
            1536: {
              slidesPerView: 5,
              spaceBetween: 30,
              grid: {
                rows: 2,
              },
            },
          }}
          grid={{
            rows: 2,
            fill: 'row',
          }}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
        >
          {dummyNewBrand.map(v => (
            <SwiperSlide key={v.id} className='group relative cursor-pointer'>
              <div className='absolute left-0 top-0 z-10 h-full w-full rounded-[10px] bg-[#fff] opacity-0 group-hover:opacity-40' />
              <Image
                src={v.img}
                alt={v.title}
                width={270}
                height={270}
                className='aspect-square w-full rounded-[10px] object-cover'
              />
              <div className='absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]'>
                <p className='mb-[5px] text-center text-[16px] font-bold text-white group-hover:text-[#f97090]'>
                  {v.title}
                </p>
                <button className='border border-[#fff] px-[10px] py-[4px] text-sm text-[#fff] group-hover:border-[#8586db] group-hover:text-[#f97090]'>
                  보러가기 →
                </button>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
