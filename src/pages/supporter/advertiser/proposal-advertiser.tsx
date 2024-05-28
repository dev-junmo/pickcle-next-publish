import { CategoryContents } from 'src/components/category-filter/category-contents';
import { CategoryTab } from 'src/components/category-filter/category-tab';
import { HomeBanner } from 'src/components/home';
import { Layout } from 'src/components/layout';
import { type NextPageWithLayout } from 'src/types/common';

interface Props {}

const ProposalAdvertiser: NextPageWithLayout<Props> = () => {
  return (
    <div className='relative'>
      <HomeBanner />
      <div className='mx-auto w-full px-[30px] xl:w-[1040px] xl:px-0 2xl:w-[1420px]'>
        <CategoryTab />
        <CategoryContents actionType='supporter' userType='advertiser' />
      </div>
    </div>
  );
};

ProposalAdvertiser.getLayout = page => <Layout>{page}</Layout>;

export default ProposalAdvertiser;
