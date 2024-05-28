import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import PreviewPopup from 'src/components/proposal/preview';
import { type NextPageWithLayout } from 'src/types/common';

interface Props {
  userType: string;
}

export const PaymentInput: NextPageWithLayout<Props> = ({ userType }) => {
  const [previewOpen, setPreviewOpen] = useState(false);

  return (
    <>
      <div className='border-t border-[#fff] py-[30px] sm:px-[30px] lg:px-[115px]'>
        <b className='text-[25px]'>제안 포인트 입력</b>
        <form>
          <div className='mb-[50px] mt-[20px] pl-0 md:pl-[17px]'>
            <label className='mr-[20px] inline-block w-[115px]'>제안 포인트</label>
            <input
              type='text'
              className='mt-[10px] block h-[40px] w-full rounded-[5px] bg-[#fff] sm:mt-0 sm:inline-block sm:w-auto md:w-[356px]'
            />
          </div>
          <div className='rounded-[10px] border border-[#fff] px-[17px] py-[30px]'>
            <div>
              <label className='mr-[20px] inline-block w-[115px]'>사용 가능한 쿠폰</label>
              <input
                type='text'
                className='mt-[10px] block h-[40px] w-full rounded-[5px] bg-[#fff] sm:mt-0 sm:inline-block sm:w-auto md:w-[356px]'
              />
            </div>
            {userType === 'reviewer' && (
              <div className='mt-[36px]'>
                <label className='mr-[20px] inline-block w-[115px]'>포인트 사용</label>
                <div className='block items-center sm:inline-flex'>
                  <input
                    type='text'
                    className='mt-[10px] block h-[40px] w-full rounded-[5px] bg-[#fff] sm:mt-0 sm:inline-block sm:w-auto md:w-[356px]'
                  />
                  <div className='mt-[10px] flex items-center sm:ml-[20px] sm:mt-0'>
                    <label htmlFor='full-use' className='flex items-center'>
                      <input type='checkbox' id='full-use' className='peer hidden' />
                      <span className='mr-[10px] inline-block h-[20px] w-[20px] rounded-[2px] border border-[#c0c0c0] bg-center bg-no-repeat peer-checked:bg-[url(/assets/icons/check-icon.webp)] peer-checked:bg-[length:13px_13px]' />
                      <span className='text-[14px] text-[#c0c0c0]'>전액사용</span>
                    </label>
                  </div>
                </div>
                <span className='mt-[20px] block text-[#f97090] sm:ml-[135px] sm:mt-[2px]'>
                  보유 포인트: 0P
                </span>
              </div>
            )}
          </div>
        </form>
      </div>
      <div className='mt-[50px] sm:px-[30px] lg:px-[115px]'>
        <b className='text-[25px]'>
          {userType === 'reviewer' ? '결제 예정 금액' : '지급 예정 포인트'}
        </b>
        <div className='mt-[20px] rounded-[10px] border border-[#fff] py-[17px]'>
          <ul className='mb-[43px] px-[20px]'>
            <li className='mb-[15px] flex justify-between'>
              <span>제안 금액</span>
              <span>99,000 원</span>
            </li>
            <li className='flex justify-between'>
              <div className='relative flex items-center'>
                <span>수수료</span>
                <Image
                  src='/assets/icons/help-icon.webp'
                  alt='도움말 아이콘'
                  width={15}
                  height={20}
                  className='peer ml-[5px]'
                />
                <div className='absolute left-[79px] top-[-7px] hidden w-[305px] rounded-[10px] bg-[#c0c0c0] px-[14px] py-[8px] before:absolute before:left-[-15px] before:top-[15px] before:block before:border-b-[5px] before:border-l-[5px] before:border-r-[10px] before:border-t-[5px] before:border-b-[transparent] before:border-l-[transparent] before:border-r-[#c0c0c0] before:border-t-[transparent] peer-hover:block'>
                  <p className='text-[12px]'>
                    할인 적용된 주문금액의 3.5%(VAT포함) <br />
                    플랫폼 운영 등 다양한 서비스 제공을 위해 사용 됩니다.
                  </p>
                </div>
              </div>
              <span>-500 원</span>
            </li>
          </ul>
          <div className='flex justify-between border-t border-[#fff] px-[20px] pt-[14px]'>
            <span className='text-[#f97090]'>
              총 결제 예정 금액 <span className='text-[#cccccc]'>(VAT 포함)</span>
            </span>
            <span className='font-bold text-[#f97090]'>98,500 원</span>
          </div>
        </div>
      </div>
      <div className='mt-[40px] sm:px-[30px] lg:px-[115px]'>
        <strong className='font-normal text-[#f97090]'>꼭 알아두세요!</strong>
        <ul className='mt-[5px]'>
          <li className='text-[14px]'>
            * 제안 금액 최종 협의 후 확정이 되면 포인트차감이 진행 됩니다.
          </li>
          <li className='text-[14px]'>
            * 차감 되신 금액은 컨펌 이 후 해당 리뷰어에게 정산(포인트 지급) 됩니다.
          </li>
          <li className='text-[14px] text-[#f97090]'>
            단, 자동컨펌기간 내 컨펌을 하지 않은 경우{' '}
            <span className='text-[#8586db] underline'>자동 컨펌</span> 되오니 꼭 참고해 주시기
            바랍니다.
          </li>
          <li className='text-[14px]'>
            * 서비스 거래는 &apos;포인트&apos; 로만 결제가 가능합니다. 포인트가 부족하신 경우{' '}
            <Link href='#' className='text-[16px] text-[#8586db]'>
              여기
            </Link>{' '}
            를 눌러 포인트 충전 후 다시 시도하여 주세요{' '}
          </li>
        </ul>
      </div>
      <div className='mt-[50px] sm:px-[30px] lg:px-[115px]'>
        <b className='text-[25px]'>거래 안내 및 개인정보 제 3자 제공 동의</b>
        <div className='mt-[20px] rounded-[10px] border border-[#fff] px-[14px] pb-[40px] pt-[28px]'>
          <ul>
            <li className='mb-[24px] flex items-center'>
              <label htmlFor='all-agreement' className='flex items-center'>
                <input type='checkbox' id='all-agreement' className='peer hidden' />
                <span className='mr-[13px] inline-block h-[24px] w-[24px] rounded-[2px] border border-[#c0c0c0] bg-center bg-no-repeat peer-checked:bg-[url(/assets/icons/check-icon.webp)] peer-checked:bg-[length:13px_13px]' />
                <span className='text-[18px] font-bold text-[#fff]'>
                  해당내용에 전체 동의 합니다.
                </span>
              </label>
            </li>
            <li className='mb-[13px] flex items-center'>
              <label htmlFor='terms-agreement' className='flex items-center'>
                <input type='checkbox' id='terms-agreement' className='peer hidden' />
                <span className='mr-[13px] inline-block h-[20px] w-[20px] shrink-0 rounded-[2px] border border-[#c0c0c0] bg-center bg-no-repeat peer-checked:bg-[url(/assets/icons/check-icon.webp)] peer-checked:bg-[length:13px_13px]' />
                <span className='text-[16px] text-[#fff] sm:w-auto'>
                  서비스 거래를 위한 개인정보 제 3자 제공약관 확인 및 동의 합니다.
                </span>
              </label>
            </li>
            <li className='mb-[13px] flex items-center'>
              <label htmlFor='marketing-agreement' className='flex items-center'>
                <input type='checkbox' id='marketing-agreement' className='peer hidden' />
                <span className='mr-[13px] inline-block h-[20px] w-[20px] shrink-0 rounded-[2px] border border-[#c0c0c0] bg-center bg-no-repeat peer-checked:bg-[url(/assets/icons/check-icon.webp)] peer-checked:bg-[length:13px_13px]' />
                <span className='text-[16px] text-[#fff] sm:w-auto'>
                  서비스 거래 완료된 콘텐츠는, 해당 광고주 및 회사가 2차 마케팅으로 활용 동의
                  합니다.
                </span>
              </label>
            </li>
            <li className='flex items-center'>
              <label htmlFor='disadvantage-agreement' className='flex items-center'>
                <input type='checkbox' id='disadvantage-agreement' className='peer hidden' />
                <span className='mr-[13px] inline-block h-[20px] w-[20px] shrink-0 rounded-[2px] border border-[#c0c0c0] bg-center bg-no-repeat peer-checked:bg-[url(/assets/icons/check-icon.webp)] peer-checked:bg-[length:13px_13px]' />
                <span className='text-[16px] text-[#fff] sm:w-auto'>
                  콘텐츠 유지기간 및 마감기한 사전 공유 없이 불이행시 패널티 및 불이익(법적조치)
                  동의합니다.
                </span>
              </label>
            </li>
          </ul>
        </div>
      </div>
      <div className='mt-[10px] flex items-center justify-end sm:px-[30px] lg:px-[115px]'>
        <button
          className='h-[34px] w-[90px] rounded-[10px] bg-[#cccccc] text-[16px] font-bold text-[#2d2d2d]'
          onClick={() => setPreviewOpen(true)}
        >
          미리보기
        </button>
      </div>
      <button
        className={`mx-auto mt-[100px] block h-[59px] w-[214px] rounded-[10px] text-[20px] font-bold leading-[59px] text-[#fff] sm:w-[454px] ${
          userType === 'reviewer' ? 'bg-[#f97090]' : 'bg-[#8586db]'
        }`}
      >
        제안 신청
      </button>

      {previewOpen && (
        <PreviewPopup
          userType={userType}
          previewOpen={previewOpen}
          setPreviewOpen={setPreviewOpen}
        />
      )}
    </>
  );
};
