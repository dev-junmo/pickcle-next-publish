import Image from 'next/image';
import Link from 'next/link';
import { Layout } from 'src/components/layout';
import { type NextPageWithLayout } from 'src/types/common';

interface Props {}

const signUp: NextPageWithLayout<Props> = () => {
  return (
    <div className='flex items-center justify-center px-[30px] py-[150px] sm:px-0'>
      <div className='flex w-full flex-col items-center rounded-[30px] bg-[#f6f6f6] px-[15px] py-[42px] sm:w-[626px] sm:rounded-[50px] sm:px-[30px] xl:px-[50px]'>
        <Image src='/assets/icons/logo.webp' alt='logo' width={116} height={40} />
        <b className='mt-[45px] block w-full border-b border-[#8586db] pb-[15px] text-center text-[18px] font-bold sm:text-[20px]'>
          회원가입
        </b>
        <div className='w-full px-[15px]'>
          <button className='my-[30px] h-[60px] w-full rounded-[15px] bg-[#f97090] sm:rounded-[20px]'>
            <Link
              href='signup/reviewer'
              className='block h-full w-full text-[18px] font-bold leading-[60px] text-white sm:text-[20px]'
            >
              리뷰어 회원가입
            </Link>
          </button>
          <button className='mb-[30px] h-[60px] w-full rounded-[15px] bg-[#8586db] sm:rounded-[20px]'>
            <Link
              href='signup/advertiser'
              className='block text-[18px] font-bold leading-[60px] text-white sm:text-[20px]'
            >
              광고주 회원가입
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

signUp.getLayout = page => <Layout>{page}</Layout>;

export default signUp;
