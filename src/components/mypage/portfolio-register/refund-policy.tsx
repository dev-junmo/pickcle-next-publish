import Image from 'next/image';
import { useState } from 'react';
import * as Switch from '@radix-ui/react-switch';
import { type NextPageWithLayout } from 'src/types/common';

interface Props {
  userType: string;
}

export const RefundPolicy: NextPageWithLayout<Props> = ({ userType }) => {
  return (
    <div className='w-full'>
      <b className='text-[20px] font-bold text-[#fff]'>취소 / 환불 및 포인트 지급 규정</b>
      <p className='mb-[30px] mt-[15px] text-[16px] font-[500] text-[#fff]'>
        제안 취소는 거래 시작 전까지 가능합니다.
      </p>
      <p className='mb-[30px] text-[16px] font-[500] text-[#fff]'>
        거래가 시작되면 거래 취소는 절대 불가하며, 부득이한 상황이 생기는 경우 <br />
        고객센터 1:1문의하기를 통해 취소 사유를 남겨주시면 심사를 통해 처리됩니다.
      </p>
      <p className='mb-[30px] text-[16px] font-[500] text-[#fff]'>
        서비스 거래 진행 과정은 아래와 같아요. 참고하여 서비스 거래를 진행해주세요. <br />[ 제안
        &gt; 조율 &gt; 진행중(거래 시작) &gt; 제출 &gt; 컨펌 &gt; 지급완료 ]
      </p>
      <p className='text-[16px] font-[500] text-[#fff]'>
        결과물 제출 후 광고주의 컨펌 완료 시 포인트 지급이 완료됩니다. <br />
        단,{' '}
        <span className={`${userType === 'reviewer' ? 'text-[#f97090]' : 'text-[#8586db]'}`}>
          자동컨펌기간 내에 컨펌이 안되는 경우 자동컨펌 및 포인트 지급 되오니 유의하시기 바랍니다.
        </span>
      </p>
    </div>
  );
};
