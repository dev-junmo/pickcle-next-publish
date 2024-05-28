import { AdvertiserSidebar } from 'src/components/advertiser-sidebar';
import { Layout } from 'src/components/layout';
import { AllPortfolio } from 'src/components/mypage/my-portfolio-list/all-portfolio';
import BusinessDatePopup from 'src/components/mypage/my-portfolio-list/business-date-popup';
import { MyBasicInfo } from 'src/components/mypage/my-portfolio-list/my-basic-info';
import PersonalDatePopup from 'src/components/mypage/my-portfolio-list/personal-date-popup';
import { PortfolioRegister } from 'src/components/mypage/my-portfolio-list/portfolio-register';
import RegularDatePopup from 'src/components/mypage/my-portfolio-list/regular-date-popup';
import { type NextPageWithLayout } from 'src/types/common';

interface Props {}

const MyPortfolioList: NextPageWithLayout<Props> = () => {
  return (
    <>
      <div className='md:flex'>
        <AdvertiserSidebar />
        <div className='mx-auto w-full px-[20px] py-[100px] text-[#fff] md:w-[80%] xl:w-[1040px] xl:px-0 2xl:w-[1420px]'>
          <b className='block border-b border-b-[#fff] border-opacity-[0.8] pb-[25px] text-center text-[25px] text-[#ffffff] sm:text-[30px] 2xl:text-[30px]'>
            제품 소개서 리스트 관리
          </b>
          <div className='mx-auto xl:w-[1040px]'>
            <MyBasicInfo userType='advertiser' />
            <AllPortfolio userType='advertiser' />
            <PortfolioRegister userType='advertiser' />
          </div>
          <button className='block h-[59px] w-full rounded-[10px] bg-[#f97090] text-[18px] font-bold text-[#fff] md:mx-auto md:w-[190px] 2xl:text-[20px]'>
            저장
          </button>
        </div>
      </div>
      <RegularDatePopup />
      <BusinessDatePopup />
      <PersonalDatePopup />
    </>
  );
};

MyPortfolioList.getLayout = page => <Layout>{page}</Layout>;

export default MyPortfolioList;
