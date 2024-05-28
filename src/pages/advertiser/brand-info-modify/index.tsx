import Image from 'next/image';
import { useState } from 'react';
import { AdvertiserSidebar } from 'src/components/advertiser-sidebar';
import { Layout } from 'src/components/layout';
import { BusinessInfo } from 'src/components/mypage/business-info';
import { AccountInfo } from 'src/components/mypage/my-info-modify/account-info';
import { BasicInfo } from 'src/components/mypage/my-info-modify/basic-info';
import { ChangePassword } from 'src/components/mypage/my-info-modify/change-password';
import { PortfolioList } from 'src/components/mypage/my-info-modify/portfolio-list';
import ProfileGuide from 'src/components/mypage/my-info-modify/profile-guide';
import { TermsAgree } from 'src/components/mypage/my-info-modify/terms-agree';
import WithdrawalPopup from 'src/components/mypage/my-info-modify/withdrawal-popup';
import { type NextPageWithLayout } from 'src/types/common';

interface Props {}

const BrandInfoModify: NextPageWithLayout<Props> = () => {
  const [showProfileGuide, setShowProfileGuide] = useState(false);
  const [showWithdrawalPopup, setShowWithdrawalPopup] = useState(false);

  return (
    <>
      <div className='md:flex'>
        <AdvertiserSidebar />
        <div className='mx-auto w-full px-[20px] py-[100px] text-[#fff] md:w-[80%] 2xl:w-[1400px]'>
          <b className='block border-b border-b-[#fff] border-opacity-[0.8] pb-[25px] text-center text-[25px] text-[#ffffff] 2xl:text-[30px]'>
            브랜드 기본 정보 수정
          </b>
          <div className='mt-[50px]'>
            <div className='relative mx-auto w-[250px]'>
              <Image
                src='/assets/images/advertiser-thumb-img03.webp'
                alt='프로필'
                width={250}
                height={250}
                className='mx-auto aspect-square h-[250px] rounded-[60px] object-cover'
              />
              <button className='absolute bottom-[-3px] right-0'>
                <Image
                  src='/assets/icons/camera-icon.webp'
                  alt='카메라 아이콘'
                  width={68}
                  height={68}
                />
              </button>
            </div>
            <span
              className='mt-[10px] block cursor-pointer text-center text-[14px] font-bold text-[#8586db] underline 2xl:text-[16px]'
              onClick={() => setShowProfileGuide(true)}
            >
              프로필 사진 가이드
            </span>
          </div>
          <div className='mx-auto 2xl:w-[1040px]'>
            <BusinessInfo />
            <BasicInfo userType='advertiser' />
            <ChangePassword userType='advertiser' />
            <TermsAgree setShowWithdrawalPopup={setShowWithdrawalPopup} />
          </div>
          <button className='block h-[59px] w-full rounded-[10px] bg-[#8586db] text-[18px] font-bold text-[#fff] md:mx-auto md:w-[454px] 2xl:text-[20px]'>
            정보 수정 완료
          </button>
        </div>
      </div>
      <ProfileGuide
        showProfileGuide={showProfileGuide}
        setShowProfileGuide={setShowProfileGuide}
        userType='advertiser'
      />
      <WithdrawalPopup
        showWithdrawalPopup={showWithdrawalPopup}
        setShowWithdrawalPopup={setShowWithdrawalPopup}
        userType='advertiser'
      />
    </>
  );
};

BrandInfoModify.getLayout = page => <Layout>{page}</Layout>;

export default BrandInfoModify;
