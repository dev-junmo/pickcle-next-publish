import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { supporter } from 'src/mockData';
import { type NextPageWithLayout } from 'src/types/common';

interface Props {
  userType: string;
}

export const ProfileImages: NextPageWithLayout<Props> = ({ userType }) => {
  const [userInfo, setUserInfo] = useState<any>({});

  useEffect(() => {
    if (userType === 'reviewer') {
      setUserInfo(supporter.reviewerInfo);
    } else {
      setUserInfo(supporter.advertiserInfo);
    }
  }, [userType]);

  return (
    <div>
      <Image
        src={userInfo?.portfolioDetail?.profileImage[0]}
        alt='프로필 이미지'
        width={400}
        height={400}
        className='h-[400px] rounded-[10px] object-cover'
      />
      <ul className='mt-[25px] flex items-center gap-[28px]'>
        {userInfo?.portfolioDetail?.profileImage?.map((p: any, i: number) => (
          <li key={i}>
            <Image
              src={p}
              alt='리뷰어 프로필 이미지'
              width={58}
              height={58}
              className='h-[58px] cursor-pointer object-cover'
            />
          </li>
        ))}
      </ul>
      {userType !== 'reviewer' && (
        <Link
          href='/supporter/reviewer/portfolio-list'
          className='mt-[30px] inline-block h-[45px] w-full rounded-[10px] bg-[#918eb8] text-center text-[20px] leading-[45px] text-[#fff]'
        >
          {userInfo?.name} 제품소개서 리스트 바로가기
        </Link>
      )}
    </div>
  );
};
