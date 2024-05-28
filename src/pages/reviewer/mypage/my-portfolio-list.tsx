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
      <div className='mx-auto w-full px-[20px] py-[100px] text-[#fff] xl:w-[1040px] xl:px-0 2xl:w-[1420px]'>
        <b className='block border-b border-b-[#fff] border-opacity-[0.8] pb-[25px] text-center text-[25px] text-[#ffffff] 2xl:text-[30px]'>
          나의 포트폴리오 리스트
        </b>
        <div className='mx-auto xl:w-[1040px]'>
          <MyBasicInfo userType='reviewer' />
          <AllPortfolio userType='reviewer' />
          <PortfolioRegister userType='reviewer' />
        </div>
        <button className='block h-[59px] w-full rounded-[10px] bg-[#f97090] text-[18px] font-bold text-[#fff] md:mx-auto md:w-[190px] 2xl:text-[20px]'>
          저장
        </button>
      </div>
      <RegularDatePopup />
      <BusinessDatePopup />
      <PersonalDatePopup />
    </>
  );
};

MyPortfolioList.getLayout = page => <Layout>{page}</Layout>;

export default MyPortfolioList;
