import { type NextPageWithLayout } from 'src/types/common';

interface Props {
  userType: string;
}

export const ChangePassword: NextPageWithLayout<Props> = ({ userType }) => {
  return (
    <div className='mb-[100px] mt-[20px] w-full'>
      <b className='text-[25px] text-[#fff] lg:text-[30px]'>비밀번호 변경</b>
      <div className='mt-[10px] items-center border-b border-t-[2px] border-[#fff] py-[25px] sm:flex'>
        <div className='mb-[10px] mr-[20px] w-[130px] shrink-0 sm:mb-0 lg:mr-[25px]'>
          <span className='text-[18px] font-[500] text-[#fff] lg:text-[20px]'>현재 비밀번호</span>
        </div>
        <div className='w-full sm:w-[50%]'>
          <input type='text' className='h-[50px] w-full rounded-[5px] bg-[#fff] lg:h-[50px]' />
        </div>
      </div>
      <div className='items-center border-b border-[#fff] py-[25px] sm:flex'>
        <div className='mb-[10px] mr-[20px] w-[130px] shrink-0 sm:mb-0 lg:mr-[25px]'>
          <span className='text-[18px] font-[500] text-[#fff] lg:text-[20px]'>새 비밀번호</span>
        </div>
        <div className='w-full sm:w-[50%]'>
          <input type='text' className='h-[50px] w-full rounded-[5px] bg-[#fff] lg:h-[50px]' />
        </div>
      </div>
      <div className='items-center border-b border-[#fff] py-[25px] sm:flex'>
        <div className='mb-[10px] mr-[20px] w-[130px] shrink-0 sm:mb-0 lg:mr-[15px]'>
          <span className='text-[18px] font-[500] text-[#fff] lg:text-[20px]'>
            새 비밀번호 확인
          </span>
        </div>
        <div className='w-full sm:w-[50%]'>
          <input type='text' className='h-[50px] w-full rounded-[5px] bg-[#fff] lg:h-[50px]' />
        </div>
      </div>
      <p className='mt-[10px] text-[14px] text-[#f97090] lg:text-[16px]'>
        *{userType === 'reviewer' ? '리뷰어' : '광고주'}님의 소중한 정보 보호를 위해 비밀번호를
        주기적으로 변경 해주시는것을 권장 드립니다.
      </p>
    </div>
  );
};
