import { Layout } from 'src/components/layout';
import { PortfolioDetailDescription } from 'src/components/portfolio-detail/portfolio-detail-description';
import { ProfileImages } from 'src/components/portfolio-detail/profile-images';
import { ProfileInfo } from 'src/components/portfolio-detail/profile-info';
import { Regulation } from 'src/components/proposal/regulation';
import { type NextPageWithLayout } from 'src/types/common';

interface Props {}

const PortfolioDetail: NextPageWithLayout<Props> = () => {
  return (
    <div className='mx-auto w-full px-[30px] text-[#fff] xl:w-[1040px] xl:px-0 2xl:w-[1420px]'>
      <div className='mb-[75px] mt-[100px] flex flex-col items-center justify-center gap-[100px] lg:flex-row lg:items-start'>
        <ProfileImages userType='reviewer' />
        <ProfileInfo userType='reviewer' />
      </div>
      <PortfolioDetailDescription userType='reviewer' />
      <Regulation />
    </div>
  );
};

PortfolioDetail.getLayout = page => <Layout>{page}</Layout>;

export default PortfolioDetail;
