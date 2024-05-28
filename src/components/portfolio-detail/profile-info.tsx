import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { supporter } from 'src/mockData';
import { type NextPageWithLayout } from 'src/types/common';

interface Props {
  userType: string;
}

export const ProfileInfo: NextPageWithLayout<Props> = ({ userType }) => {
  const [userInfo, setUserInfo] = useState<any>({});

  useEffect(() => {
    if (userType === 'reviewer') {
      setUserInfo(supporter.reviewerInfo);
    } else {
      setUserInfo(supporter.advertiserInfo);
    }
  }, [userType]);

  return (
    <div className='w-full text-center md:w-[445px]'>
      <div className='flex justify-center gap-[30px] rounded-[10px] border border-[#fff] pb-[56px] pt-[66px] sm:gap-[50px]'>
        <div>
          <b className='block text-base text-[#fff]'>SNS 채널</b>
          <Image
            src='/assets/icons/portfolio-instagram-icon.webp'
            alt='인스타그램 아이콘'
            width={70}
            height={70}
            className='mx-auto'
          />
        </div>
        <div>
          <b className='mb-[20px] block text-base text-[#fff]'>카테고리</b>
          <span className='inline-block rounded-[14px] bg-[#fff] px-[8px] py-[2px] font-bold text-[#000]'>
            {userInfo?.portfolioDetail?.category}
          </span>
        </div>
        <div>
          <b className='mb-[20px] block text-base text-[#fff]'>
            {userType === 'reviewer' ? '선호' : '제공'} 협찬 방식
          </b>
          <span className='inline-block rounded-[14px] border border-[#fff] px-[8px] py-[2px] font-bold text-[#fff]'>
            {userInfo?.portfolioDetail?.preferSponsorshipWay}
          </span>
        </div>
      </div>
      <div className='mt-[20px] flex flex-col items-center justify-center rounded-[10px] border border-[#fff] px-[30px] pb-[35px] pt-[40px] sm:px-[60px]'>
        <Image
          src={userInfo?.portfolioDetail?.profileImage[0]}
          alt='프로필 이미지'
          width={100}
          height={100}
          className='h-[100px] rounded-[50%] object-cover'
        />
        <b className='mt-[8px] inline-block text-[18px] text-[#fff]'>drosena9705</b>
        <div className='mt-[30px] flex w-full items-center justify-between'>
          <div className='flex items-center'>
            <Image
              src='/assets/icons/sns-channel-instagram.webp'
              alt='인스타그램 아이콘'
              width={30}
              height={30}
            />
            <span className='text-[18px] text-[#fff]'>인스타그램</span>
          </div>
          <span className='text-[18px] font-bold text-[#fff]'>3,200,000</span>
        </div>
      </div>
      {userType === 'reviewer' && (
        <Link
          href='/supporter/reviewer/portfolio-list'
          className='mt-[30px] inline-block h-[45px] w-full rounded-[10px] bg-[#b88e98] text-[20px] leading-[45px] text-[#fff]'
        >
          {userInfo?.name} 포트폴리오 리스트 바로가기
        </Link>
      )}
    </div>
  );
};
