import Link from 'next/link';
import { Layout } from 'src/components/layout';
import { type NextPageWithLayout } from 'src/types/common';

interface Props {}

const InformationCard: NextPageWithLayout<Props> = () => {
  return (
    <div className='flex flex-1 flex-col items-center justify-center rounded-[20px] border border-[#fff] px-[30px] py-[40px] sm:py-[50px]'>
      <p className='text-[30px] font-bold text-[#fff]'>
        고객센터 <span className='block text-[#f97090] sm:inline-block'>09:00 ~ 18:00</span>
      </p>
      <ul className='mt-[30px]'>
        <li className='mb-[5px] text-[18px] font-bold text-[#fff]'>* 주말/ 공휴일 휴무</li>
        <li className='text-[18px] font-bold text-[#fff]'>
          * 1:1 문의하기 답변 1~5일내에 순차적으로 답변드립니다.
        </li>
      </ul>
      <div className='mt-[30px]'>
        <Link
          href='/community/one-inquire'
          className='mb-[20px] block w-[234px] rounded-[20px] bg-[#e93963] px-[40px] py-[10px] text-center text-[20px] font-bold text-[#fff] sm:mb-0 sm:mr-[44px] sm:inline-block sm:w-auto'
        >
          1:1 문의하기
        </Link>
        <Link
          href='/community/my-inquire'
          className='block w-[234px] rounded-[20px] bg-[#8586db] px-[40px] py-[10px] text-center text-[20px] font-bold text-[#fff] sm:inline-block sm:w-auto'
        >
          나의 문의 내역
        </Link>
      </div>
    </div>
  );
};

InformationCard.getLayout = page => <Layout>{page}</Layout>;

export default InformationCard;
