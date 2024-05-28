import Image from 'next/image';
import { type NextPageWithLayout } from 'src/types/common';

interface Props {}

export const AmountPaid: NextPageWithLayout<Props> = () => {
  return (
    <div className='mt-[50px] px-[20px] sm:px-[28px]'>
      <b className='text-[25px]'>지급 금액</b>
      <div>
        <div className='mt-[20px] rounded-[10px] border border-[#fff] px-[20px] pb-[55px] pt-[28px] sm:px-[30px] md:px-[90px]'>
          <ul className='mb-[28px] px-[10px] sm:px-[20px]'>
            <li className='mb-[28px] flex justify-between'>
              <span className='text-[16px] sm:text-[20px]'>제안 포인트</span>
              <span className='text-[16px] sm:text-[20px]'>200,000 P</span>
            </li>
            <li className='flex justify-between'>
              <div className='relative flex items-center'>
                <span className='text-[16px] sm:text-[20px]'>수수료</span>
                <Image
                  src='/assets/icons/help-icon.webp'
                  alt='도움말 아이콘'
                  width={15}
                  height={20}
                  className='peer ml-[5px]'
                />
                <div className='absolute left-[88px] top-[-4px] hidden w-[305px] rounded-[10px] bg-[#c0c0c0] px-[14px] py-[8px] before:absolute before:left-[-15px] before:top-[15px] before:block before:border-b-[5px] before:border-l-[5px] before:border-r-[10px] before:border-t-[5px] before:border-b-[transparent] before:border-l-[transparent] before:border-r-[#c0c0c0] before:border-t-[transparent] peer-hover:block'>
                  <p className='text-[12px] text-[#2c2c2c]'>
                    할인 적용된 주문금액의 3.5%(VAT포함) <br />
                    플랫폼 운영 등 다양한 서비스 제공을 위해 사용 됩니다.
                  </p>
                </div>
              </div>
              <span className='text-[16px] sm:text-[20px]'>-500 P</span>
            </li>
          </ul>
          <div className='flex justify-between border-t border-[#fff] px-[10px] pt-[14px] sm:px-[20px]'>
            <span className='text-[16px] text-[#f97090] sm:text-[20px]'>
              총 결제 예정 금액{' '}
              <span className='block text-[#cccccc] sm:inline-block'>(VAT 포함)</span>
            </span>
            <span className='text-[16px] font-bold text-[#f97090] sm:text-[20px]'>199,500 P</span>
          </div>
        </div>
      </div>
    </div>
  );
};
