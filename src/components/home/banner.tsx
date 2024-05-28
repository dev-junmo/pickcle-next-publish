import clsx from 'clsx';
import Image from 'next/image';
import { Autoplay, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';

export function HomeBanner() {
  return (
    <Swiper
      className='home-banner-swiper'
      modules={[Pagination, Autoplay]}
      autoplay={{ delay: 5000, disableOnInteraction: true }}
      pagination={{
        enabled: true,
        clickable: true,
        renderBullet: (index, className) => {
          return `<span class="${clsx(className, '-indent-[9999em] align-bottom')}">${
            index + 1
          }</span>`;
        },
      }}
    >
      {Array.from({ length: 5 }, (_, i) => (
        <SwiperSlide key={i}>
          <Image
            src='/assets/images/main-banner.webp'
            width={1920}
            height={690}
            alt='banner'
            className='min-h-[300px] w-full object-cover'
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
