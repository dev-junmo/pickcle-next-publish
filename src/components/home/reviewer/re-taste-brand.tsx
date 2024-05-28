import clsx from 'clsx';
import Image from 'next/image';
import { Autoplay, Grid, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';

const dummyTasteBrand = Array.from({ length: 16 }, (_, i) => i + 1).map(v => ({
  id: v,
  title: `브랜드${v}`,
  img: `/assets/images/popular-slide${(v % 4) + 1}.webp`,
}));

export function ReviewerTasteBrand() {
  return (
    <div className='relative mx-auto w-full px-[30px] pb-[107px] pt-[100px] xl:w-[1040px] xl:px-0 2xl:w-[1420px]'>
      <h2 className='text-[20px] font-bold text-white'>취향맞춤 브랜드</h2>
      <div className='pt-[50px]'>
        <Swiper
          className='reviewer-taste-brand-swiper'
          modules={[Pagination, Grid, Autoplay]}
          style={{ paddingBottom: '40px' }}
          slidesPerView={1}
          slidesPerGroup={4}
          spaceBetween={47}
          pagination={{
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
              spaceBetween: 35,
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
          {dummyTasteBrand.map(v => (
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
  );
}
