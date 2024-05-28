import { useState } from 'react';
import { Layout } from 'src/components/layout';
import DetailedGuide from 'src/components/proposal/detailed-guide';
import { GuideCreate } from 'src/components/proposal-apply/guide-create';
import { PaymentInput } from 'src/components/proposal-apply/payment-input';
import { RecipientInfo } from 'src/components/proposal-apply/recipient-info';
import { type NextPageWithLayout } from 'src/types/common';

interface Props {}

const ProposalApply: NextPageWithLayout<Props> = () => {
  const [showPopupGuide, setShowPopupGuide] = useState(false);

  return (
    <>
      <div className='mx-auto w-full px-[30px] py-[100px] text-[#fff] lg:w-[1000px] lg:px-0'>
        <RecipientInfo userType='reviewer' />
        <GuideCreate setShowPopupGuide={setShowPopupGuide} userType='reviewer' />
        <PaymentInput userType='reviewer' />
      </div>
      <DetailedGuide showPopupGuide={showPopupGuide} setShowPopupGuide={setShowPopupGuide} />
    </>
  );
};

ProposalApply.getLayout = page => <Layout>{page}</Layout>;

export default ProposalApply;
