import Image from 'next/image';
import { useEffect, useState } from 'react';
import { supporter } from 'src/mockData';
import { type NextPageWithLayout } from 'src/types/common';

interface Props {
  userType: string;
}

export const ProposalProfile: NextPageWithLayout<Props> = ({ userType }) => {
  const [userInfo, setUserInfo] = useState<any>({});

  useEffect(() => {
    if (userType === 'reviewer') {
      setUserInfo(supporter.reviewerInfo);
    } else {
      setUserInfo(supporter.advertiserInfo);
    }
  }, [userType]);

  return (
    <div className='mb-[50px] flex flex-col items-center'>
      <Image
        alt='프로필 이미지'
        width={400}
        height={400}
        className='h-[400px] rounded-[10px] object-cover'
        src={userInfo?.thumbnail}
      />
      <ul className='mt-[25px] flex items-center gap-[5px]'>
        <li>
          <div className='w-[110px] bg-[#8586db] py-[3px] text-center text-[16px] text-[#fff] sm:w-[127px] sm:text-[18px]'>
            {userType === 'reviewer' ? '대표 SNS 채널' : '선호 SNS 채널'}
          </div>
          <div className='h-[30px] border border-t-0 border-[#fff] text-center'>
            <Image
              src={userInfo?.representSnsChannel}
              alt='SNS 아이콘'
              width={30}
              height={30}
              className='inline-block'
            />
          </div>
        </li>
        <li>
          <div className='w-[110px] bg-[#8586db] py-[3px] text-center text-[16px] text-[#fff] sm:w-[127px] sm:text-[18px]'>
            {userType === 'reviewer' ? '대표 카테고리' : '카테고리'}
          </div>
          <div className='h-[30px] border border-t-0 border-[#fff] text-center'>
            <span className='text-[16px] text-[#fff] sm:text-[18px]'>
              {userInfo?.representCategory}
            </span>
          </div>
        </li>
        <li>
          <div className='w-[110px] bg-[#8586db] py-[3px] text-center text-[16px] text-[#fff] sm:w-[127px] sm:text-[18px]'>
            {userType === 'reviewer' ? '선호 협찬방식' : '제공 협찬방식'}
          </div>
          <div className='h-[30px] border border-t-0 border-[#fff] text-center'>
            <span className='text-[16px] text-[#fff] sm:text-[18px]'>
              {userInfo?.preferSponsorshipWay}
            </span>
          </div>
        </li>
      </ul>
    </div>
  );
};
