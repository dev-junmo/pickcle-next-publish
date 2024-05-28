import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { type NextPageWithLayout } from 'src/types/common';

interface Props {
  userType: string;
}

const userTypeTab = ['서포터 포트폴리오', '메이커 포트폴리오'];

export const MyPortfolioList: NextPageWithLayout<Props> = ({ userType }) => {
  const [currentTab, setCurrentTab] = useState(0);
  const [nonePortfolio, setNonePortfolio] = useState(false);

  return (
    <div className='mt-[20px] w-full rounded-[30px] bg-[#fff] p-[20px] 2xl:px-[60px] 2xl:py-[40px]'>
      <div className='mb-[20px]'>
        <b className='text-[25px] text-[#2d2d2d] 2xl:text-[30px]'>나의 포트폴리오 리스트</b>
      </div>
      <div className='flex flex-col items-start justify-between md:flex-row md:items-center'>
        <ul className='mb-[20px] inline-flex border-b border-[#707070]'>
          {userTypeTab.map((v, i) => (
            <li
              key={i}
              className={`relative mr-[5px] cursor-pointer py-2.5 text-[18px] font-bold text-[#2d2d2d] before:absolute before:bottom-[-4px] before:left-0 before:h-[6px] before:w-full sm:text-[20px]
              ${userType === 'reviewer' ? 'before:bg-[#f97090]' : 'before:bg-[#8586db]'} ${
                currentTab === i ? 'before:block' : 'before:hidden'
              } first:after:ml-[5px] first:after:inline-block first:after:content-['/'] last:mr-0`}
              onClick={() => {
                setCurrentTab(i);
              }}
            >
              {v}
            </li>
          ))}
        </ul>
        <Link
          href={
            userType === 'reviewer'
              ? '/reviewer/mypage/my-portfolio-list'
              : '/advertiser/brand-management'
          }
          className={`h-[40px] w-[158px] rounded-[10px] text-center text-[18px] font-bold leading-[40px] text-[#fff] sm:h-[50px] sm:w-[188px] sm:text-[20px] sm:leading-[50px] ${
            userType === 'reviewer' ? 'bg-[#f97090]' : 'bg-[#8586db]'
          }`}
        >
          등록하기
        </Link>
      </div>
      <ul className='mt-[40px]'>
        {nonePortfolio ? (
          <div className='flex h-[475px] w-full items-center justify-center border border-[#dbdbdb] bg-[#fff]'>
            <p className='flex items-center gap-[10px] text-[15px] font-bold text-[#3c3c3c]'>
              <Image src='/assets/icons/none-portfolio-icon.webp' alt='' width={22} height={24} />
              등록된 포트폴리오가 없습니다.
            </p>
          </div>
        ) : (
          <>
            <li className='mb-[20px] w-full rounded-[5px] border border-[#dbdbdb] bg-[#fff] p-[20px] md:flex md:justify-between 2xl:px-[37px]'>
              <div className='items-center gap-[15px] xl:flex'>
                <Image
                  src='/assets/images/advertiser-thumb-img03.webp'
                  alt='포트폴리오 썸네일'
                  width={200}
                  height={100}
                  className='aspect-square h-[100px] rounded-[5px] object-cover'
                />
                <div className='2xl:pt-[10px]'>
                  <b className='mb-[10px] text-[14px] text-[#000] 2xl:text-[16px]'>
                    한율_어린쑥 수분진정플루이드
                  </b>
                  <ul className='flex items-center 2xl:mt-[10px]'>
                    <li
                      className={`text-[12px] font-bold 2xl:text-[14px] ${
                        userType === 'reviewer' ? 'text-[#f97090]' : 'text-[#8586db]'
                      }`}
                    >
                      #한율
                    </li>
                    <li
                      className={`text-[12px] font-bold 2xl:text-[14px] ${
                        userType === 'reviewer' ? 'text-[#f97090]' : 'text-[#8586db]'
                      }`}
                    >
                      #어린쑥수분진정
                    </li>
                    <li
                      className={`text-[12px] font-bold 2xl:text-[14px] ${
                        userType === 'reviewer' ? 'text-[#f97090]' : 'text-[#8586db]'
                      }`}
                    >
                      #피부미인
                    </li>
                  </ul>
                </div>
              </div>
              <ul className='mt-[20px] flex items-center gap-[20px] 2xl:mt-0'>
                <li className='relative after:absolute after:right-[-9px] after:top-[5px] after:block after:h-[20px] after:w-[1px] after:bg-[#707070]'>
                  <Image
                    alt='sns 아이콘'
                    width={30}
                    height={30}
                    src={
                      currentTab === 0
                        ? '/assets/icons/sns-channel-youtube.webp'
                        : '/assets/icons/vedio-icon.webp'
                    }
                  />
                </li>
                <li className='relative after:absolute after:right-[-9px] after:top-[3px] after:block after:h-[20px] after:w-[1px] after:bg-[#707070]'>
                  <b className='inline-block h-[27px] rounded-[50px] border border-[#868686] px-[8px] text-[14px] leading-[27px] text-[#000]'>
                    여행
                  </b>
                </li>
                <li>
                  <span className='text-[14px] font-[500] text-[#2d2d2d] 2xl:text-[16px]'>
                    제품협찬
                  </span>
                </li>
              </ul>
            </li>
            <li className='mb-[20px] w-full rounded-[5px] border border-[#dbdbdb] bg-[#fff] p-[20px] md:flex md:justify-between 2xl:px-[37px]'>
              <div className='items-center gap-[15px] xl:flex'>
                <Image
                  src='/assets/images/advertiser-thumb-img03.webp'
                  alt='포트폴리오 썸네일'
                  width={200}
                  height={100}
                  className='aspect-square h-[100px] object-cover'
                />
                <div className='2xl:pt-[10px]'>
                  <b className='mb-[10px] text-[14px] text-[#000] 2xl:text-[16px]'>
                    한율_어린쑥 수분진정플루이드
                  </b>
                  <ul className='flex items-center 2xl:mt-[10px]'>
                    <li
                      className={`text-[12px] font-bold 2xl:text-[14px] ${
                        userType === 'reviewer' ? 'text-[#f97090]' : 'text-[#8586db]'
                      }`}
                    >
                      #한율
                    </li>
                    <li
                      className={`text-[12px] font-bold 2xl:text-[14px] ${
                        userType === 'reviewer' ? 'text-[#f97090]' : 'text-[#8586db]'
                      }`}
                    >
                      #어린쑥수분진정
                    </li>
                    <li
                      className={`text-[12px] font-bold 2xl:text-[14px] ${
                        userType === 'reviewer' ? 'text-[#f97090]' : 'text-[#8586db]'
                      }`}
                    >
                      #피부미인
                    </li>
                  </ul>
                </div>
              </div>
              <ul className='mt-[20px] flex items-center gap-[20px] 2xl:mt-0'>
                <li className='relative after:absolute after:right-[-9px] after:top-[5px] after:block after:h-[20px] after:w-[1px] after:bg-[#707070]'>
                  <Image
                    alt='sns 아이콘'
                    width={30}
                    height={30}
                    src={
                      currentTab === 0
                        ? '/assets/icons/sns-channel-youtube.webp'
                        : '/assets/icons/picture-icon.webp'
                    }
                  />
                </li>
                <li className='relative after:absolute after:right-[-9px] after:top-[3px] after:block after:h-[20px] after:w-[1px] after:bg-[#707070]'>
                  <b className='inline-block h-[27px] rounded-[50px] border border-[#868686] px-[8px] text-[14px] leading-[27px] text-[#000]'>
                    여행
                  </b>
                </li>
                <li>
                  <span className='text-[14px] font-[500] text-[#2d2d2d] 2xl:text-[16px]'>
                    제품협찬
                  </span>
                </li>
              </ul>
            </li>
            <li className='mb-[20px] w-full rounded-[5px] border border-[#dbdbdb] bg-[#fff] p-[20px] md:flex md:justify-between 2xl:px-[37px]'>
              <div className='items-center gap-[15px] xl:flex'>
                <Image
                  src='/assets/images/advertiser-thumb-img03.webp'
                  alt='포트폴리오 썸네일'
                  width={200}
                  height={100}
                  className='aspect-square h-[100px] object-cover'
                />
                <div className='2xl:pt-[10px]'>
                  <b className='mb-[10px] text-[14px] text-[#000] 2xl:text-[16px]'>
                    한율_어린쑥 수분진정플루이드
                  </b>
                  <ul className='flex items-center 2xl:mt-[10px]'>
                    <li
                      className={`text-[12px] font-bold 2xl:text-[14px] ${
                        userType === 'reviewer' ? 'text-[#f97090]' : 'text-[#8586db]'
                      }`}
                    >
                      #한율
                    </li>
                    <li
                      className={`text-[12px] font-bold 2xl:text-[14px] ${
                        userType === 'reviewer' ? 'text-[#f97090]' : 'text-[#8586db]'
                      }`}
                    >
                      #어린쑥수분진정
                    </li>
                    <li
                      className={`text-[12px] font-bold 2xl:text-[14px] ${
                        userType === 'reviewer' ? 'text-[#f97090]' : 'text-[#8586db]'
                      }`}
                    >
                      #피부미인
                    </li>
                  </ul>
                </div>
              </div>
              <ul className='mt-[20px] flex items-center gap-[20px] 2xl:mt-0'>
                <li className='relative after:absolute after:right-[-9px] after:top-[5px] after:block after:h-[20px] after:w-[1px] after:bg-[#707070]'>
                  <Image
                    alt='sns 아이콘'
                    width={30}
                    height={30}
                    src={
                      currentTab === 0
                        ? '/assets/icons/sns-channel-youtube.webp'
                        : '/assets/icons/etc-icon.webp'
                    }
                  />
                </li>
                <li className='relative after:absolute after:right-[-9px] after:top-[3px] after:block after:h-[20px] after:w-[1px] after:bg-[#707070]'>
                  <b className='inline-block h-[27px] rounded-[50px] border border-[#868686] px-[8px] text-[14px] leading-[27px] text-[#000]'>
                    여행
                  </b>
                </li>
                <li>
                  <span className='text-[14px] font-[500] text-[#2d2d2d] 2xl:text-[16px]'>
                    제품협찬
                  </span>
                </li>
              </ul>
            </li>
          </>
        )}
      </ul>
    </div>
  );
};
