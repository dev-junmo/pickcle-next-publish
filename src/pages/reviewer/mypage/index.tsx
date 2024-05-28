import Image from 'next/image';
import { useState } from 'react';
import { Layout } from 'src/components/layout';
import GradePopup from 'src/components/mypage/grade-popup';
import { MyDashboard } from 'src/components/mypage/my-dashboard';
import { MyPortfolioList } from 'src/components/mypage/my-portfolio-list';
import { TransactionStatus } from 'src/components/mypage/transaction-status';
import { UserInfo } from 'src/components/mypage/user-info';
import { snsChannelStateStore } from 'src/status/store';
import { type NextPageWithLayout } from 'src/types/common';

interface Props {}

const ReviewerMypage: NextPageWithLayout<Props> = () => {
  const [showPopupGrade, setShowPopupGrade] = useState(false);
  const [snsChannel, snsChannelState] = snsChannelStateStore(state => [
    // 브랜드 SNS 채널 연결 상태
    state.snsChannel,
    state.snsChannelState,
  ]);

  return (
    <>
      <div className='mx-auto w-full 2xl:w-[1420px]'>
        <div className='relative p-[20px] 2xl:pb-[200px] 2xl:pt-[150px]'>
          <UserInfo userType='reviewer' />
          <TransactionStatus setShowPopupGrade={setShowPopupGrade} userType='reviewer' />
          <Image
            src='/assets/images/mypage-banner.webp'
            alt='마이페이지 배너'
            width={1424}
            height={186}
            className='mx-auto mb-[50px] min-h-[150px] object-contain xl:mt-[50px]'
          />
          <MyPortfolioList userType='reviewer' />
          <MyDashboard userType='reviewer' />
          {!snsChannel && (
            <div className='absolute left-0 top-[13%] h-full w-full bg-[#000000] opacity-[0.8]' />
          )}
        </div>
      </div>
      <GradePopup showPopupGrade={showPopupGrade} setShowPopupGrade={setShowPopupGrade} />
    </>
  );
};

ReviewerMypage.getLayout = page => <Layout>{page}</Layout>;

export default ReviewerMypage;
