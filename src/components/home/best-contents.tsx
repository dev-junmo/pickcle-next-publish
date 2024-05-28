import clsx from 'clsx';
import Image from 'next/image';
import { Autoplay, Grid, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';

const dummyBestContents: {
  id: number;
  title: string;
  content: string;
  sns: string;
  img: string;
}[] = Array.from({ length: 20 }, (_, i) => i + 1).map(v => {
  const moduler = (v % 4) + 1;

  const snsIcon = {
    1: '/assets/icons/sns-channel-instagram.webp',
    2: '/assets/icons/sns-channel-tiktok.webp',
    3: '/assets/icons/sns-channel-blog.webp',
    4: '/assets/icons/sns-channel-youtube.webp',
  }[moduler];

  return {
    id: v,
    title: '스아게 K (suage K) / 제품협찬',
    content: `[서울/홍대 맛집] 스아게 K (suage K) :
  삿포로의 소울 푸드 스프카레의 맛!
  #스아게 #스프카레 #스프카레맛집 `,
    sns: snsIcon || '',
    img: `/assets/images/contents${moduler}.webp`,
  };
});

export function HomeBestContents() {
  return (
    <div className='px-[30px] pb-[107px] pt-[100px] 2xl:mx-auto 2xl:w-[1420px] 2xl:px-0'>
      <h2 className='text-[20px] font-bold text-white'>BEST 콘텐츠</h2>
      <div className='pt-[50px]'>
        <Swiper
          modules={[Grid, Pagination, Autoplay]}
          className='home-best-contents-swiper'
          style={{ paddingBottom: '44px' }}
          // slidesPerView={5}
          slidesPerGroup={5}
          // spaceBetween={58}
          slidesPerView={1}
          spaceBetween={10}
          pagination={{
            enabled: true,
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
              spaceBetween: 58,
              grid: {
                rows: 2,
              },
            },
          }}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          grid={{
            rows: 2,
            fill: 'row',
          }}
        >
          {dummyBestContents.map(v => (
            <SwiperSlide key={v.id} className='w-full rounded-[25px] px-3 pb-4 pt-2.5 text-white'>
              <div className='flex w-full items-center justify-between pb-2.5'>
                <div className='flex items-center gap-[5px]'>
                  <Image
                    src='/assets/images/user-profile.webp'
                    width={30}
                    height={30}
                    alt='유저 프로필'
                  />
                  <span className='text-[14px] font-medium'>Raipiel</span>
                </div>
              </div>
              <Image
                src={v.img}
                alt='best 콘텐츠 이미지'
                width={200}
                height={180}
                className='w-full rounded-[10px] object-cover'
              />
              <div className='flex items-center py-[5px]'>
                <div className='flex flex-1 items-center'>
                  <Image src={v.sns} alt='sns 아이콘' width={30} height={30} />
                  <span className='text-[16px] font-medium sm:text-[14px] 2xl:text-[12px]'>
                    {v.title}
                  </span>
                </div>
                <button className='h-[25px] w-[25px] bg-[url(/assets/icons/heart-active.webp)] bg-contain' />
              </div>
              <p className='whitespace-pre-line break-all text-[16px] font-medium sm:text-[14px] 2xl:text-[12px]'>
                {v.content}
              </p>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
