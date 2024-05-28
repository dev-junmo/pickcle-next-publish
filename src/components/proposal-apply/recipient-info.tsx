import Image from 'next/image';
import * as Switch from '@radix-ui/react-switch';
import { useEffect, useState } from 'react';
import { supporter } from 'src/mockData';
import { type NextPageWithLayout } from 'src/types/common';

interface Props {
  userType: string;
}

export const RecipientInfo: NextPageWithLayout<Props> = ({ userType }) => {
  const [userInfo, setUserInfo] = useState<any>({});

  useEffect(() => {
    if (userType === 'reviewer') {
      setUserInfo(supporter.reviewerInfo);
    } else {
      setUserInfo(supporter.advertiserInfo);
    }
  }, [userType]);

  return (
    <>
      <b className='text-[25px]'>
        {userType === 'reviewer' ? '리뷰어' : '브랜드'}에게 서포터 신청하기
      </b>
      <div className='mt-[16px] flex items-center border-y border-[#fff] py-[30px] sm:pl-[36px]'>
        <Image
          src={userInfo.thumbnail}
          alt='리뷰어 프로필 이미지'
          width={100}
          height={100}
          className='h-[100px] rounded-[50%] object-cover'
        />
        <b className='ml-[35px] text-[25px]'>{userInfo.name}</b>
      </div>
      <div className='py-[50px] sm:px-[30px] lg:px-0 lg:pl-[115px]'>
        <b className='text-[20px] md:text-[25px]'>제안자 정보</b>
        <div className='mb-[20px] mt-[30px]'>
          <span className='text-[18px] md:text-[20px]'>브랜드명</span>
          <span className='ml-[47px] text-[18px] font-bold text-[#f97090] md:text-[20px]'>
            티르티르
          </span>
        </div>
        <div className='mb-[10px] flex flex-wrap items-center'>
          <span className='mr-[25px] text-[18px] md:text-[20px]'>휴대폰 번호</span>
          <span className='mr-[50px] text-[16px] font-bold text-[#f97090] md:text-[18px]'>
            010-****-0227
          </span>
          <button className='mr-[30px] h-[40px] w-[123px] rounded-[5px] bg-[#f97090] text-[20px] leading-[40px]'>
            변경하기
          </button>
          <div className='cursor-pointer'>
            <span className='text-base'>OFF | ON</span>
            <Switch.Root
              className='relative mt-[5px] block h-[30px] w-[64px] cursor-pointer rounded-full bg-[#8e8eff] outline-none data-[state=checked]:bg-[#ccc]'
              id='airplane-mode'
            >
              <Switch.Thumb className='block h-[30px] w-[30px] translate-x-[33px] rounded-full bg-white transition-transform duration-100 will-change-transform data-[state=checked]:translate-x-0' />
            </Switch.Root>
          </div>
        </div>
        <p className='mb-[10px] text-[14px]'>
          회원 가입시 등록한 휴대폰 번호가 자동 기입되며, 변경을 원하시는 경우 변경하여 주세요.
        </p>
        <p className='text-[14px]'>
          휴대폰 번호 노출을 원치 않는 경우 <span className='text-[#8586db]'>OFF</span>해주시길
          바랍니다. OFF를 하지 않을 경우{' '}
          <span className='text-[#f97090]'>
            {userType === 'reviewer' ? '리뷰어' : '광고주'}에게 자동으로 노출
          </span>
          됩니다.
        </p>
      </div>
    </>
  );
};
