import Image from 'next/image';
import * as Switch from '@radix-ui/react-switch';
import { type NextPageWithLayout } from 'src/types/common';

interface Props {}

export const ProponentInfo: NextPageWithLayout<Props> = () => {
  return (
    <>
      <div className='mt-[16px] flex items-center border-y border-[#fff] py-[30px] pl-[16px] sm:pl-[36px]'>
        <Image
          src='/assets/images/advertiser-thumb-img04.webp'
          alt='리뷰어 프로필 이미지'
          width={100}
          height={100}
          className='h-[100px] rounded-[50%] object-cover'
        />
        <b className='ml-[35px] text-[25px]'>나그참파</b>
      </div>
      <div className='border-b border-[#fff] px-[20px] py-[50px] sm:px-[30px]'>
        <b className='text-[25px]'>제안자 정보</b>
        <div className='mb-[20px] mt-[30px]'>
          <span className='text-[18px] md:text-[20px]'>닉네임</span>
          <span className='ml-[47px] text-[18px] font-bold text-[#f97090]'>드로세르나</span>
        </div>
        <div className='mb-[10px] flex flex-wrap items-center'>
          <span className='mr-[25px] text-[18px] md:text-[20px]'>휴대폰 번호</span>
          <span className='mr-[50px] text-[18px] font-bold text-[#f97090]'>010-****-0227</span>
        </div>
      </div>
    </>
  );
};
