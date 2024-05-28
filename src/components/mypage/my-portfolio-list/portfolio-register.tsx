import Image from 'next/image';
import Link from 'next/link';
import { type NextPageWithLayout } from 'src/types/common';

interface Props {
  userType: string;
}

export const PortfolioRegister: NextPageWithLayout<Props> = ({ userType }) => {
  return (
    <div className='mb-[100px] mt-[20px] w-full'>
      <div className='relative my-[30px] flex items-center gap-[5px]'>
        <b className='block text-[25px] font-bold text-[#fff] sm:text-[30px]'>
          포트폴리오 등록하기
        </b>
        <Image
          src='/assets/icons/help-icon03.webp'
          alt='도움말 아이콘'
          width={20}
          height={24}
          className='peer'
        />
        <div className='absolute left-[82px] top-[-60px] hidden w-[305px] rounded-[10px] bg-[#c0c0c0] px-[10px] py-[10px] before:absolute before:left-[186px] before:top-[56px] before:block before:border-b-[5px] before:border-l-[5px] before:border-r-[5px] before:border-t-[10px] before:border-b-[transparent] before:border-l-[transparent] before:border-r-[transparent] before:border-t-[#c0c0c0] peer-hover:block'>
          <p className='text-[14px] font-[500] leading-[18px] text-[#2d2d2d]'>
            포트폴리오 리스트의 기본정보 입력 후 저장시 <br />
            서포터 / 메이커 포트폴리오 등록이 가능합니다
          </p>
        </div>
      </div>
      <div className='mt-[50px] flex flex-wrap justify-center gap-[25px] lg:gap-[59px]'>
        <Link
          className='relative flex h-[50px] w-full items-center justify-center rounded-[10px] bg-[#fff] md:w-[45%] lg:w-[470px]'
          href={
            userType === 'reviewer'
              ? '/reviewer/mypage/supporter-portfolio-register'
              : '/advertiser/mypage/supporter-product-introduction'
          }
        >
          <span className='text-[18px] font-bold text-[#f97090] sm:text-[20px]'>
            서포터 포트폴리오 등록
          </span>
          <Image
            src='/assets/icons/help-icon03.webp'
            alt='도움말 아이콘'
            width={20}
            height={24}
            className='peer ml-[5px]'
          />
          <div className='absolute left-[112px] top-[-55px] hidden w-[307px] rounded-[10px] bg-[#c0c0c0] px-[14px] py-[8px] before:absolute before:left-[186px] before:top-[56px] before:block before:border-b-[5px] before:border-l-[5px] before:border-r-[5px] before:border-t-[10px] before:border-b-[transparent] before:border-l-[transparent] before:border-r-[transparent] before:border-t-[#c0c0c0] peer-hover:block'>
            <p className='text-[14px] font-[500] text-[#2d2d2d]'>
              브랜드의 제품/서비스를 홍보해주는 서포터 입니다.
            </p>
          </div>
        </Link>
        <Link
          className='relative flex h-[50px] w-full items-center justify-center rounded-[10px] bg-[#fff] md:w-[45%] lg:w-[470px]'
          href={
            userType === 'reviewer'
              ? '/reviewer/mypage/maker-portfolio-register'
              : '/advertiser/mypage/maker-product-introduction'
          }
        >
          <span className='text-[18px] font-bold text-[#8586db] sm:text-[20px]'>
            메이커 포트폴리오 등록
          </span>
          <Image
            src='/assets/icons/help-icon03.webp'
            alt='도움말 아이콘'
            width={20}
            height={24}
            className='peer ml-[5px]'
          />
          <div className='absolute left-[38px] top-[-57px] hidden w-[349px] rounded-[10px] bg-[#c0c0c0] px-[14px] py-[8px] before:absolute before:left-[186px] before:top-[56px] before:block before:border-b-[5px] before:border-l-[5px] before:border-r-[5px] before:border-t-[10px] before:border-b-[transparent] before:border-l-[transparent] before:border-r-[transparent] before:border-t-[#c0c0c0] peer-hover:block'>
            <p className='text-[14px] font-[500] text-[#2d2d2d]'>
              브랜드의 제품/서비스의 콘텐츠물을 제작해주는 메이커 입니다.
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
};
