import Image from 'next/image';
import { type NextPageWithLayout } from 'src/types/common';
import { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

interface Props {
  contentsTitle: string;
}

const dummyBrands = Array.from({ length: 24 }, (_, i) => i + 1).map(v => {
  const name = {
    1: '모로칸오일',
    2: '비욘드',
    3: '오아',
  }[(v % 3) + 1];

  return { id: v, name: name || '', img: `/assets/images/brand${(v % 3) + 1}.webp` };
});

export const HomeNewBrands: NextPageWithLayout<Props> = props => {
  const { contentsTitle } = props;

  return (
    <div className='px-[30px] pb-[151.2px] text-white 2xl:mx-auto 2xl:w-[1420px] 2xl:px-0'>
      <h2 className='mb-[31px] text-[20px] font-bold'>{contentsTitle}</h2>
      {/* <div className='flex flex-wrap gap-[15px] pt-[46px]'> */}
      <Swiper
        modules={[Autoplay]}
        className='home-rolling-swiper'
        slidesPerView={3}
        // slidesPerGroup={3}
        spaceBetween={15}
        speed={3000}
        loop={true}
        autoplay={{
          delay: 1,
          disableOnInteraction: false,
          pauseOnMouseEnter: false,
          stopOnLastSlide: false,
          waitForTransition: true,
        }}
        breakpoints={{
          768: {
            slidesPerView: 5,
            spaceBetween: 15,
          },
          1024: {
            slidesPerView: 8,
            spaceBetween: 15,
          },
          1536: {
            slidesPerView: 12,
            spaceBetween: 15,
          },
        }}
      >
        {dummyBrands.map(v => (
          <SwiperSlide key={v.id}>
            <div className='flex items-center gap-2.5 text-[14px] font-medium'>
              <Image
                src={v.img}
                alt={v.name}
                width={50}
                height={50}
                className='aspect-square object-cover'
              />
              {v.name}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      {/* </div> */}
    </div>
  );
};
