import * as Switch from '@radix-ui/react-switch';
import { MyCalender } from 'src/components/mypage/my-portfolio-list/my-calender';
import { type NextPageWithLayout } from 'src/types/common';

interface Props {
  userType: string;
}

export const MyBasicInfo: NextPageWithLayout<Props> = ({ userType }) => {
  return (
    <div className='mb-[100px] mt-[20px] w-full'>
      <b className='my-[30px] block text-[25px] font-[500] text-[#fff] sm:text-[30px]'>기본정보</b>
      <div>
        <b className='mb-[30px] block text-[18px] font-[500] text-[#fff] sm:text-[20px]'>
          {userType === 'reviewer' ? '자기' : '브랜드'}소개{' '}
          <span className='text-[16px] font-[500] text-[#cccccc]'>(0/50)</span>
        </b>
        <textarea
          className='h-[72px] w-full rounded-[5px] pl-[15px] pt-[11px] text-[16px] font-[500] text-[#2d2d2d] placeholder-[#c0c0c0]'
          placeholder={
            userType === 'reviewer'
              ? '자기소개 한마디와 원하는 거래 금액을 입력해주세요.'
              : '브랜드소개 한마디를 입력해 주세요.'
          }
        />
      </div>
      <div className='mb-[40px] mt-[30px]'>
        <b className='mb-[30px] block border-b border-[#fff] pb-[7px] text-[18px] font-[500] text-[#fff] sm:text-[20px]'>
          해시태그
        </b>
        <textarea
          className='h-[72px] w-full rounded-[5px] pl-[15px] pt-[11px] text-[16px] font-[500] text-[#2d2d2d] placeholder-[#c0c0c0]'
          placeholder='#뷰티여왕 #코스메틱'
        />
        <p
          className={`${
            userType === 'reviewer' ? 'text-[#f97090]' : 'text-[#8586db]'
          } text-[14px] font-[500] sm:text-[16px]`}
        >
          * 해시태그는 3개까지 가능하며 최대 8자 내외까지 가능합니다.
        </p>
      </div>
      <div>
        <b className='mb-[30px] block border-b border-[#fff] pb-[7px] text-[18px] font-[500] text-[#fff] sm:text-[20px]'>
          {userType === 'reviewer' ? '가능' : '진행'} 스케쥴
        </b>
        <MyCalender userType={userType} />
      </div>
    </div>
  );
};
