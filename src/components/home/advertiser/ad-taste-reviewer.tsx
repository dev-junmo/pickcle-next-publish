import clsx from 'clsx';
import Image from 'next/image';
import { Autoplay, Grid, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';

const dummyTasteBrand = Array.from({ length: 16 }, (_, i) => i + 1).map(v => ({
  id: v,
  title: `취향맞춤 리뷰어${v}`,
  img: `/assets/images/taste-reviewer-slide${(v % 4) + 1}.webp`,
}));

export function AdvertiserTasteReviewer() {
  return (
    <div className='mx-auto w-full px-[30px] pb-[107px] pt-[100px] xl:w-[1040px] 2xl:w-[1420px]'>
      <h2 className='text-[20px] font-bold text-white'>취향맞춤 리뷰어</h2>
      <div className='pt-[50px]'>
        <Swiper
          modules={[Grid, Pagination, Autoplay]}
          className='reviewer-taste-brand-swiper'
          style={{ paddingBottom: '42px' }}
          slidesPerView={1}
          slidesPerGroup={5}
          spaceBetween={18}
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
              spaceBetween: 35,
              grid: {
                rows: 2,
              },
            },
            1536: {
              slidesPerView: 5,
              spaceBetween: 18,
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
            <SwiperSlide key={v.id} className='mb-[24px]'>
              <div className='rounded-[20px] bg-[#fff] px-[10px] pt-[13px]'>
                <div className='mb-[10px] flex items-center gap-[7px]'>
                  <Image
                    src='/assets/images/reviewer-profile.webp'
                    width={30}
                    height={30}
                    alt='유저 프로필'
                  />
                  <span className='text-[14px] font-medium'>미우진</span>
                </div>
                <Image
                  src={v.img}
                  alt={v.title}
                  width={250}
                  height={250}
                  className='aspect-square w-full rounded-[10px] object-cover'
                />
                <div className='flex items-center justify-center py-[5px]'>
                  <Image
                    src='/assets/icons/heart-active.webp'
                    alt='좋아요 아이콘'
                    width={25}
                    height={25}
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
