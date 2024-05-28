import Image from 'next/image';
import { type NextPageWithLayout } from 'src/types/common';

interface Props {
  setShowPopupGuide: (open: boolean) => void;
  userType: string;
  guideConfirm: boolean;
}

export const GuideCreate: NextPageWithLayout<Props> = ({
  setShowPopupGuide,
  userType,
  guideConfirm,
}) => {
  return (
    <div className='border-t border-[#fff] py-[50px] sm:px-[30px] lg:px-0 lg:pl-[115px]'>
      <div className='flex cursor-pointer items-center' onClick={() => setShowPopupGuide(true)}>
        <b className='text-[20px] sm:text-[25px]'>
          {userType === 'reviewer' ? '제품 상세가이드' : '어필 가이드'}/진행 스케쥴{' '}
          {guideConfirm ? '확인하기' : '작성하기'}
        </b>
        <Image
          src='/assets/icons/link-icon.webp'
          alt='상세 가이드 아이콘'
          width={20}
          height={20}
          className='ml-[10px]'
        />
      </div>
      <p className='mt-[5px] text-[14px]'>
        만족스러운 결과물을 위하여 리뷰어에게 요청 사항을 정확히고 구체적으로 기입해주세요.
      </p>
      <p className='mt-[5px] text-[14px] text-[#f97090]'>
        ※ 상세 가이드 작성을 꼭 해주세요, 상세 가이드 작성이 안된 경우 신청이 불가 합니다.
      </p>
      {guideConfirm && (
        <div className='mt-[30px]'>
          <div className='mb-[5px]'>
            <span className='text-[20px] font-bold text-[#fff]'>협찬제공일정 : </span>
            <b className='text-[20px] font-[500] text-[#8586db]'>2026-06-24 ~ 2026-06-27</b>
          </div>
          <div>
            <span className='text-[20px] font-bold text-[#fff]'>제출완료일정 : </span>
            <b className='text-[20px] font-[500] text-[#f97090]'>2023-07-02~ 2023-07-05</b>
          </div>
        </div>
      )}
    </div>
  );
};
