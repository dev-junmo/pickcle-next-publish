import { Layout } from 'src/components/layout';
import { Calendar } from 'src/components/proposal/calendar';
import { MannerReview } from 'src/components/proposal/manner-review';
import { ProposalCard } from 'src/components/proposal/proposal-card';
import { ProposalInventory } from 'src/components/proposal/proposal-inventory';
import { ProposalProfile } from 'src/components/proposal/proposal-profile';
import { Regulation } from 'src/components/proposal/regulation';
import { type NextPageWithLayout } from 'src/types/common';
interface Props {}

const PortfolioList: NextPageWithLayout<Props> = () => {
  return (
    <div className='mx-auto w-full px-[30px] text-[#fff] xl:w-[1040px] xl:px-0 2xl:w-[1420px]'>
      <div className='mt-[100px] block items-start justify-around gap-[65px] lg:flex 2xl:gap-0'>
        <ProposalCard userType='advertiser' />
        <ProposalProfile userType='advertiser' />
      </div>
      <div className='mt-[100px] text-center'>
        <b className='inline-block w-[250px] bg-[url(/assets/icons/calendar-icon.webp)] bg-[length:40px_39px] bg-[200px_center] bg-no-repeat text-[30px] text-[#fff]'>
          가능 스케줄
        </b>
        <Calendar userType='advertiser' />
      </div>
      <ProposalInventory userType='advertiser' />
      <MannerReview userType='advertiser' />
      <Regulation />
    </div>
  );
};

PortfolioList.getLayout = page => <Layout>{page}</Layout>;

export default PortfolioList;
