import Image from 'next/image';
import { useState } from 'react';
import { Layout } from 'src/components/layout';
import { type NextPageWithLayout } from 'src/types/common';
import { Autoplay, Grid } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

interface Props {}

const dummyBrands = Array.from({ length: 24 }, (_, i) => i + 1).map(v => {
  const name = {
    1: '모로칸오일',
    2: '비욘드',
    3: '오아',
  }[(v % 3) + 1];

  return { id: v, name: name || '', img: `/assets/images/brand${(v % 3) + 1}.webp` };
});

const CooperativeCompany: NextPageWithLayout<Props> = () => {
  const [brandNum, setBrandNum] = useState('170,000');
  const [contentsNum, setContentsNum] = useState('200,777');

  return (
    <div className='mx-auto w-full pt-[150px] text-center md:pt-[250px] xl:w-[1040px] 2xl:w-[1420px]'>
      <b className='text-[30px] md:text-[45px]'>고민은 편리함만 늦출뿐! 일단 사용해봐!</b>
      <p className='my-[100px] mb-[150px] text-[20px] font-bold md:text-[25px]'>
        현재까지 <span className='mx-[20px] text-[#e93963]'>{brandNum}</span> 개의 브랜드 광고주가
        리뷰어와 협력하여 <span className='mx-[20px] text-[#8586db]'>{contentsNum}</span> 건의
        콘텐츠를 생성했어요.
      </p>
      <div className='w-full'>
        <Swiper
          modules={[Autoplay, Grid]}
          className='column-rolling-swiper'
          slidesPerView={8}
          style={{ height: '520px' }}
          spaceBetween={15}
          direction='vertical'
          speed={3000}
          loop={true}
          // grid={{
          //   rows: 4,
          //   fill: 'row',
          // }}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
        >
          {dummyBrands.map(v => (
            <SwiperSlide key={v.id}>
              <div className='flex w-[200px] items-center gap-[15px] text-[14px] font-medium'>
                <Image
                  src={v.img}
                  alt={v.name}
                  width={50}
                  height={50}
                  className='aspect-square object-cover'
                />
                {v.name}
              </div>
              <div className='hidden w-[200px] items-center gap-[15px] text-[14px] font-medium sm:flex'>
                <Image
                  src={v.img}
                  alt={v.name}
                  width={50}
                  height={50}
                  className='aspect-square object-cover'
                />
                {v.name}
              </div>
              <div className='hidden w-[200px] items-center gap-[15px] text-[14px] font-medium md:flex'>
                <Image
                  src={v.img}
                  alt={v.name}
                  width={50}
                  height={50}
                  className='aspect-square object-cover'
                />
                {v.name}
              </div>
              <div className='hidden w-[200px] items-center gap-[15px] text-[14px] font-medium md:flex'>
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
      </div>
      <b className='mb-[50px] mt-[150px] block text-center text-[25px] font-bold md:text-[30px]'>
        어떤 콘텐츠가 만들어지는지 궁금하다면?
      </b>
      <button className='mb-[150px] h-[50px] w-[270px] rounded-[20px] bg-[#8586db] text-[25px] font-bold leading-[50px]'>
        진행사례 보러가기
      </button>
    </div>
  );
};

CooperativeCompany.getLayout = page => <Layout>{page}</Layout>;

export default CooperativeCompany;
