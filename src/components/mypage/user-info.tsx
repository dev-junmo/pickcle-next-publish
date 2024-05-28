import Image from 'next/image';
import Link from 'next/link';
import { snsChannelStateStore } from 'src/status/store';
import { type NextPageWithLayout } from 'src/types/common';

interface Props {
  userType: string;
}

export const UserInfo: NextPageWithLayout<Props> = ({ userType }) => {
  const [snsChannel, snsChannelState] = snsChannelStateStore(state => [
    // 브랜드 SNS 채널 연결 상태
    state.snsChannel,
    state.snsChannelState,
  ]);

  return (
    <div
      className={`${
        userType === 'reviewer' ? 'bg-[#ffdae3]' : 'bg-[#dae1ff]'
      } w-full rounded-[15px] px-[20px] pb-[32px] pt-[25px] md:flex md:flex-wrap md:justify-center xl:flex-nowrap xl:py-[23px] 2xl:px-[50px]`}
    >
      <div className='mb-[40px] flex flex-col items-center justify-between gap-[15px] sm:flex-row sm:gap-0 md:w-[87%] md:pr-[30px] xl:mb-0'>
        <Image
          alt='마이페이지 프로필'
          width={100}
          height={100}
          className='h-[100px] rounded-[50%] border border-[#a8a8a8] bg-[#fff] md:h-[150px] md:w-[150px]'
          src={`${
            userType === 'reviewer'
              ? '/assets/images/taste-reviewer-slide2.webp'
              : '/assets/icons/logo.svg'
          }`}
        />
        <b className='text-[21px] text-[#2d2d2d] md:text-[26px] 2xl:text-[30px]'>
          {userType === 'reviewer' ? '등산하는정아' : '몽벨'}
        </b>
        <div className='w-[170px] 2xl:mr-[20px]'>
          <button className='foint-bold mx-auto mb-[10px] block h-[40px] w-[106px] rounded-[10px] bg-[#8586db] text-[16px] text-[#fff] sm:w-[146px] sm:text-[20px]'>
            출석체크
          </button>
          <Link
            className='mx-auto flex h-[40px] w-[106px] items-center justify-center gap-[10px] rounded-[10px] bg-[#868686] text-[16px] font-bold leading-[40px] text-[#fff] sm:w-[146px] sm:text-[20px]'
            href={
              userType === 'reviewer'
                ? '/reviewer/mypage/my-info-modify'
                : '/advertiser/brand-info-modify'
            }
          >
            <Image src='/assets/icons/modify-icon.webp' alt='수정 아이콘' width={27} height={27} />{' '}
            수정
          </Link>
          {/* <span className='mt-[7px] text-center text-[12px] font-bold text-[#f97090]'>
            [2023.08.01-2023.10.30 기준]
          </span> */}
        </div>
      </div>
      <div className='relative flex items-center justify-center gap-[35px] pl-[5px] before:hidden after:absolute after:right-0 after:top-[50%] after:hidden after:h-[100px] after:w-[1px] after:translate-y-[-50%] after:bg-[#707070] sm:float-left sm:w-[50%] sm:after:block md:w-[30%] md:before:absolute md:before:left-0 md:before:top-[50%] md:before:h-[100px] md:before:w-[1px] md:before:translate-y-[-50%] md:before:bg-[#707070] md:after:hidden xl:px-[10px] xl:before:block 2xl:w-[23%]'>
        <Link
          className='text-center'
          href={
            userType === 'reviewer'
              ? '/reviewer/transaction-management/inquire-message'
              : '/advertiser/transaction-management/inquire-message'
          }
        >
          <Image
            src='/assets/icons/message-icon.webp'
            alt='메세지 아이콘'
            width={42}
            height={29}
            className='mx-auto mb-[15px]'
          />
          <span className='text-[14px] font-[500] text-[#2d2d2d]'>메세지</span>
        </Link>
        <Link
          className='mr-[30px] text-center xl:mr-0'
          href={
            userType === 'reviewer'
              ? '/reviewer/mypage/my-scheduling'
              : '/reviewer/mypage/my-scheduling'
          }
        >
          <Image
            src='/assets/icons/mypage-calendar-icon.webp'
            alt='메세지 아이콘'
            width={38}
            height={38}
            className='mx-auto mb-[10px]'
          />
          <span className='text-[14px] font-[500] text-[#2d2d2d]'>스케쥴링</span>
        </Link>
      </div>
      <div className='relative mt-[50px] before:absolute before:left-0 before:top-[50%] before:hidden before:h-[100px] before:w-[1px] before:translate-y-[-50%] before:bg-[#707070] sm:float-left sm:mt-0 sm:w-[50%] md:w-[30%] md:before:block md:after:absolute md:after:right-0 md:after:top-[50%] md:after:block md:after:h-[100px] md:after:w-[1px] md:after:translate-y-[-50%] md:after:bg-[#707070] xl:flex xl:w-[28%] xl:flex-col xl:justify-center xl:before:block'>
        {snsChannel ? (
          <Link href='/reviewer/mypage/my-sns-channel'>
            <ul className='mb-[28px] flex items-center justify-center gap-[10px] px-[5px]'>
              <li>
                <Image
                  src='/assets/icons/sns-channel-tiktok.webp'
                  alt='sns 아이콘'
                  width={30}
                  height={30}
                />
              </li>
              <li>
                <Image
                  src='/assets/icons/sns-channel-youtube.webp'
                  alt='sns 아이콘'
                  width={30}
                  height={30}
                />
              </li>
              <li>
                <Image
                  src='/assets/icons/sns-channel-instagram.webp'
                  alt='sns 아이콘'
                  width={30}
                  height={30}
                />
              </li>
              <li>
                <Image
                  src='/assets/icons/sns-channel-blog.webp'
                  alt='sns 아이콘'
                  width={30}
                  height={30}
                />
              </li>
            </ul>
          </Link>
        ) : (
          <Link href='/reviewer/mypage/my-sns-channel'>
            <div className='mb-[28px] flex items-center justify-center'>
              <Image
                src='/assets/icons/sns-none-icon.webp'
                alt='플러스 아이콘'
                width={20}
                height={20}
              />
            </div>
          </Link>
        )}
        <span className='block text-center text-[14px] font-[500] text-[#2d2d2d]'>
          SNS 채널 연결
        </span>
        {!snsChannel && (
          <div className='absolute left-[57px] top-[136px] w-[230px] rounded-[10px] bg-[#c0c0c0] px-[14px] py-[11px] before:absolute before:left-[35px] before:top-[-15px] before:block before:border-b-[10px] before:border-l-[5px] before:border-r-[5px] before:border-t-[5px] before:border-b-[#c0c0c0] before:border-l-[transparent] before:border-r-[transparent] before:border-t-[transparent]'>
            <p className='text-[10px] font-[500] text-[#2d2d2d]'>
              포트폴리오 등록 및 모든 서비스 이용을 위해 <br />
              서는 <span className='text-[#f97090]'>SNS 채널 최소1개 이상</span> 인증되어야 합니다.
            </p>
          </div>
        )}
      </div>
      <div className='clear-both flex flex-col items-center justify-center pl-[5px] pr-[10px] pt-[40px] md:mt-0 md:w-[30%] md:pl-[20px] md:pr-[10px] md:pt-0 2xl:pl-[30px]'>
        <div className='mb-[10px] flex  md:mb-[30px]'>
          <span className='mr-[45px] inline-block w-[50px] font-[500] text-[#2d2d2d]'>쿠폰</span>
          <b className='text-[#2d2d2d]'>3개</b>
        </div>
        <div className='flex'>
          <span className='mr-[45px] inline-block w-[50px] font-[500] text-[#2d2d2d]'>포인트</span>
          <b className='text-[#2d2d2d]'>50,000 P</b>
        </div>
      </div>
    </div>
  );
};
