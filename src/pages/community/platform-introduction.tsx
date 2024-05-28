import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { Layout } from 'src/components/layout';
import BecomingWay from 'src/components/platform-introduction/becoming-way';
import CooperativeCompany from 'src/components/platform-introduction/cooperative-company';
import Difference from 'src/components/platform-introduction/difference';
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

const PlatformIntroduction: NextPageWithLayout<Props> = () => {
  const [brandNum, setBrandNum] = useState('170,000');
  const [contentsNum, setContentsNum] = useState('200,777');

  return (
    <div className='flex flex-col items-center justify-center text-white'>
      <div className='mx-auto block lg:flex xl:w-[1040px] 2xl:w-[1420px] items-center justify-center py-[100px] lg:py-[200px]'>
        <b className='block mb-[60px] lg:mb-0 lg:mr-[82px] animate-fade-up text-[22px] 2xl:text-[45px] text-[#e93963]'>
          N잡러? 앱테크? <br /> 지금 바로 시작해봐!
        </b>
        <Image
          src='/assets/images/platform-top-img.webp'
          alt='상단 이미지'
          width={500}
          height={500}
          className='animate-fade-up w-[300px] h-[300xp] 2xl:w-[500px] 2xl:h-[500px]'
        />
        <b className='block mt-[60px] lg:mt-0 lg:ml-[87px] animate-fade-up text-[22px] 2xl:text-[45px] text-[#8586db]'>
          NO대행사? 무응답? <br /> 직접 모집해봐!
        </b>
      </div>
      <BecomingWay />
      <Difference />
      <CooperativeCompany />
    </div>
  );
};

PlatformIntroduction.getLayout = page => <Layout>{page}</Layout>;

export default PlatformIntroduction;
