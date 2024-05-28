import { Layout } from 'src/components/layout';
import { type NextPageWithLayout } from 'src/types/common';
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

interface Props {}

const PointPayment: NextPageWithLayout<Props> = () => {
  return (
    <>
      <div className='w-full bg-[#f1f1fb] py-[300px]'>
        <Swiper modules={[Navigation]} navigation={true}>
          {Array.from({ length: 4 }, (_, i) => i + 1).map(v => (
            <SwiperSlide key={v}>
              <div className='text-center'>
                <b className='block text-[45px] text-[#494949]'>서포터02</b>
                <p className='my-[100px] inline-block border-b-[5px] border-[#707070] px-[50px] text-[35px] font-bold text-[#494949] 2xl:text-[45px]'>
                  0{v}
                </p>
                <p className='text-[35px] font-bold text-[#494949] 2xl:text-[45px]'>
                  전체보기해당 서비스를 사용하는 방법에 대한 간략한 설명해당 서비스를 사용하는
                  방법에 <br /> 대한 간략한 설명해당 서비스를 사용하는 방법에 대한 간략한 설명
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className='w-full bg-[#fff] py-[300px]'>
        <Swiper modules={[Navigation]} navigation={true}>
          {Array.from({ length: 4 }, (_, i) => i + 1).map(v => (
            <SwiperSlide key={v}>
              <div className='text-center'>
                <b className='block text-[45px] text-[#494949]'>메이커</b>
                <p className='my-[100px] inline-block border-b-[5px] border-[#707070] px-[50px] text-[35px] font-bold text-[#494949] 2xl:text-[45px]'>
                  0{v}
                </p>
                <p className='text-[35px] font-bold text-[#494949] 2xl:text-[45px]'>
                  전체보기해당 서비스를 사용하는 방법에 대한 간략한 설명해당 서비스를 사용하는
                  방법에 <br /> 대한 간략한 설명해당 서비스를 사용하는 방법에 대한 간략한 설명
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className='w-full bg-[#f1f1fb] py-[300px]'>
        <Swiper modules={[Navigation]} navigation={true}>
          {Array.from({ length: 4 }, (_, i) => i + 1).map(v => (
            <SwiperSlide key={v}>
              <div className='text-center'>
                <b className='block text-[45px] text-[#494949]'>서포터</b>
                <p className='my-[100px] inline-block border-b-[5px] border-[#707070] px-[50px] text-[35px] font-bold text-[#494949] 2xl:text-[45px]'>
                  0{v}
                </p>
                <p className='text-[35px] font-bold text-[#494949] 2xl:text-[45px]'>
                  전체보기해당 서비스를 사용하는 방법에 대한 간략한 설명해당 서비스를 사용하는
                  방법에 <br /> 대한 간략한 설명해당 서비스를 사용하는 방법에 대한 간략한 설명
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className='w-full bg-[#fff] py-[300px]'>
        <Swiper modules={[Navigation]} navigation={true}>
          {Array.from({ length: 4 }, (_, i) => i + 1).map(v => (
            <SwiperSlide key={v}>
              <div className='text-center'>
                <b className='block text-[45px] text-[#494949]'>서포터</b>
                <p className='my-[100px] inline-block border-b-[5px] border-[#707070] px-[50px] text-[35px] font-bold text-[#494949] 2xl:text-[45px]'>
                  0{v}
                </p>
                <p className='text-[35px] font-bold text-[#494949] 2xl:text-[45px]'>
                  전체보기해당 서비스를 사용하는 방법에 대한 간략한 설명해당 서비스를 사용하는
                  방법에 <br /> 대한 간략한 설명해당 서비스를 사용하는 방법에 대한 간략한 설명
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

PointPayment.getLayout = page => <Layout>{page}</Layout>;

export default PointPayment;
