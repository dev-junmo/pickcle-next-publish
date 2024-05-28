import { useState } from 'react';
import { AdvertiserSidebar } from 'src/components/advertiser-sidebar';
import { Layout } from 'src/components/layout';
import { AttachmentUpload } from 'src/components/mypage/portfolio-register/attachment-upload';
import { PortfolioImage } from 'src/components/mypage/portfolio-register/portfolio-image';
import { PortfolioInput } from 'src/components/mypage/portfolio-register/portfolio-input';
import PreviewPopup from 'src/components/mypage/portfolio-register/preview-popup';
import { RefundPolicy } from 'src/components/mypage/portfolio-register/refund-policy';
import { TermsUse } from 'src/components/mypage/portfolio-register/terms-use';
import { type NextPageWithLayout } from 'src/types/common';

interface Props {}

const SupporterProductIntroduction: NextPageWithLayout<Props> = () => {
  const [showPreviewPopup, setShowPreviewPopup] = useState(false);

  return (
    <>
      <div className='md:flex'>
        <AdvertiserSidebar />
        <div className='mx-auto w-full px-[20px] py-[100px] text-[#fff] xl:w-[1040px] xl:px-0 2xl:w-[1420px]'>
          <b className='block border-b border-b-[#fff] border-opacity-[0.8] pb-[25px] text-center text-[25px] font-[500] text-[#ffffff] 2xl:text-[30px]'>
            <span className='text-[#f97090]'>서포터</span>브랜드 제품소개서 등록하기
          </b>
          <div className='mb-[50px] mt-[15px] items-center justify-end sm:mb-[130px] sm:flex'>
            <span className='mr-[30px] text-[16px] font-[500] text-[#fff] md:text-[20px]'>
              임시저장 불러오기
            </span>
            <select className='mt-[10px] block h-[50px] w-[250px] rounded-[5px] bg-[#fff] bg-[url(/assets/icons/arrow-bottom-small.webp)] bg-[length:20px_20px] bg-[right_10px_top_15px] bg-no-repeat pl-[15px] text-[#2d2d2d] sm:mt-0 sm:inline-block'>
              <option>어린쑥 수분진정플루이드 01</option>
              <option>어린쑥 수분진정플루이드 01</option>
            </select>
          </div>
          <div className='mx-auto w-full xl:w-[1040px]'>
            <PortfolioInput userType='advertiser' />
            <PortfolioImage userType='advertiser' />
            <AttachmentUpload userType='advertiser' />
            <TermsUse userType='advertiser' />
            <div className='mt-[100px] flex w-full items-center justify-end border-t border-[#fff]'>
              <button
                className='mt-[5px] h-[31px] w-[78px] rounded-[10px] bg-[#ccc] text-[14px] font-bold text-[#2d2d2d]'
                onClick={() => setShowPreviewPopup(true)}
              >
                미리보기
              </button>
            </div>
            <RefundPolicy userType='advertiser' />
            <div className='mt-[100px] flex items-center justify-center'>
              <button className='mr-[50px] h-[59px] w-[150px] rounded-[10px] bg-[#cccccc] text-[20px] font-bold text-[#2d2d2d]'>
                임시저장
              </button>
              <button className='h-[59px] w-[150px] rounded-[10px] bg-[#8586db] text-[20px] font-bold text-[#fff]'>
                등록하기
              </button>
            </div>
          </div>
        </div>
      </div>
      <PreviewPopup
        userType='advertiser'
        showPreviewPopup={showPreviewPopup}
        setShowPreviewPopup={setShowPreviewPopup}
      />
    </>
  );
};

SupporterProductIntroduction.getLayout = page => <Layout>{page}</Layout>;

export default SupporterProductIntroduction;
