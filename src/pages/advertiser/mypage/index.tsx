import Image from 'next/image';
import { useState } from 'react';
import { AdvertiserSidebar } from 'src/components/advertiser-sidebar';
import { Layout } from 'src/components/layout';
import GradePopup from 'src/components/mypage/grade-popup';
import { MyDashboard } from 'src/components/mypage/my-dashboard';
import { MyPortfolioList } from 'src/components/mypage/my-portfolio-list';
import { TransactionStatus } from 'src/components/mypage/transaction-status';
import { UserInfo } from 'src/components/mypage/user-info';
import { type NextPageWithLayout } from 'src/types/common';

interface Props {}

const AdvertiserCenter: NextPageWithLayout<Props> = () => {
  const [showPopupGrade, setShowPopupGrade] = useState(false);

  return (
    <>
      <div className='md:flex'>
        <AdvertiserSidebar />
        <div className='mx-auto w-full 2xl:w-[1570px]'>
          <div className='relative p-[20px] 2xl:p-[50px]'>
            <UserInfo userType='advertiser' />
            <TransactionStatus setShowPopupGrade={setShowPopupGrade} userType='advertiser' />
            <div className='my-[50px] h-[206px] w-full bg-[url(/assets/images/advertiser-mypage-banner.webp)] py-[56px] text-center'>
              <p className='mb-[20px] text-[20px] font-bold text-[#fff] md:text-[30px]'>
                제품소개서를 등록하고 자신에게 맞는 리뷰어를 만나보세요
              </p>
              <p className='text-[20px] font-bold text-[#fff]'>
                #N잡러 #리뷰어 #인플루언서 #서포터 #메이커 #협찬러
              </p>
            </div>
            <MyPortfolioList userType='advertiser' />
            <MyDashboard userType='advertiser' />
          </div>
        </div>
      </div>
      <GradePopup showPopupGrade={showPopupGrade} setShowPopupGrade={setShowPopupGrade} />
    </>
  );
};

AdvertiserCenter.getLayout = page => <Layout>{page}</Layout>;

export default AdvertiserCenter;
