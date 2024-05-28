import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { type NextPageWithLayout } from 'src/types/common';

interface Props {
  setShowPopupGrade: (open: boolean) => void;
  userType: string;
}

const userTypeTab = ['서포터', '메이커'];

export const TransactionStatus: NextPageWithLayout<Props> = ({ setShowPopupGrade, userType }) => {
  const [currentTab, setCurrentTab] = useState(0);

  return (
    <div
      className={`${
        userType === 'reviewer' ? '2xl:px-[60px]' : '2xl:px-[100px]'
      } mt-[50px] w-full rounded-[30px] bg-[#fff] p-[20px] 2xl:py-[40px]`}
    >
      <div className='items-center justify-between md:flex'>
        <div className='flex items-center gap-[15px] 2xl:gap-[36px]'>
          <div className='h-[100px] w-[100px] flex-shrink-0 rounded-full bg-[#2d2d2d]' />
          <div>
            <span className='block text-[16px] font-bold text-[#2d2d2d] 2xl:text-[18px]'>
              [8월]
            </span>
            <b className='text-[20px] text-[#2d2d2d] 2xl:text-[25px]'>SILVER</b>
            <p className='text-[16px] font-bold text-[#f97090] 2xl:text-[18px]'>
              다음 등급인 GOLD까지 거래완료 09회 남았습니다.
            </p>
          </div>
        </div>
        <span
          className='mt-[15px] block cursor-pointer text-[18px] font-bold text-[#8586db] underline'
          onClick={() => setShowPopupGrade(true)}
        >
          등급 혜택 보기
        </span>
      </div>
      <div className='mb-[20px] mt-[30px]'>
        <div className='2xl:flex 2xl:items-end 2xl:gap-[17px]'>
          <b className='block text-[25px] text-[#2d2d2d] 2xl:text-[30px]'>거래 현황</b>
          <span className='text-[16px] font-bold text-[#2d2d2d] 2xl:text-[18px]'>
            [일주일이내 진행건의 정보]
          </span>
        </div>
      </div>
      <div className='flex items-end justify-between'>
        <ul className='inline-flex border-b border-[#2d2d2d]'>
          {userTypeTab.map((v, i) => (
            <li
              key={i}
              className={`relative mr-[5px] cursor-pointer py-2.5 text-[20px] font-bold text-[#2d2d2d] before:absolute before:bottom-[-4px] before:left-0 before:h-[6px] before:w-full 2xl:text-[25px]
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
              ? '/reviewer/transaction-management'
              : '/advertiser/transaction-management'
          }
          className={`${
            userType === 'reviewer' ? 'bg-[#f97090]' : 'bg-[#8586db]'
          } h-[40px] w-[123px] rounded-[5px] text-center text-[18px] font-[500] leading-[40px] text-[#fff]`}
        >
          전체보기
        </Link>
      </div>
      <div className='mt-[50px] flex flex-col items-center justify-center text-center md:flex-row 2xl:justify-between'>
        <div className='relative mb-[100px] after:absolute after:left-[50%] after:block after:h-[80px] after:w-[1px] after:border-l-[2px] after:border-dashed after:border-l-[#000] md:mb-0 md:mr-[140px] md:after:left-[130%] md:after:top-[37%] md:after:h-[1px] md:after:w-[80px] md:after:border-l-0 md:after:border-t-[2px] 2xl:after:w-[320px]'>
          <Image
            alt='제안 아이콘'
            width={146}
            height={146}
            src={
              userType === 'reviewer'
                ? '/assets/icons/proposal-icon.webp'
                : '/assets/icons/proposal-icon-advertiser.webp'
            }
          />
          <span
            className={`absolute right-[-14px] top-[-6px] block h-[50px] w-[50px] rounded-full ${
              userType === 'reviewer' ? 'bg-[#f97090]' : 'bg-[#8586db]'
            } text-[25px] font-bold leading-[50px] text-[#fff]`}
          >
            4
          </span>
          <b className='mb-[18px] mt-[20px] block text-[25px] text-[#707070]'>제안</b>
        </div>
        <div className='relative mb-[100px] after:absolute after:left-[50%] after:block after:h-[80px] after:w-[1px] after:border-l-[2px] after:border-dashed after:border-l-[#000] md:mb-0 md:mr-[140px] md:after:left-[130%] md:after:top-[37%] md:after:h-[1px] md:after:w-[80px] md:after:border-l-0 md:after:border-t-[2px] 2xl:after:w-[320px]'>
          <Image
            alt='진핸중 아이콘'
            width={146}
            height={146}
            src={
              userType === 'reviewer'
                ? '/assets/icons/ongoing-icon.webp'
                : '/assets/icons/ongoing-icon-advertiser.webp'
            }
          />
          <span
            className={`absolute right-[-14px] top-[-6px] block h-[50px] w-[50px] rounded-full ${
              userType === 'reviewer' ? 'bg-[#f97090]' : 'bg-[#8586db]'
            } text-[25px] font-bold leading-[50px] text-[#fff]`}
          >
            1
          </span>
          <b className='mb-[18px] mt-[20px] block text-[25px] text-[#707070]'>진행중</b>
        </div>
        <div className='relative'>
          <Image
            alt='수정요청 아이콘'
            width={146}
            height={146}
            src={
              userType === 'reviewer'
                ? '/assets/icons/modification-icon.webp'
                : '/assets/icons/modification-icon-advertiser.webp'
            }
          />
          <span
            className={`absolute right-[-14px] top-[-6px] block h-[50px] w-[50px] rounded-full ${
              userType === 'reviewer' ? 'bg-[#f97090]' : 'bg-[#8586db]'
            } text-[25px] font-bold leading-[50px] text-[#fff]`}
          >
            2
          </span>
          <b className='mt-[20px] block text-[25px] text-[#707070]'>수정요청</b>
        </div>
      </div>
      <div className='2xl:mt-[100px] 2xl:flex 2xl:items-center 2xl:gap-[40px]'>
        <div className='relative mb-[20px] flex items-center 2xl:mb-0 2xl:w-[12%]'>
          <b className='mr-[10px] text-[20px] text-[#707070] 2xl:text-[25px]'>매너지수</b>
          <Image
            src='/assets/icons/help-icon02.webp'
            alt='느낌표 도움말'
            width={20}
            height={20}
            className='peer'
          />
          <div className='absolute left-[-43px] top-[-64px] hidden w-[210px] rounded-[10px] bg-[#c0c0c0] px-[14px] py-[8px] before:absolute before:left-[150px] before:top-[61px] before:block before:border-b-[5px] before:border-l-[5px] before:border-r-[5px] before:border-t-[10px] before:border-b-[transparent] before:border-l-[transparent] before:border-r-[transparent] before:border-t-[#c0c0c0] peer-hover:block'>
            <p className='text-[10px] font-[500] text-[#2d2d2d]'>
              픽클 매너지수는 픽클의 사용자로부터 받은 <br />
              매너 평가,거래, 운영자 제재 등을 종합해서 <br />
              만든 매너지표입니다.
            </p>
          </div>
        </div>
        <div className='w-full rounded-[10px] border-[2px] border-[#707070] px-[16px] py-[10px] 2xl:flex 2xl:items-center'>
          <span className='mr-[10px] text-[14px] font-[500] text-[#000]'>나의 매너지수는 현재</span>
          <b className='text-[23px] text-[#f97090] sm:text-[25px]'>맑음</b>
          <div className='w-full md:flex md:items-center md:gap-[10px] 2xl:ml-[20px] 2xl:w-[80%]'>
            <div className='relative my-[20px] h-[15px] w-full rounded-[10px] bg-[#707070]'>
              <div
                className={`${
                  userType === 'reviewer' ? 'bg-[#f97090]' : 'bg-[#8586db]'
                } relative h-full w-[40%] rounded-[10px] after:absolute after:right-0 after:top-0 after:block after:h-[16px] after:w-[16px] after:rounded-full after:bg-[#fff]`}
              >
                <span className='absolute right-0 top-[-23px] text-[16px] font-bold text-[#8586db] md:top-[-28px] md:text-[18px]'>
                  40
                </span>
              </div>
            </div>
            <Image
              src='/assets/icons/sunny-icon.webp'
              alt='맑음 아이콘'
              width={41}
              height={41}
              className='h-[41px]'
            />
          </div>
        </div>
      </div>
      <div className='mt-[20px] md:flex md:items-center md:justify-center md:gap-[50px] 2xl:ml-[15px] 2xl:mt-[40px]'>
        <div className='2xl:mr-[200px]'>
          <div className='flex items-center 2xl:mb-[13px]'>
            <Image src='/assets/icons/mypage-heart.webp' alt='하트 아이콘' width={30} height={30} />
            <b className='ml-[10px] text-[20px] text-[#707070] 2xl:text-[23px]'>
              재 진행희망률 100%
            </b>
          </div>
          <span className='ml-[40px] text-[14px] font-bold text-[#707070] 2xl:text-[16px]'>
            30개 브랜드 중 30개의 만족
          </span>
        </div>
        <div className='mt-[20px] md:mt-0'>
          <div className='flex items-center 2xl:mb-[13px]'>
            <Image
              src='/assets/icons/speech-bubble-icon.webp'
              alt='말풍선 아이콘'
              width={30}
              height={30}
            />
            <b className='ml-[10px] text-[20px] text-[#707070] 2xl:text-[23px]'>응답률 100%</b>
          </div>
          <span className='ml-[40px] text-[14px] font-bold text-[#707070] 2xl:text-[16px]'>
            보통 2시간 내 응답
          </span>
        </div>
      </div>
    </div>
  );
};
