import Image from 'next/image';
import { Layout } from 'src/components/layout';
import { AmountPaid } from 'src/components/transaction-management/application-view/amount-paid';
import { ProgressSchedule } from 'src/components/transaction-management/application-view/progress-schedule';
import { ProponentInfo } from 'src/components/transaction-management/application-view/proponent-info';

import { type NextPageWithLayout } from 'src/types/common';

interface Props {}

const ApplicationView: NextPageWithLayout<Props> = () => {
  return (
    <div className='mx-auto w-full px-[30px] py-[100px] text-[#fff] lg:w-[1000px] lg:px-0'>
      <ProponentInfo />
      <ProgressSchedule />
      <div className='mt-[30px] flex items-center pl-[20px] sm:pl-[28px]'>
        <b className='mr-[5px] text-[25px]'>어필가이드 보기</b>
        <Image src='/assets/icons/link-icon.webp' alt='이동 아이콘' width={20} height={20} />
      </div>
      <AmountPaid />
    </div>
  );
};

ApplicationView.getLayout = page => <Layout>{page}</Layout>;

export default ApplicationView;
