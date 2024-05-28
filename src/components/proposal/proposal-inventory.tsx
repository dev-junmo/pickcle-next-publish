import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { supporter } from 'src/mockData';
import { type NextPageWithLayout } from 'src/types/common';

interface Props {
  userType: string;
}

export const ProposalInventory: NextPageWithLayout<Props> = ({ userType }) => {
  const [userPortfolio, setUserPortfolio] = useState<any>([]);

  useEffect(() => {
    if (userType === 'reviewer') {
      setUserPortfolio(supporter.reviewerInfo.portfolioList);
    } else {
      setUserPortfolio(supporter.advertiserInfo.portfolioList);
    }
  }, [userType]);

  return (
    <div className='mt-[150px] text-center'>
      <b className='text-[30px] text-[#fff]'>
        {userType === 'reviewer' ? '포트폴리오 리스트' : '브랜드 제품 소개서 리스트'}
      </b>
      <div className='mt-[50px] border-b border-[#fff] pb-[100px]'>
        <ul
          className={`flex flex-wrap items-center justify-center gap-x-[40px] gap-y-[30px] 2xl:gap-x-[60px] ${
            userType === 'reviewer' ? '' : 'px-0 sm:px-[30px] xl:px-[200px]'
          }`}
        >
          {userPortfolio?.map((c: any) => (
            <li key={c.id} className={`text-left ${userType === 'reviewer' ? 'w-auto' : 'w-full'}`}>
              <Link
                href={`/supporter/${
                  userType === 'reviewer'
                    ? 'reviewer/portfolio-detail'
                    : 'advertiser/introduction-detail'
                }`}
              >
                <b className='text-[18px] text-[#fff]'>
                  {userType === 'reviewer'
                    ? `포트폴리오 ${c.id < 9 ? 0 : ''}${c.id + 1}`
                    : `브랜드 소개서 0${c.id + 1}`}
                </b>
                <div
                  className={`${c.represent ? 'bg-[#fff]' : 'bg-[#000]'} ${
                    userType === 'reviewer' ? 'w-auto' : 'w-full'
                  } relative mt-[10px] w-[491px] rounded-[10px] border border-[#fff] p-[20px] sm:flex`}
                >
                  <Image
                    src='/assets/images/portfolio-thumb.webp'
                    alt='포트폴리오 썸네일'
                    width={169}
                    height={105}
                  />
                  <div className='mt-[20px] sm:ml-[20px] sm:mt-0'>
                    <div className='flex items-center'>
                      <Image src={c.snsChannel} alt='sns icons' width={30} height={30} />
                      <span
                        className={`${
                          c.represent ? 'border-[#000]' : 'border-[#fff]'
                        } ml-[5px] inline-block h-[24px] rounded-[10px] border bg-[#000] px-[14px] text-[14px] font-bold leading-[21px] sm:text-base`}
                      >
                        {c.cateogry}
                      </span>
                    </div>
                    <p
                      className={`${
                        c.represent ? 'text-[#000]' : 'text-[#fff]'
                      } mt-[10px] text-[14px] font-bold sm:text-base`}
                    >
                      {c.title}
                    </p>
                    {c.represent && (
                      <span
                        className={`absolute font-bold ${
                          userType === 'reviewer'
                            ? 'bottom-[10px] right-[10px] text-[14px] text-[#f97090]'
                            : 'right-[10px] top-[10px] rounded-[30px] bg-[#f97090] px-[13px] text-[16px] text-[#fff]'
                        }`}
                      >
                        {userType === 'reviewer' ? '대표 포트폴리오' : '대표'}
                      </span>
                    )}
                  </div>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
