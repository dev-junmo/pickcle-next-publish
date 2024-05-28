import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { supporter } from 'src/mockData';
import { type NextPageWithLayout } from 'src/types/common';

interface Props {
  userType: string;
}

export const ProposalCard: NextPageWithLayout<Props> = ({ userType }) => {
  const [userInfo, setUserInfo] = useState<any>({});

  useEffect(() => {
    if (userType === 'reviewer') {
      setUserInfo(supporter.reviewerInfo);
    } else {
      setUserInfo(supporter.advertiserInfo);
    }
  }, [userType]);

  return (
    <div className='mb-[50px] rounded-[10px] border border-[#fff] p-[26px] text-center sm:mb-0'>
      <strong className='inline-block text-[35px] text-[#fff]'>
        {userType === 'reviewer' ? '드로세라' : '나그참파'}
      </strong>
      <p className='mx-auto mt-[30px] text-[14px] font-bold text-[#fff] sm:px-[100px] sm:text-[16px] 2xl:w-[651px]'>
        {userType === 'reviewer'
          ? '드로세라 입니다. 지속적인 뷰티 콘텐츠 경험으로 전문적이고 상세한 제품 리뷰를 약속 드립니다.'
          : '전세계가 사랑하는향 나그참파'}
      </p>
      <ul className='my-[30px] flex items-center justify-center gap-[5px] text-[14px] text-[#f97090]'>
        {userInfo?.hashtag?.map((h: string, i: number) => (
          <li key={i}>{h}</li>
        ))}
      </ul>
      <div className='ml-[-30px] flex items-center justify-center gap-[10px]'>
        <button>
          <Image src='/assets/icons/share-icon.webp' alt='공유 아이콘' width={40} height={40} />
        </button>
        <Link
          href={`/supporter/${userType === 'reviewer' ? 'reviewer' : 'advertiser'}/proposal-apply`}
          className='h-[50px] w-[200px] rounded-[10px] bg-[#f97090] text-[18px] font-bold leading-[50px] text-[#fff] sm:w-[230px] sm:text-[20px]'
        >
          제안하기
        </Link>
      </div>
      <div className='mt-[25px] rounded-[10px] border border-[#fff] px-[30px] pb-[28px] pt-[32px] 2xl:px-[50px]'>
        <p className='mb-[30px] text-center text-[14px] font-bold sm:text-[16px]'>
          거래 시작 전 해당 {userType === 'reviewer' ? '리뷰어' : '광고주'}에게 궁금한 점을 미리
          물어보실 수 있습니다. <br /> 지금 바로 문의해보세요.
        </p>
        <Link
          href='#'
          className='inline-block h-[50px] w-[200px] rounded-[10px] bg-[#8586db] text-[18px] font-bold leading-[50px] text-[#fff] sm:w-[230px] sm:text-[20px]'
        >
          {userType === 'reviewer' ? '리뷰어' : '광고주'}에게 문의하기
        </Link>
      </div>
    </div>
  );
};
