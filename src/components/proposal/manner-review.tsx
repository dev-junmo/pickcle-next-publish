import Image from 'next/image';
import { useEffect, useState } from 'react';
import { supporter } from 'src/mockData';
import { type NextPageWithLayout } from 'src/types/common';

interface Props {
  userType: string;
}

export const MannerReview: NextPageWithLayout<Props> = ({ userType }) => {
  const [userInfo, setUserInfo] = useState<any>({});

  useEffect(() => {
    if (userType === 'reviewer') {
      setUserInfo(supporter.reviewerInfo);
    } else {
      setUserInfo(supporter.advertiserInfo);
    }
  }, [userType]);

  return (
    <div className='mb-[175px] mt-[100px] text-center'>
      <b className='text-[30px] text-[#fff]'>{userInfo.name}님이 받은 매너 평가</b>
      <div className='mt-[120px] sm:px-[50px]'>
        <ul className='flex flex-wrap items-center justify-center gap-x-[90px] gap-y-[50px]'>
          {userInfo?.mannerEvaluation?.map((m: any, i: number) => (
            <li
              key={i}
              className='flex w-[280px] items-center justify-between rounded-[20px] border-[4px] border-[#cccccc] py-[5px] pl-[20px] pr-[10px] text-left'
            >
              <span className='text-[18px]'>{m.item}</span>
              <div className='flex items-center'>
                <span className='text-base text-[#ff0e0e]'>{m.result}</span>
                <Image
                  src='/assets/icons/heart-active.webp'
                  alt='하트 아이콘'
                  width={30}
                  height={30}
                />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
