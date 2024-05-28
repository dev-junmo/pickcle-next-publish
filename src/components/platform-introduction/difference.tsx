import { Layout } from 'src/components/layout';
import { type NextPageWithLayout } from 'src/types/common';

interface Props {}

const Difference: NextPageWithLayout<Props> = () => {
  return (
    <div className='relative w-full h-[570px] xl:h-auto bg-[#eaeaff] pt-[60px] md:pt-[40px] pb-[38px] xl:pt-[100px] 2xl:pt-[200px] text-center'>
      <b className='text-[30px] md:text-[35px] 2xl:text-[45px] text-[#000]'>
        <span className='text-[#e93963]'>PICK</span>
        <span className='text-[#8586db]'>CLE</span>은 뭐가 다른가요?
      </b>
      <div className='hidden xl:flex mt-[-100px] items-end justify-between'>
        <div className='ml-[23px] w-[328px] h-[587px] 2xl:h-[845px] 2xl:w-[429px] bg-[url(/assets/images/platform-person-bg01.webp)] bg-contain bg-no-repeat text-[0px]'>
          bg 이미지1
        </div>
        <div className='mr-[22px] w-[258px] h-[527px] 2xl:h-[707px] 2xl:w-[318px] bg-[url(/assets/images/platform-person-bg02.webp)] bg-contain bg-no-repeat text-[0px]'>
          bg 이미지2
        </div>
      </div>
      <ul className='w-full px-[30px] xl:px-0 absolute bottom-[100px] 2xl:bottom-[300px] left-[50%] xl:w-[1040px] 2xl:w-[1420px] translate-x-[-50%] text-left'>
        <li className='text-[16px] mb-[40px] md:mb-[70px] 2xl:mb-[100px] md:text-[20px] 2xl:text-[25px] font-bold text-[#494949]'>
          <span className='mr-[20px] inline-block h-[44px] w-[135px] rounded-[20px] bg-[#fff] text-center leading-[44px]'>
            {' '}
            하나!
          </span>{' '}
          하나의 플랫폼 안에서 마케팅으로 활용 가능한 온라인 리뷰작업부터 사진. 동영상까지 모든
          콘텐츠를 처리 할 수 있어요.
        </li>
        <li className='text-[16px] mb-[40px] md:mb-[70px] 2xl:mb-[100px] md:text-[20px] 2xl:text-[25px] font-bold text-[#494949]'>
          <span className='mr-[20px] inline-block h-[44px] w-[135px] rounded-[20px] bg-[#fff] text-center leading-[44px]'>
            둘!
          </span>{' '}
          대행사 없이 리뷰어 &lt;-&gt; 광고주 서로가 자유롭게 직접 어필하고 제안할 수 있어요.
        </li>
        <li className='text-[16px] md:text-[20px] 2xl:text-[25px] font-bold text-[#494949]'>
          <span className='mr-[20px] inline-block h-[44px] w-[135px] rounded-[20px] bg-[#fff] text-center leading-[44px]'>
            셋!
          </span>{' '}
          하나의 플랫폼 안에서 마케팅으로 활용 가능한 온라인 리뷰작업부터 사진. 동영상까지 모든
          콘텐츠를 처리 할 수 있어요.
        </li>
      </ul>
    </div>
  );
};

Difference.getLayout = page => <Layout>{page}</Layout>;

export default Difference;
